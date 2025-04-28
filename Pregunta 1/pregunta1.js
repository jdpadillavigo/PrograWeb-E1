const butAddOnClick = function() {
    const inputArea = document.getElementById("input-area")
    inputArea.setAttribute("class", "show-menu")
}

const main = function() {
    const butAdd = document.getElementById("but-add")
    butAdd.addEventListener("click", butAddOnClick)
}

main()