const robotron = document.querySelector('.robo')

robotron.addEventListener("click", (event) => {
    console.log(event);
});

function conversaRobotron(nome) {
    console.log(`Olá, ${nome}`);
}

conversaRobotron("Bigas")