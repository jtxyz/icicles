const visualisation = {
  init: () => {
    d3.select("svg")
      .selectAll("g")
      .data(
        Array(5)
          .fill()
          .map(() => Array(12).fill())
      )
      .enter()
      .append("g")
      .attr("id", (column, i) => `icicle-${i}`)
      .selectAll("circle")
      .data((column, i) => column.map(() => i))
      .enter()
      .append("circle")
      .attr("cx", (column, _) => column * 60 + 10)
      .attr("cy", (_, row) => row * 30 + 10)
      .attr("style", "fill:darkslategrey;")
      .attr("r", 8);
  },

  render: (offsets) => {
    offsets.forEach((offset, i) => {
      d3.select(`#icicle-${i}`)
        .selectAll("circle")
        .style("fill", function (d, i) {
          const start = offset;
          const end = offset + 5;

          return (i >= start && i <= end) || i <= end - 24
            ? "white"
            : "darkslategrey";
        });
    });
  },
};
