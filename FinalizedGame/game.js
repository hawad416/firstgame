// JavaScript Document
let userScore = 0;
let compScore = 0;
let count = 0;
const rounds_div=document.querySelector(".rounds");
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const earth = document.getElementById("earth");
const fire = document.getElementById("fire");
const water = document.getElementById("water");

function getComputerChoice(){
	const choices=['earth', 'water', 'fire'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}


function win(userChoice, computerChoice){
	userScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result.innerHTML = userChoice.toUpperCase() + " beats" + " " + computerChoice + ". You win!";
	
}

function lose(userChoice, computerChoice){
	compScore++;
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;
	result.innerHTML = userChoice.toUpperCase() + " loses to" + " " + computerChoice + ". Computer Wins!";
	
}

function draw(userChoice, computerChoice){
	result.innerHTML = userChoice.toUpperCase() + " ties" + " " + computerChoice + ". Its a draw!";
	
}





function game(userChoice)
{
const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice){
		case "earthwater":
		case "waterfire":
		case "fireearth":
			win(userChoice, computerChoice);
			break;
		case "earthfire":
		case "waterearth":
		case "firewater":
			lose(userChoice, computerChoice);
			break;
		case "earthearth":
		case "waterwater":
		case "firefire":
			draw(userChoice, computerChoice);
			break;
	}
	
}





function main(){
	
earth.addEventListener("click", function(){
	game("earth"); counter();			   
	})
	
	
fire.addEventListener("click", function(){
game('fire');	counter();		   
 })
water.addEventListener("click", function(){
					   
	game('water');	counter();		   
	  })
}

main();

function counter (){
	count++
	
	document.getElementById('count').innerHTML = count;
};




