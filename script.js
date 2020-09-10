let order = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 amarelo 
//3 azul 

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');

//cria order aleatoria de cores
let shuffleOrder = () => {
    let colorOder = Math.floor((Math.random() * 4));
    order[order.length] = colorOder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

//acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');

    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se o botões clicados são os mesmos da ordem gerad no jogo
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver()
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(` Pontuação: ${score}\n Você acertou! 
        Iniciando pro nível`)
        nextLevel();

    }

}

//funcao para clique do usuario 

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')
    
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
     checkOrder()

    },250)

   
}



// retorna cor
let createColorElement = (color) => {
    if (color == 0) {
        return green;

    } else if (color == 1) {

        return red;

    } else if (color == 2) {

        return yellow;

    } else if (color == 3) {

        return blue;
    }

}

//funcao para proximo nivel

let nextLevel = ()=>{
    score++;
    shuffleOrder();
}

// game over 

let gameOver = ()=>{
    alert(`Pontuação: ${score}!\n Você perdeu o jogo!\n Cloque 
    em ok para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];

    playGame();
}

//play
let playGame = ()=>{
    
    alert("bem vindo ao Genesis iniciando");
    score =0; 
    nextLevel();
    
}

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


//inicio do jogo
playGame();
