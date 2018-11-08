(() => {
	// simple JS file
	console.log('fired! or loaded... whatever');

	// this is a single line comment
	var choices = ["Rock", "Paper", "Scissors"];
	var computer;
	var player = document.querySelector("#weapon");
	var trigger = document.querySelector("#play");
	var status = document.querySelector(".winlose"); 

	function playGame() {
		//make the computer choosea random weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		var player_choice = player.value;

		// check for a tie first
		if (computer.toLowerCase() === player_choice.toLowerCase()) {
			// it's a tie
			status.textContent = "Tie! You live to shoot another day.";
		}

		else if (computer.toLowerCase() === "rock" ) {
			if (computer.toLowerCase() === "scissors") {
				//win
				status.textContent = `Win! ${player_choice} beats ${computer}.`;
			} else {
				//lose
				status.textContent = `Lose! ${computer} beats ${player_choice}.`;
			}
		}

		else if ( computer.toLowerCase() === "paper" ) {
			if (computer.toLowerCase() === "rock") {
				//win
				status.textContent = `Win! ${player_choice} beats ${computer}.`;
			} else {
				//lose
				status.textContent = `Lose! ${computer} beats ${player_choice}.`;
			}
		}

		else if ( computer.toLowerCase() === "scissors" ) {
			if (computer.toLowerCase() === "paper") {
				//win
				status.textContent = `Win! ${player_choice} beats ${computer}.`;
			} else {
				//lose
				status.textContent = `Lose! ${computer} beats ${player_choice}.`;
			}
		}

		else {
			player.value = "";
			alert("You didn't pick a valid weapon... try again")
		}
	}


	trigger.addEventListener("click", playGame);

})();