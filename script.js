var secret = Math.floor(Math.random() * 100) + 1; // Generating a random number between 1 and 100

// Storing all the getElementById calls into variables in one place
var gameCard = document.getElementById("gameCard");
var inputValue = document.getElementById("inputValue");
var submitButton = document.getElementById("submitButton");
var newGameButton = document.getElementById("newGameButton");
var increaseButton = document.getElementById("increaseButton");
var decreaseButton = document.getElementById("decreaseButton");
var triesOutput = document.getElementById("triesOutput");
var resultOutput = document.getElementById("resultOutput");

var triesCount = 0; // Number of tries get stored here

function game() {
    triesCount++; // Number of tries counter
    triesOutput.innerHTML = "Number of tries: " + triesCount; // Number of tries output

    // These conditional statements will compare input value to secret number and resolve the game
    if (secret == inputValue.value) {
        resultOutput.classList.remove("text-muted");
        resultOutput.classList.add("text-success", "font-weight-bold");
        resultOutput.innerHTML = "Congratulations! You've guessed the correct number!";
        gameCard.classList.add("border-success");
        gameCard.classList.remove("border-danger");
        submitButton.classList.add("d-none");
        newGameButton.classList.remove("d-none");
        
        // Disables the input and controls after the game is won, preventing adjusting the number and submitting using enter
        inputValue.disabled = true;
        increaseButton.disabled = true;
        decreaseButton.disabled = true;
    } else if (secret > inputValue.value) {
        resultOutput.classList.remove("text-muted");
        resultOutput.classList.add("text-danger", "font-weight-bold");
        resultOutput.innerHTML = "Wrong! Your number is too low!";
        gameCard.classList.add("border-danger");
    } else {
        resultOutput.classList.remove("text-muted");
        resultOutput.classList.add("text-danger", "font-weight-bold");
        resultOutput.innerHTML = "Wrong! Your number is too high!";
        gameCard.classList.add("border-danger");
    }
}

function newGame() {
    secret = Math.floor(Math.random() * 100) + 1; // A new secret number is generated upon starting a new game

    // Styling and output reset
    resultOutput.classList.remove("text-success", "font-weight-bold");
    resultOutput.classList.add("text-muted");
    resultOutput.innerHTML = "Good luck!";
    gameCard.classList.remove("border-success");
    submitButton.classList.remove("d-none");
    newGameButton.classList.add("d-none");

    // Input field value and controls reset
    inputValue.disabled = false;
    inputValue.value = "";
    inputValue.focus();
    increaseButton.disabled = false;
    decreaseButton.disabled = false;
    
    // Number of tries counter reset and output with zero value
    triesCount = 0;
    triesOutput.innerHTML = "Number of tries: " + triesCount;
}

newGameButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevents a default behaviour of a button inside a form, so the page doesn't refresh on enter
    newGame(); // New game function gets called on button click
});

submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    game(); // Game function gets called on button click
    inputValue.focus(); // Input field refocus after try
});

increaseButton.addEventListener('click', function (event) {
    event.preventDefault();
    // The button should not increase the value above hundred
    if (inputValue.value < 100){
        inputValue.value ++;
        inputValue.focus();
    }
});

decreaseButton.addEventListener('click', function (event) {
    event.preventDefault();
    // The button should not decrease the value below zero
    if (inputValue.value > 0){
        inputValue.value --;
        inputValue.focus();
    }
});

