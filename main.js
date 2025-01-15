function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(num1, num2, operator) {
    switch (operator) {
        case plus:
            result = add(num1, num2)
            break;
        case minus:
            result = subtract(num1, num2)
            break;
        case times:
            result = multiply(num1, num2)
            break;
        case slash:
            result = divide(num1, num2)
    }
}

