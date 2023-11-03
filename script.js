const result = document.querySelector ('.result')
const humanScore = document.querySelector ('#human-score')
const machineScore = document.querySelector ('#machine-score')


let humanScoreNumebr = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    

    playtheGame(humanChoice , PlayMachine())
}

const PlayMachine = () => {
    const choices = ['rock','papper','scissors']
    const randomNumber = Math.floor(Math.random() *3)

    return choices[randomNumber]
 
}

const playtheGame = (human, machine) => {
    console.log('Humano:'+ human + "Maquina" + machine)
    
    if (human === machine) {
        result.innerHTML = "Deu empate!"
        } else if (
            (human === 'papper' && machine === 'rock') ||
            (human === 'rosck' && machine === 'scissors') ||
            (human === 'scissors' && machine === 'papper') 
        ) {
            humanScoreNumebr++
            humanScore.innerHTML = humanScoreNumebr
            result.innerHTML = "voce ganhou!"
        } else {
            machineScoreNumber++
            machineScore.innerHTML = machineScoreNumber
            result.innerHTML = "Voce Perdeu para o Bichinho Virtual! "
        }
    
}
    