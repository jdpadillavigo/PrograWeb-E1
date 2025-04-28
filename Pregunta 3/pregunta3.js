const butSaveOnClick = function() {
    const name = document.getElementById("name")
    const age = document.getElementById("age")
    const message = document.getElementById("message")
    if (name.value == "" ||
        age.value == ""
    ) {
        message.setAttribute("class", "container__message__error")
        message.innerText = "Error, debe llenar todos los campos."
    } else {
        message.setAttribute("class", "container__message__ok")
        message.innerText = "Se guardó con éxito."
    }
}

const main = function() {
    const butSave = document.getElementById("but-save")
    butSave.addEventListener("click", butSaveOnClick)
}

main()