const butAddOnClick = function() {
    const inputText = document.getElementById("input-text")
    const msg = document.getElementById("message")
    if (inputText.value == "") {
        msg.style.display = "block"
        setTimeout(() => {
            msg.style.display = "none"
        }, 5000)
    } else {
        msg.style.display = "none"
        const menuList = document.getElementById("menu-list")
        const newLi = document.createElement('li')
        newLi.innerHTML = inputText.value
        menuList.appendChild(newLi)
    }
}

const butMenuOnClick = function() {
    const list = document.getElementById("list")
    if (list.style.display == "none") {
        list.style.display = "block"
    } else {
        list.style.display = "none"   
    }
}

const main = function() {
    const butAdd = document.getElementById("but-add")
    butAdd.addEventListener("click", butAddOnClick)
    const butMenu = document.getElementById("but-menu")
    butMenu.addEventListener("click", butMenuOnClick)
}

main()