function computerPlay()
{
    let randomNumber = Number((Math.floor(Math.random() * 3)+1))
    
    if (randomNumber == 1) {
        choice = "rock"
    } else if (randomNumber == 2) {
        choice = "paper"
    } else {
        choice = "scissors"
    }

    return choice
}

function playRound (playerSelection, computerPlay)
{
    switch (playerSelection)
    {
        case "rock":
            if (computerPlay == "rock") {
                return "Tie"
            } else if (computerPlay == "paper") {
                return "You Lose! Paper beats Rock"
            } else {
                return "You Win! Rock beats Scissors"
         }
        case "paper":
            if (computerPlay == "paper") {
                return "Tie"
            } else if (computerPlay == "scissors") {
                return "You Lose! Scissors beats Paper"
            } else {
                return "You Win! Paper beats Rock"
            }
        case "scissors":
            if (computerPlay == "scissors") {
                return "Tie"
            } else if (computerPlay == "rock") {
                return "You Lose! Rock beats Scissors"
            } else {
                return "You Win! Scissors beats Paper"
            }
    }
}

function game()
{
    let humanScore = 0
    let computerScore = 0
    let i
    for (i=0; i<5; i++) {
        const playerChoice = prompt("rock, paper, or scissors?").toLowerCase()
        const computerChoice = computerPlay()
        const result = playRound(playerChoice, computerChoice)
        console.log("Computer chooses " + computerChoice)
        console.log("You choose " + playerChoice)
        if (result.search("Win") >= 0) {
            humanScore++
            console.log(result)
        } else if (result.search("Lose") >= 0) {
            computerScore++
            console.log(result)
        } else {
            console.log(result)
        }
    }
    if (humanScore > computerScore) {
        console.log(`Congratulations, you are the winner! You won ${humanScore} to ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`Better luck next time, friend! The computer has bested you with a score of ${computerScore} to ${humanScore}`)
    } else {
        console.log("It looks like the game has finished in a tie.")
    }
}
