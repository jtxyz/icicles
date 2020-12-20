const clock = {
  timer: (eachFrame = () => {}) => {
    let activeRequest;
    let previousTimestamp;
    let running = false;
    let multiplier = 1;

    const step = (timestamp) => {
      const input = document.querySelector("#auto-speed");
      const multiplier = parseFloat(input.value) || 1;

      const elapsed = timestamp - (previousTimestamp || timestamp);

      eachFrame(elapsed * multiplier);

      previousTimestamp = timestamp;
      activeRequest = window.requestAnimationFrame(step);
    };

    const start = () => {
      activeRequest = window.requestAnimationFrame(step);
    };

    const stop = () => {
      window.cancelAnimationFrame(activeRequest);
      activeRequest = null;
      previousTimestamp = null;
    };

    const toggle = () => {
      if ((running = !running)) {
        start();
      } else {
        stop();
      }
    };

    document.querySelector("#auto-play").onclick = toggle;

    return {
      toggle,
    };
  },
};
