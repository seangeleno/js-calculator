// global variables and event listeners
var firstNumberValue,
    secondNumberValue,
    operator = "",
    result = 0,
    hasNumber = false,
    firstNumberComplete = false,
    lockButtons = false,
    calcButtons = document.querySelectorAll("button");
for (var i = 0; i < calcButtons.length; i++) {
    calcButtons[i].addEventListener("click", function() {
        //document.querySelector("#result").innerText = this.innerText;
        resultSelector = document.getElementById('result');
        symbol = document.getElementById('symbol')
        if (this.getAttribute("class").includes("number") && !lockButtons) {
            hasNumber = true;
            firstNumberValue = "";
            // First number waits until user chooses operator for final value
            if (firstNumberComplete !== true) {
                var firstNumberSelector = document.querySelector('#first-number');

                firstNumberValue = this.getAttribute("value");
                firstNumberSelector.innerText = firstNumberValue;
                console.log(firstNumberValue)
            } else {
                

                secondNumberValue = this.getAttribute("value");
                console.log(secondNumberValue);
            }
        }

        // Operator logic goes here
        if (this.getAttribute("class").includes("operator") && hasNumber & !lockButtons) {
            firstNumberComplete = true;
            symbol.innerText = this.getAttribute('value');
        }

        // Equal Sign actually does math
        if (this.getAttribute("class").includes("equal") && !lockButtons) {
            lockButtons = true;
            firstNumberValue = parseInt(firstNumberValue);
            secondNumberValue = parseInt(secondNumberValue);

            if (this.getAttribute("class").includes("plus")) {
                result = firstNumberValue + secondNumberValue;
            }
            if (this.getAttribute("class").includes("minus")) {
                result = firstNumberValue - secondNumberValue;
            }
            if (this.getAttribute("class").includes("times")) {
                result = firstNumberValue * secondNumberValue;
            }
            if (this.getAttribute("class").includes("divide")) {
                result = firstNumberValue / secondNumberValue;
            }
            if (this.getAttribute("class").includes("power")) {
                result = Math.pow(firstNumberValue, secondNumberValue);
            }

            document.querySelector('#second-number').textContent = secondNumberValue;
            resultSelector.textContent = result;
        }
        if (this.getAttribute("class").includes("clear")) {
            var firstNumberValue = "",
                secondNumberValue = "",
                operator = "",
                result = 0,
                hasNumber = false,
                firstNumberComplete = false,
                lockButtons = false;
            // back to square 1 :)
        }
    });
}