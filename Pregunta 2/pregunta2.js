const calculator = (operation) => {
    const number1 = document.getElementById("n1")
    const number2 = document.getElementById("n2")
    const msg = document.getElementById("message")
    msg.style.display = "none"
    if (number1.value == "" ||
        number2.value == ""
    ) {
        result.value = ""
        msg.innerText = "¡Falta ingresar valores!"
        msg.style.display = "block"
        setTimeout(() => {
            msg.style.display = "none"
        }, 5000)
    } else {
        const result = document.getElementById("result")
        if (operation == "add") {
            result.value = parseFloat(number1.value) + parseFloat(number2.value)
            msg.style.display = "none"
        } else if (operation == "subtract") {
            result.value = parseFloat(number1.value) - parseFloat(number2.value)
            msg.style.display = "none"
        } else if (operation == "multiply") {
            result.value = parseFloat(number1.value) * parseFloat(number2.value)
            msg.style.display = "none"
        } else if (operation == "divide") {
            if (parseFloat(number2.value) === 0) {
                result.value = ""
                msg.innerText = "¡No se puede dividir entre 0!"
                msg.style.display = "block"
            } else {
                result.value = parseFloat(number1.value) / parseFloat(number2.value)
                msg.style.display = "none"
            }
        }
    }
}

const main = () => {
    const butAdd = document.getElementById("but-add")
    const butSubtract = document.getElementById("but-subtract")
    const butMultiply = document.getElementById("but-multiply")
    const butDivide = document.getElementById("but-divide")
    butAdd.addEventListener("click", () => calculator("add"))
    butSubtract.addEventListener("click", () => calculator("subtract"))
    butMultiply.addEventListener("click", () => calculator("multiply"))
    butDivide.addEventListener("click", () => calculator("divide"))
}

main()