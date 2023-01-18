const controle = document.querySelectorAll("[data-controle]")

controle.forEach((element) => {
    element.addEventListener("click", (event) => {
        manipuladorDeDados(event.target.dataset.controle, event.target.parentNode)
    })
})

function manipuladorDeDados(operacao, controle) {
    const pecas = controle.querySelector("[data-contador]")

    if (operacao === "-") {
        if (pecas.value > 0)
            pecas.value = parseInt(pecas.value) - 1
    } else {
        pecas.value = parseInt(pecas.value) + 1
    }
}

