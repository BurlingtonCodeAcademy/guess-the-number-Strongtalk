//make a random number generator..*update* this RNG works praise RNGesus

//let userNumber = 100; // this is where we define user's number between 1 - 100
//let randomNumber = Math.floor(Math.random() * userNumber + 1);  // current test random number gen
//console.log(randomNumber)

// make a while loop

//while 




// cheat guards

//if (secretNumber >= 101 || secretNumber < 1)
   // return console.log("Has your creator ever referred to you as 'deceitful?'\n Stop cheating! ")
   // process.exit()
    const { Console } = require('console');
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
function randNum(min, max) {             // this is the random number generator
  let range = (max - min) + 1;
  let decimal = ((max + min) / 2);
  return Math.floor(decimal);
}
start();

async function start() {
  console.log("Let's play a game where you (Player1) guess a number and I (Computer1) try to guess it.")
  let secretNumber = await ask("Pick a number between 1 & 100?\nI won't peek, I promise...\n");
  while (parseInt(secretNumber) === 100) { //|| secretNumber < 1) {
   console.log("Has your creator ever referred to you as 'deceitful?'\n Stop cheating! ")
    secretNumber = await ask("Pick a number between 1 & 100?\nI won't peek, I promise...\n");
  };
  console.log('You entered: ' + secretNumber);
  let lowNum = (1);
  let highNum = (100);
  let guess = randNum(lowNum, highNum);
  let answer = await ask("Is this your number? " + guess);
  console.log(answer)
  if (answer.toLowerCase() === "yes") {
    console.log("Victory! Good show ol' sport.");
    process.exit()
  } while (answer.toLowerCase() == "no" || answer.toLowerCase() === "n") {
    let result = await ask("Hmm. is your number higher or lower?")
    if (result.toLowerCase() === "higher" || result.toLowerCase() === "h") {
      lowNum = (guess + 1)
      guess = randNum(lowNum, highNum)  // guesses a higher #
      answer = await ask("Is this your number? " + guess)
    } else if (result.toLowerCase() === "lower" || result.toLowerCase() === "l") {
      highNum = (guess - 1) // guess lower
      guess = randNum(lowNum, highNum)
      console.log(guess)
    }

    //console.log("Hmm... Is your number higher or lower?");
  }
  console.log("I've achieved victory!\n Where's my prize?")
  process.exit()
  // attempting to modify guessing range

}








//function num(x, y) {
  //return x + y
//}
//let sum = num(1, 2)