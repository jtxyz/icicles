const render = ({ positions, offsets, millis }) => {
  const join = d3.select("#ranges").selectAll("li").data(syncedRanges);

  join
    .enter()
    .append("li")
    .text(function (d, i) {
      return `${d[0]} – ${d[1]}`;
    });

  join.exit().remove();

  d3.select("#time").text(millis);

  d3.select("#positions")
    .selectAll("li")
    .data(positions)
    .text((d) => d.toFixed(4))
    .enter()
    .append("li")
    .text((d) => d.toFixed(4));
};

let rates;
let autoSpeed = 1;

const activatePreset = (id) => {
  const presets = [
    [0.801, 0.802, 0.803, 0.804, 0.805],
    [0.801, 0.802, 0.803, 0.804, 0.805],
    [0.801, 0.802, 0.803, 0.804, 0.805],
    [0.801, 0.802, 0.803, 0.804, 0.805],
  ];
  const preset = presets[id];
  preset.forEach((e, i) => (document.querySelector(`#rate-${i}`).value = e));

  rates = preset;
  syncedRanges = [];
  time = 0;
};

const setRates = () => {
  const newRates = rates.map((e, i) =>
    parseFloat(document.querySelector(`#rate-${i}`).value)
  );

  if (newRates.some((it) => isNaN(it))) {
    return;
  }

  rates = newRates;
  syncedRanges = [];
  time = 0;
  reset();
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
