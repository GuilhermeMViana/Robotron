const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

const controle = document.querySelectorAll(".controle-ajuste")
const pecas = document.querySelectorAll(".controle-contador")

controle.forEach((element) => {
    element.addEventListener("click", (event) => { manipuladorDeDados(event.target.textContent) })
})

function manipuladorDeDados(operacao) {

    for (let i = 0; i < pecas.length; i++) {
        if (operacao === "-") {
            if (pecas[i].value > 0) {
                pecas[i].value = parseInt(braco.value) - 1
            }
        } else {
            pecas[i].value = parseInt(braco.value) + 1
        }
    }
}
