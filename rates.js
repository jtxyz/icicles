const rates = {
  init: (ratesChangedCallback) => {
    const presets = [
      { label: "1", rates: [1.006, 1.00601, 1.00602, 1.00603, 1.00604] },
      { label: "2", rates: [1.006, 1.00602, 1.00604, 1.00606, 1.00608] },
      { label: "3", rates: [1.006, 1.00604, 1.00608, 1.00612, 1.00616] },
      { label: "4", rates: [1.0061, 1.0062, 1.0063, 1.0064, 1.0065] },
    ];

    const activatePreset = (id) => {
      const preset = presets[id].rates;

      document
        .querySelector("#rates")
        .querySelectorAll("input")
        .forEach((input, i) => {
          input.value = preset[i];
        });

      ratesChangedCallback(preset);
    };

    const initialisePresets = () => {
      document
        .querySelector("#presets")
        .querySelectorAll("button")
        .forEach((button, i) => {
          button.innerHTML = presets[i].label;
          button.onclick = () => {
            activatePreset(i);
          };
        });
    };

    document.querySelector("#set-rates").onclick = () => {
      const inputs = document.querySelector("#rates").querySelectorAll("input");
      const newRates = [...inputs].map((input, i) => parseFloat(input.value));

      if (newRates.some((it) => isNaN(it))) {
        return;
      }

      ratesChangedCallback(newRates);
    };

    return {
      activatePreset,
      initialisePresets,
    };
  },
};
