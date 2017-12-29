var buttons = document.querySelectorAll('button'); //Store all buttons on page in a nodelist
var outcome = document.getElementById('Outcome'); //Output of a game
var scoreboard = document.getElementById('ScoreBoard'); //Display of the score
var FinalResult = document.getElementById('FinalResult'); //Final outcome of 5 round game
var Intro = document.getElementById('Intro'); //Display intro 

var player_score = 0;
var computer_score = 0;

function computerPlay() 
	{
		//Function to randomly generate Rock/Paper/Scissor for PC
		let RandNumber = Math.floor((Math.random()*3)+1) //Give # between 1 and 3
		if (RandNumber == 1) {
			return "Rock"
		}else if(RandNumber == 2){
			return "Paper"
		}else{
			return "Scissor"
		}
	}
function gameLogic(player_choice, computer_choice)
	{
		if (player_choice == "Rock" && computer_choice == "Scissor") 
					{
						player_score++;
						return "Win"
					} else if (player_choice == "Paper" && computer_choice == "Rock") 
					{
						player_score++;
						return "Win"
					} else if (player_choice == "Scissor" && computer_choice == "Paper") 
					{
						player_score++;
						return "Win"
					}if (computer_choice == "Rock" && player_choice == "Scissor") 
					{
						computer_score++;
						return "Lose"
					} else if (computer_choice == "Paper" && player_choice == "Rock") 
					{
						computer_score++;
						return "Lose"
					} else if (computer_choice == "Scissor" && player_choice == "Paper") 
					{
						computer_score++;
						return "Lose"
					}else{
						return "Draw"
					}
	}
function titlescreen(){
	if (player_score == 0 && computer_score ==0) 
		{
			FinalResult.innerHTML = "";
			Intro.innerHTML = "Welcome to Rock-Paper-Scissor";
			
		}}
function finalwinner(){

	if (player_score == 3) 
		{
			FinalResult.innerHTML = "You won the 5 round game!";
			player_score = 0;
			computer_score = 0;
			Intro.innerHTML = "Click on a button to restart";
		}
	else if (computer_score == 3) 
		{
			FinalResult.innerHTML = "You lost the 5 round game!";
			player_score = 0;
			computer_score = 0;
			Intro.innerHTML = "Click on a button to restart";
		}}


buttons.forEach((button) => //go through all buttons (each is button), then execute function after =>
{
	button.addEventListener('click', (e) => 
	//add a listener for a click on them, if clicked execute function => (have event 'e' passed to it)
	{
		titlescreen();

		let player = e.target.id;
		let computer = computerPlay();
		let result = gameLogic(player, computer);
		if(result == "Draw") 
		{
			outcome.innerHTML = result;
		}
		else
		{
			outcome.innerHTML = "You " + result + "!";
		}
		scoreboard.innerHTML = player_score + " - " + computer_score;
		finalwinner()
	})
})


