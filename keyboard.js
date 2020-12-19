const keyboard = {
	bindArrows: (callback) => {
		document.addEventListener(
			"keydown",
			(event) => {
				if (event.target.nodeName.toLowerCase() === "input") {
					return;
				}

				switch (event.key) {
					case "ArrowRight": {
						callback(1);
						break;
					}
					case "ArrowLeft": {
						callback(-1);
						break;
					}
				}
			},
			false
		);
	},

	bindSpace: (callback) => {
		document.addEventListener(
			"keydown",
			(event) => {
				if (event.target.nodeName.toLowerCase() === "input") {
					return;
				}

				switch (event.key) {
					case " ": {
						callback();
						break;
					}
				}
			},
			false
		);
	},
}