// global variables and event listeners
var firstNumber = "",
	secondNumber = "",
	operator = "",
	result = 0,
	hasNumber = false,
	firstNumberComplete = false,
	lockButtons = false,
	calcButtons = document.querySelectorAll("button");

	for (var i = 0; i < calcButtons.length; i++) {
		calcButtons[i].addEventListener("click", function () {
			document.querySelector("#result").innerText = this.innerText;
		});
	}