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
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            console.log(add(num1, num2));
            break;
        case "-":
            console.log(subtract(num1, num2));
            break;
        case "*":
            console.log(multiply(num1, num2));
            break;
        case "/":
            console.log(divide(num1, num2));
            break;
        default:
            return "There was an operator error.";
    }
}



const num1 = 53;
const operator = "+";
const num2 = 103;

operate(num1, operator, num2);