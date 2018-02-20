
//This section contains our known variables within the game
	//These are all of the possible letters to be guessed
	const possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

	//This is an empty array used to hold the letters that have been guessed
	let wrongGuess = [];

	//This is our random letter to be guessed variable
	let appChoice = null;

	//This is our win counter
	let correctGuess = 0;

	//This is our loss counter
	let incorrectGuess = 0;

	//This is our guesses remaining counter
	let guessCount = 9;

	//This is the randomly generated letter to guess
	const letterToGuess = function() {
		appChoice = possibleLetters[Math.floor(Math.random() * possibleLetters.length)];
			console.log(appChoice);
	};

	//This is our game reset function
	const reset = function() {
		guessCount = 9;
		wrongGuess = [];
		letterToGuess();
	};	


//This is the gameplay function that generates the random letter and checks for user input 	
	document.onkeyup = function(event) {
		
	//This is the letter entered by the user
		const userGuess = event.key;
			console.log(userGuess);


	//These are the logical statements that are used to determine the outcome of the game
		if ( userGuess === appChoice) {
			//This adds 1 point to the wins section
			correctGuess++;
			//This writes points to the winners span id
			document.getElementById("winners").innerHTML = correctGuess;
			reset();
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
			reset();
		}
		
	};
	

	


/*<h1>The Psychic Game</h1>
	<h2>Can you guess which letter I am thinking of?</h2>
	<h3>Wins: <span id="winners"></span></h3>
	<h3>Losses: <span id="losers"></span></h3>
	<h3>Guesses Left: <span id="leftovers"></span></h3>
	<h3>Here is the proof that you are not psychic: <span id="incorrect"></span></h3>*/