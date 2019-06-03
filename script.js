//create secret number
var secretNumber = 4;


// ask the user for guess
var guess;
/// keeps on asking till the user enters the correct guess
while(guess!=secretNumber){
	guess = Number(prompt("Guess a number"));

	if (guess===secretNumber) {
	alert("YOU GOT IT RIGHT!");
	}

	//checks for the other cases
	else if (guess>secretNumber) {
		alert("Too High!");
	}
	else {
	alert("Too Low!");
	}
}


