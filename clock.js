const clock = {
  timer: (eachMillisecond = () => {}, eachFrame = () => {}) => {
    let activeRequest;
    let previousTimestamp;
    let running = false;

    const step = (timestamp) => {
      const elapsed = timestamp - (previousTimestamp || timestamp);

      let state;
      for (i = 0; i < elapsed; i++) {
        state = eachMillisecond();
      }

      eachFrame(elapsed);
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
      if (running = !running) {
        start();
      } else {
        stop();
      }
    }

    return {
      toggle,
    };
  },
}