function computerPlay(){
    let arr = ['Rock', 'Paper', 'Sissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)

    if(playerSelection == computerSelection){
       return "It's a Tie!"
    }
    else if((playerSelection == 'Rock' && computerSelection == 'Sissors') || 
            (playerSelection == 'Paper' && computerSelection == 'Rock') ||
            (playerSelection == 'Sissors' && computerSelection == 'Paper')){
        return "You Win! " + playerSelection + " beats " + computerSelection
    }
    else{
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
  }

/*function game(){
    for (let i = 0; i < 5; i++) {
        let ans = prompt("Rock, Paper, or Sissors?")

        if (ans == null) return
        
        console.log(playRound(ans, computerPlay()))
     }
  }*/

//game()
//const playerSelection = "rock";
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));