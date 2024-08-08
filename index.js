const prompt = require('prompt-sync')()
//Welcomes the user
console.log("Hello, And Welcome to HangMan.")
// Show the user the direction
console.log("In this game your goal is to guess the word. You would have to type in the lettter and that all.")

//List of animal words
const Animals = [
  "fox",
  "whale",
  "wolf",
  "owl",
  "monkey",
  "snake",
  "hedgehog",
  "red panda",
  "axolotl",
  "capybara",
  "penguin",
  "otter"
]

//Select a word from the array animal
let selRanWord = Animals[Math.floor(Math.random() * Animals.length)]

// Game state    //.fill replaces an element with a value you assign it with.
let guessWord = Array(selRanWord.length).fill("_")
// The amount you get wrong and the max you can get wrong is stored here.
let WrongGuess = 0;
let MaxWrong = 6;

//it shows how much letter their is, wrong guesses.
function ShowGame() {
  // .join Seperate the value.
  console.log(`Word ---> ${guessWord.join(" ")}`)
  //Will show the wrong guesses you have and max wrong you could get.
  console.log(`Wrong guesses ---> ${WrongGuess}/${MaxWrong}`)
}











// store the letter the user type in.
function Letterguessed(letter) {
  //check if the word that was picked randomly has the letter the user type in.
  if (selRanWord.includes(letter)) {

    for (let i = 0; i < selRanWord.length; i++) {
      if (selRanWord[i] === letter) {
        guessWord[i] = letter
      }
    }
  } else {
    //add to the count for wrong guesses
    WrongGuess++
  }
}








function start() {
  while (WrongGuess < MaxWrong) {
    ShowGame()
// what ever the user writes it will be set in lowercase 
    const UserGuess = prompt("Guess A Letter --->").toLowerCase();
//  /[a-z]/ make sure the guessing letter is a single lowercase letter
    if (UserGuess.length && UserGuess.match(/[a-z]/)) {
      Letterguessed(UserGuess)
    }
  }
  //Calling the function
  ShowGame()

// if you got the word right or wrong it will show eiher one of the console.log.
  if (guessWord.join(" ") === selRanWord) {
    console.log("You Guessed The Word!!!!!!!!!")
  } else {
    console.log(`You lost, The word was ${selRanWord}.`)
  }

}
//Calling the function
  start()
































