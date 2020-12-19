const rates = {
  init: (ratesChangedCallback) => {
    const presets = [
      { label: "1", rates: [0.016, 0.01601, 0.01602, 0.01603, 0.01604] },
      { label: "2", rates: [0.016, 0.01602, 0.01604, 0.01606, 0.01608] },
      { label: "3", rates: [0.016, 0.01604, 0.01608, 0.01612, 0.01616] },
      { label: "4", rates: [0.0161, 0.0162, 0.0163, 0.0164, 0.0165] },
    ];

    const activatePreset = (id) => {
      const preset = presets[id].rates;

      document
        .querySelector("#rates")
        .querySelectorAll("input")
        .forEach((input, i) => {
          input.value = preset[i];
        });

      return preset;
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
