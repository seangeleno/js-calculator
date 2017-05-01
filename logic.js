var firstNumber = "",
    secondNumber = "",
    operator = "",
    result = 0,
    hasNumber = false,
    /* hasNumber goes from false, true, false*/
    firstNumberComplete = false,
    lockButtons = false,
    buttonQuery,
    boot;

var boot = document.querySelector(".bootstrap"),
    resultDiv = document.getElementById("result"),
    firstNum = document.getElementById("first-number"),
    secondNum = document.getElementById("second-number"),
    buttonQuery = document.getElementsByTagName("button"),
    numbers = document.querySelectorAll(".number"),
    symbol = document.querySelectorAll(".operator"),
    displaySymbol = document.querySelector("#operator");

boot.addEventListener("click", function() {
    bootstrapify();
    console.info("Bootstrapify() has been bootstrapified! Yay!")
});

// for loop will 
for (var i = 0; i < buttonQuery.length; i++) {


    buttonQuery[i].addEventListener("click", function() {

        //console.log(this);
        //console.log("Success!! You've clicked on " + this.innerText)
        //console.log("Element clicked had class: " + this.getAttribute("class"));

        //console.log(buttonQuery[i].getAttribute(""));
        if (this.getAttribute("class").includes("number") && !lockButtons) {
            hasNumber = true;
            console.log("you clicked a " + this.getAttribute("class") + " class");
            if (firstNumberComplete === false) {
                firstNumber += this.getAttribute("value");
                console.log("First Number: " + firstNumber + " but is not done yet!");
                // was missing crucial part here :()
                firstNum.innerText = firstNumber;

            } else {
                secondNumber += this.getAttribute("value");
                console.log("Finally, Second Number: " + secondNumber);
                secondNum.textContent = secondNumber;
            }
        }

        if (this.getAttribute("class").includes("operator") && hasNumber && !lockButtons) {
            firstNumberComplete = true;
            firstNum.innerText = firstNumber;
            displaySymbol.innerText = this.innerText;
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
            lockButtons = false;
            document.getElementById("first-number").innerText = "", document.getElementById("second-number").innerText = "";
            document.getElementById("result").innerText = "";
        }

    });
};