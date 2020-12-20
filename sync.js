const sync = {
  ranges: () => {
    let synced = true;
    let syncStart = 0;
    let syncEnd = 0;
    let syncedRanges = [];

    const check = (time, { positions, offsets }) => {
      if (offsets.every((e, i, a) => e === a[0])) {
        if (syncedRanges.some((r) => r[0] <= time && r[1] >= time)) {
          // do nothing
        } else {
          if (synced) {
            if (syncStart > time) {
              syncStart = time;
            } else {
              syncEnd = time;
            }
          } else {
            synced = true;
            syncStart = time;
            syncEnd = time;
          }
        }
      } else {
        if (synced) {
          syncedRanges.push([syncStart, syncEnd]);
          synced = false;
        }
      }
    };

    const render = () => {
      const join = d3.select("#ranges").selectAll("li").data(syncedRanges);

      join
        .enter()
        .append("li")
        .text(function (d, i) {
          return `${d[0]} – ${d[1]}`;
        });

      join.exit().remove();
    };

    return {
      check,
      render,
    };
  },
};
