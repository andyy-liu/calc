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


// create buttons for operations & numbers
// for (let i = 0; i < 10; i++) {
//     const calcBtn = document.createElement('div')
//     calcBtn.classList.add("operators")
//     calcBtn.textContent = i
//     calculatorBody.appendChild(calcBtn)
// }


// displaying numbers & operators on press and storing them
let calcDisplay = document.querySelector("#calculator-output")
let numInput1 = 0


const userNumInput = document.querySelectorAll(".numbers")
userNumInput.forEach(box => {
    box.addEventListener("click", () => {
        calcDisplay.textContent += box.textContent
        numInput1 += box.textContent
    })
})