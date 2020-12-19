const ranges = {
  render: ({ positions, offsets, millis }) => {
    const join = d3.select("#ranges").selectAll("li").data(syncedRanges);

    join
      .enter()
      .append("li")
      .text(function (d, i) {
        return `${d[0]} – ${d[1]}`;
      });

    join.exit().remove();
  },
};

const jump = () => {
  time = parseInt(document.querySelector("#jump").value || 0);
  reset();
};

const reset = () => {
  synced = false;
  syncStart = undefined;
  syncEnd = undefined;
  render(calculatePositions());
};

const auto = (element) => {
  const input = document.querySelector("#autoSpeed");
  if (req) {
    input.disabled = false;
    element.innerHTML = "Start";
    clock.stop();
  } else {
    autoSpeed = parseInt(input.value) || 1;
    input.disabled = true;
    input.value = `${autoSpeed}x`;
    element.innerHTML = "Stop";
    clock.start();
  }
};
