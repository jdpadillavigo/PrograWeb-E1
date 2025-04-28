const errorMessage = "Falta ingresar valores"

const butAddOnClick = function() {
    const number1 = document.getElementById("n1")
    const number2 = document.getElementById("n2")
    if (number1.value == "" ||
        number2.value == ""
    ) {
        console.error(errorMessage)
    } else {
        const operation = parseFloat(number1.value) + parseFloat(number2.value) 
        const result = document.getElementById("result")
        result.value = operation
    }
}

const butSubstractOnClick = function() {
    const number1 = document.getElementById("n1")
    const number2 = document.getElementById("n2")
    if (number1.value == "" ||
        number2.value == ""
    ) {
        console.error(errorMessage)
    } else {
        const operation = parseFloat(number1.value) - parseFloat(number2.value) 
        const result = document.getElementById("result")
        result.value = operation
    }
}

const butMultiplyOnClick = function() {
    const number1 = document.getElementById("n1")
    const number2 = document.getElementById("n2")
    if (number1.value == "" ||
        number2.value == ""
    ) {
        console.error(errorMessage)
    } else {
        const operation = parseFloat(number1.value) * parseFloat(number2.value) 
        const result = document.getElementById("result")
        result.value = operation
    }
}

const butDivideOnClick = function() {
    const number1 = document.getElementById("n1")
    const number2 = document.getElementById("n2")
    if (number1.value == "" ||
        number2.value == ""
    ) {
        console.error(errorMessage)
    } else {
        const operation = parseFloat(number1.value) / parseFloat(number2.value) 
        const result = document.getElementById("result")
        result.value = operation
    }
}

const main = function() {
    const butAdd = document.getElementById("but-add")
    const butSubstract = document.getElementById("but-substract")
    const butMultiply = document.getElementById("but-multiply")
    const butDivide = document.getElementById("but-divide")
    butAdd.addEventListener("click", butAddOnClick)
    butSubstract.addEventListener("click", butSubstractOnClick)
    butMultiply.addEventListener("click", butMultiplyOnClick)
    butDivide.addEventListener("click", butDivideOnClick)
}

main()