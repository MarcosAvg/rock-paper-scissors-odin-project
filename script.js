
// Retorna un string con la eleccion aleatoria de la computadora
function getComputerChoice() {
    const randomizer = Math.floor(Math.random() *10);
    let computerChoice;
    
    if (randomizer < 3) {
        computerChoice = 'Rock';

    }else if (randomizer < 6 && randomizer > 3) {
        computerChoice = 'Papper';

    }else {
        computerChoice = 'Scissors';
    }

    return computerChoice;
}

// Muestra un mensaje en pantalla y retorna la eleccion del usuario
function getHumanChoice() {
    let election = parseInt(prompt('Elige una opción:\n[1] - Piedra\n[2] - Papel\n[3] - Tijeras', undefined));

    switch (election) {
        case 1:
            election = 'Rock';
            break;

        case 2:
            election = 'Papper';
            break;

        case 3:
            election = 'Scissors';
            break;
    }

    return election;
}

// Incrementa la puntuación
function humanScore(points) {
    points ++;
    return points;
}

function computerScore(points) {
    points ++;
    return points;
}

// Establece una ronda del juego
function playRound(humanChoice, computerChoice) {
    // Variable que guarda el valor dependiendo la situacion [1] gana jugador, [2] gana CPU, [3] empate
    let result;

    // Compara las elecciones del usuario con las de la maquina
    switch (humanChoice) {
        case 'Rock':
            switch (computerChoice) {
                case 'Rock':
                    result = 'Empate';
                    break;
                case 'Papper':
                    result = 'Pierdes';
                    break;
                case 'Scissors':
                    result = 'Ganas';
                    break;
            }
            break;

        case 'Papper':
            switch (computerChoice) {
                case 'Rock':
                    result = 'Ganas';
                    break;
                case 'Papper':
                    result = 'Empate';
                    break;
                case 'Scissors':
                    result = 'Pierdes';
                    break;
            }
            break;
        
        case 'Scissors':
            switch (computerChoice) {
                case 'rock':
                    result = 'Pierdes';
                    break;
                case 'Papper':
                    result = 'Ganas';
                    break;
                case 'Scissors':
                    result = 'Empate';
                    break;
            }
            break;
    }

    return result;
}

// Itera en i ocaciones la ronda de juego
function playGame () {

    let result = '';
    let humanPoints = 0;
    let computerPoints = 0;

    for (let i = 0; i < 5; i++) {
        // Variables que guardan las elecciones del jugador y la cpu
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        result = playRound(humanChoice,computerChoice);
        
        //Imprime en consola el resultado de la ronda y suma los puntos
        switch (result) {
            case 'Ganas':
                console.log(`¡Ganaste! en la ronda: ${i + 1}`);
                humanPoints = humanScore(humanPoints);
                break;
        
            case 'Pierdes':
                console.log(`Perdiste en la ronda: ${i + 1}`);
                computerPoints = computerScore(computerPoints);
                break;
            
            case 'Empate':
                console.log(`Empate en la ronda: ${i + 1}`);
        }
    }

    alert(`Puntos del usuario: ${humanPoints}\nPuntos de la CPU: ${computerPoints}`)
}

playGame();