const icicle = {
  cycleLength: 24,
  calculatePositions(rates, time) {
    const positions = rates.map(
      (rate) => ((time * rate * this.cycleLength) / 1000) % this.cycleLength
    );
    const offsets = positions.map((it) => Math.floor(it));
    return { positions, offsets };
  },
};
