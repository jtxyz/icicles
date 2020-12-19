const data = {
  render: (millis, positions) => {
    d3.select("#time").text(millis);

    d3.select("#positions")
      .selectAll("li")
      .data(positions)
      .text((d) => d.toFixed(4))
      .enter()
      .append("li")
      .text((d) => d.toFixed(4));
  },
};
