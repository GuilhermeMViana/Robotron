const estatistica = document.querySelectorAll("[data-estatistica]")
const controle = document.querySelectorAll("[data-controle]")
const partes = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((element) => {
    element.addEventListener("click", (event) => {
        manipuladorDeDados(event.target.dataset.controle, event.target.parentNode)
        atualizarEstatiticas(event.target.dataset.pecas)
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

function atualizarEstatiticas(pecas) {
    console.log(partes[pecas])
    estatistica.forEach((element) => {
        element.textContent = parseInt(element.textContent) + partes[pecas][element.dataset.estatistica]
    })
}

