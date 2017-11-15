
//These are the known variables
	var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var correctGuess = 0;
	var incorrectGuess = 0;
	var guessCount = 10;
	var wrongGuess = [];

	//This is the randomly generated letter to guess
		var appChoice = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
			console.log(appChoice);
	


//This is the gameplay function that generates the random letter and checks for user input 	
	document.onkeyup = function(event) {
		
	//This is the letter entered by the user
		var userGuess = event.key;
			console.log(userGuess);


	//These are the logical statements that are used to determine the outcome of the game
		if ( userGuess === appChoice) {
			//This adds 1 point to the wins section
			correctGuess++;
			//This writes points to the winners span id
			document.getElementById("winners").innerHTML = correctGuess;
		}

		else {
			//This subtracts 1 from the remaining guess count 
			guessCount--;
			//This writes the updated guess count to the leftovers span id
			document.getElementById("leftovers").innerHTML = guessCount;
			//This adds the users guess to the wrong guesses array 
			wrongGuess.push(userGuess);
			//This writes the wrong guess array to the incorrect span id
			document.getElementById("incorrect").innerHTML = wrongGuess;
		}

		if (guessCount === 0) {
			incorrectGuess++;
			document.getElementById("losers").innerHTML = incorrectGuess;
		}
		
	}
	

	


/*<h1>The Psychic Game</h1>
	<h2>Can you guess which letter I am thinking of?</h2>
	<h3>Wins: <span id="winners"></span></h3>
	<h3>Losses: <span id="losers"></span></h3>
	<h3>Guesses Left: <span id="leftovers"></span></h3>
	<h3>Here is the proof that you are not psychic: <span id="incorrect"></span></h3>*/