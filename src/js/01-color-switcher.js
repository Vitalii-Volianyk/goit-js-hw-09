(() => {
	const Start = document.querySelector("[data-start]");
	const Stop = document.querySelector("[data-stop]");
	let intervalId;
	Start.addEventListener("click", () => {
		intervalId = setInterval(() => {
			document.body.style.backgroundColor = getRandomHexColor();
		}, 1000);
		Start.toggleAttribute("disabled");
		Stop.toggleAttribute("disabled");
	});
	Stop.addEventListener("click", () => {
		clearInterval(intervalId);
		Start.toggleAttribute("disabled");
		Stop.toggleAttribute("disabled");
	});
	function getRandomHexColor() {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	}
})();
