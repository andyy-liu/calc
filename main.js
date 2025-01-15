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

const calculatorFrame = document.querySelector("#calculator-frame")
const calculatorBody = document.querySelector("#calculator-body")
const calculatorDisplay = document.querySelector("#calculator-display")

// create display
const calcDisplay = document.createElement('div')
calcDisplay.classList.add("display")
calculatorDisplay.appendChild(calcDisplay)

// create buttons for operations & numbers
for (let i = 0; i < 18; i++) {
    const calcBtn = document.createElement('div')
    calcBtn.classList.add("operators")
    calcBtn.textContent = i
    calculatorBody.appendChild(calcBtn)
}
