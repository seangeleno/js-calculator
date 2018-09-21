(function calculator() {
    var firstNumber = "",
        secondNumber = "",
        operator = "",
        result = 0,
        hasNumber = false,
        firstNumberComplete = false,
        lockButtons = false,
        buttonQuery = document.getElementsByTagName("button");

    for (var i = 0; i < buttonQuery.length; i++) {
        buttonQuery[i].addEventListener("click", function() {
            if (this.getAttribute("class").includes("number") && !lockButtons) {
                hasNumber = true;
                console.log("you clicked a " + this.getAttribute("class") + " class");
                if (firstNumberComplete === false) {
                    firstNumber += this.getAttribute("value");
                    console.log("First Number: " + firstNumber + " but is not done yet!");
                    document.getElementById("first-number").innerText = firstNumber;
                } else {
                    secondNumber += this.getAttribute("value");
                    console.log("Finally, Second Number: " + secondNumber);
                    document.getElementById("second-number").textContent = secondNumber;
                }
            }
            if (this.getAttribute("class").includes("operator") && hasNumber && !lockButtons) {
                firstNumberComplete = true;
                document.getElementById("first-number").innerText = firstNumber;
                document.querySelector("#operator").innerText = this.innerText;
                console.log('First Number is Complete', 'you clicked the operator ' + this.getAttribute("value") + ", next step is the second number.");
                operator = this.getAttribute("value");
            }
            if (this.getAttribute("class").includes("equal") && !lockButtons) {
                lockButtons = true;
                firstNumber = parseInt(firstNumber);
                secondNumber = parseInt(secondNumber);

                if (operator.includes("plus")) {
                    result = firstNumber + secondNumber;
                }
                if (operator.includes("minus")) {
                    result = firstNumber - secondNumber;
                }
                if (operator.includes("times")) {
                    result = firstNumber * secondNumber;
                }
                if (operator.includes("divide")) {
                    result = firstNumber / secondNumber;
                }
                if (operator.includes("power")) {
                    result = Math.pow(firstNumber, secondNumber);
                }

                document.getElementById("second-number").textContent = secondNumber;
                document.getElementById("result").textContent = result;
            }
            if (this.getAttribute("class").includes("clear")) {

                firstNumber = "",
                    secondNumber = "",
                    operator = "",
                    result = 0,
                    hasNumber = false, /* hasNumber goes from false, true, false*/
                    firstNumberComplete = false,
                    lockButtons = false,
                    document.getElementById("first-number").innerText = "", document.getElementById("second-number").innerText = "";
                    document.querySelector("#operator").innerText = "";
                document.getElementById("result").innerText = "";
            }
        });
    };
})();
