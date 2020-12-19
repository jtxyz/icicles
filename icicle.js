const icicle = {
  calculatePositions: (rate, time) => {
    const positions = rates.map((rate) => (time * rate) % 24);
    const offsets = positions.map((it) => Math.floor(it));
    return { positions, offsets };
  };
};
