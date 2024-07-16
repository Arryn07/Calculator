const operators = ["/", "*", "-", "+"];
const displayContainer = document.querySelector("#display");
const numBtns = document.querySelector("#num-container");
displayValue = [];
numBtns.addEventListener("click", (e) => {
    switch (e.target) {
        case document.querySelector("#btn-1"):
            displayValue.push(1);
            break;
        case document.querySelector("#btn-2"):
            displayValue.push(2);
            break;
        case document.querySelector("#btn-3"):
            displayValue.push(3);
            break;
        case document.querySelector("#btn-4"):
            displayValue.push(4);
            break;
        case document.querySelector("#btn-5"):
            displayValue.push(5);
            break;
        case document.querySelector("#btn-6"):
            displayValue.push(6);
            break;
        case document.querySelector("#btn-7"):
            displayValue.push(7);
            break;
        case document.querySelector("#btn-8"):
            displayValue.push(8);
            break;
        case document.querySelector("#btn-9"):
            displayValue.push(9);
            break;
        case document.querySelector("#btn-0"):
            displayValue.push(0);
            break;
        case document.querySelector("#pos-neg"):
            if (displayValue.includes("-")) {
                displayValue.splice(0, 1);
            } else {
                displayValue.unshift("-");
            }
            break;
        case document.querySelector("#decimal"):
            if (displayValue.includes(".")) {
                break;
            }
            displayValue.push(".");
            break;
        case document.querySelector("#delete"):
            displayValue.pop();
            break;
        case document.querySelector("#clear"):
            displayValue.splice(0, displayValue.length);
            break;
        default:
            break;
    }

    displayContainer.textContent = displayValue.join("");
})

const operatorBtns = document.querySelector("#operator-container");
let operator = "";
operatorBtns.addEventListener("click", (e) => { 
    switch (e.target) {
        case document.querySelector("#btn-divide"):
            displayValue.push("/");
            operator = "/";
            break;
        case document.querySelector("#btn-multiply"):
            displayValue.push("*");
            operator = "*";
            break;
        case document.querySelector("#btn-subtract"):
            displayValue.push("-");
            operator = "-";
            break;
        case document.querySelector("#btn-add"):
            displayValue.push("+");
            operator = "+";
            break;
        case document.querySelector("#btn-operate"):
            operate(operator);
            break;
    }

    displayContainer.textContent = displayValue.join("");
})

function checkOperator(displayValue, operators) {
    return displayValue.some(v => operators.includes(v));
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == 0) {
        alert("Do you think you're clever?");
        return 0;
    } else return num1 / num2;
}

function operate(operator) {
    const cutoff = displayValue.indexOf(operator);
    const num1 = displayValue.slice(0, cutoff).join("");
    const num2 = displayValue.slice(cutoff + 1, displayValue.length).join("");

    switch (operator) {
        case "+":
            result = add(Number(num1), Number(num2));
            displayResult(result);
            break;
        case "-":
            result = subtract(Number(num1), Number(num2));
            displayResult(result);
            break;
        case "*":
            result = multiply(Number(num1), Number(num2));
            displayResult(result);
            break;
        case "/":
            result = divide(Number(num1), Number(num2));
            displayResult(result);
            break;
        default:
            return "There was an operator error.";
    }
    // displayValue.splice(0, displayValue.length);
}

function displayResult (result) {
    displayContainer.textContent = result;
    displayValue.splice(0, displayValue.length);
    resultArr = result.toString().split("");
    resultArr.forEach(num => displayValue.push(num));
}


displayContainer.textContent = displayValue.join("");