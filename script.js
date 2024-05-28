
// Retorna un string con la eleccion aleatoria de la computadora
function getComputerChoice() {
    const randomizer = Math.random() *10;
    let computerChoice;
    
    if (randomizer <= 3) {
        computerChoice = 'Rock';

    }else if (randomizer <= 6 && eleccion > 3) {
        computerChoice = 'Papper';

    }else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

function getHumanChoice() {
    const election = prompt('Elige una opción:\n[1] - Piedra\n[2] - Papel\n[3] - Tijeras', undefined);
    console.log(election);
    return election;
}

function humanScore(points) {
    points ++;
    return points;
}

function computerScore(points) {
    points ++;
    return points;
}

function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = 0;

    switch (humanChoice) {
        case 1:
            switch (computerChoice) {
                case 'Rock':
                    result = 3;
                    break;
                case 'Paper':
                    result = 2;
                    break;
                case 'Scissors':
                    result = 1;
                    break;
            }
            break;

        case 2:
            switch (computerChoice) {
                case 'Rock':
                    result = 1;
                    break;
                case 'Paper':
                    result = 3;
                    break;
                case 'Scissors':
                    result = 2;
                    break;
            }
            break;
        
        case 3:
            switch (computerChoice) {
                case 'Rock':
                    result = 2;
                    break;
                case 'Paper':
                    result = 1;
                    break;
                case 'Scissors':
                    result = 3;
                    break;
            }
            break;
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

playGame();