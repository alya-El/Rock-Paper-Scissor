function game(){
    let playerScore = 0;
    let computerScore = 0;
    const playerStatus = document.querySelector(".player-score p");
    const computerStatus = document.querySelector(".computer-score p");

    function playMatch(){
        const options = document.querySelectorAll(".selections .select-button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const roundWinner = document.querySelector('.intro h2')
        
        //load hand images
        playerHand.src = `./assets/Rock.png`;
        computerHand.src = `./assets/Rock.png`;
        
        //computer options
        let computerOptions = ['Rock', 'Paper', 'Scissor'];

        options.forEach(function(option){
            option.addEventListener("click", function(){
                //computer choice
                let computerChoice = computerOptions[Math.floor(Math.random() * computerOptions.length)];
                console.log(this.textContent);
                //compare hands
                roundWinner.textContent = compareHands(this.textContent, computerChoice);

                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;

                //update scores
                playerStatus.textContent = playerScore;
                computerStatus.textContent = computerScore;

                //check for winner
                if(computerScore == 5 || playerScore == 5){
                    checkWinner(roundWinner);
                }
            });
        });
    };

    function checkWinner(roundWinner){
        //display winner
        if(computerScore == 5){
            roundWinner.textContent = "You Lose..."
        }
        else{
            roundWinner.textContent = "You Win!"
        }

        //make all selections buttons disappear
        document.querySelector('.selections').style.visibility = 'hidden';

        //show "Play Again" button
        document.querySelector('#play-again').style.visibility = 'visible';

        //if "Play Again" button is clicked, restart the game
        document.querySelector('#play-again').addEventListener("click", function(){
            //hide "play again" button and show selections buttons again
            document.querySelector('.selections').style.visibility = 'visible';
            document.querySelector('#play-again').style.visibility = 'hidden';
            
            //reset scores
            playerScore = 0;
            computerScore = 0;

            //reset all scores and status text
            playerStatus.textContent = playerScore;
            computerStatus.textContent = computerScore;
            roundWinner.textContent = "First to Score 5 Points Wins!";
        });
    };

    function compareHands(playerChoice, computerChoice){
        //Rock-Paper-Scissor logic
        if(playerChoice === computerChoice){
            return "It's a Tie!";
         }
         else if((playerChoice === 'Rock' && computerChoice == 'Scissor') || 
                 (playerChoice === 'Paper' && computerChoice == 'Rock') ||
                 (playerChoice == 'Scissor' && computerChoice == 'Paper')){
            playerScore++;
            return "You Win! " + playerChoice + " beats " + computerChoice;
         }
         else{
            computerScore++;
            return "You Lose! " + computerChoice + " beats " + playerChoice;
         }
    };

    playMatch();
};

game();
