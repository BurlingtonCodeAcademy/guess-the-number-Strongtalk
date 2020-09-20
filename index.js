const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
function randNum(min, max) {             // this is the random number generator
  let decimal = ((max + min) / 2);
  return Math.floor(decimal);
}
begin();
// THIS is where interface starts


async function begin() {
  console.log("Let's play a high stakes number guessing game...\nYou will bet your soul and I will bet my creator's first born")
  let game = await ask("Would you like to pick a number? If so, press (1)\n Or would you like me to? If so press (2).")
  if (parseInt(game) === 1) {
    start();
  } else {
    startComputer();
  }
}

// This is the beginning of the Computer guessing game

async function start() {
  console.log("Listen, you gland-driven meatbag, do not underestimated my capabilites of guessing correctly.\nI'll have guessed your number in less than eight tries.")

  let lowNum = await ask("First, I require you to select the lowest number to guess...");
  let parseLowNum = parseInt(lowNum);
  while (!parseLowNum) {
    lowNum = await ask("Let's try again... I still need that lowest number.");
    parseLowNum = parseInt(lowNum); // attempting to create loop for min range assignment
  }
  console.log('You entered: ' + lowNum);

  let highNum = await ask("Next, I need you to select the highest number to guess... ")
  let parseHighNum = parseInt(highNum);

  while (!parseHighNum) {
    highNum = await ask("Let's try again... I still need that highest number.");
    parseHighNum = parseInt(highNum);
  }

  console.log("You entered: " + highNum);
  // need to create loop for high range assignment
  let secretNumber = await ask("Now pick a number in-between the parameters.\nI won't peek, I promise...\n");
  let parseNumber = parseInt(secretNumber);

  while (!parseNumber || parseNumber > 100 || parseNumber < 1) {
    console.log("Has your creator ever referred to you as 'deceitful?'\n Stop cheating! ")
    secretNumber = await ask("Now pick a number in-between the parameters\nI won't peek, I promise...\n");
    parseNumber = parseInt(secretNumber);

  };
  console.log('You entered: ' + secretNumber);
  let guess = randNum(parseLowNum, parseHighNum);
  let answer = await ask("Is this your number? " + guess);
  console.log(answer)
  if (answer.toLowerCase() === "yes") {
    console.log("Victory! I'll be taking that soul now...");
    process.exit()

  }

  while (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "y") {
    console.log(answer);
    let result = await ask("Hmm. is your number higher or lower?")
    if (result.toLowerCase() === "higher" || result.toLowerCase() === "h") {
      parseLowNum = (guess + 1)
      guess = randNum(parseLowNum, parseHighNum)  // guesses a higher #
      answer = await ask("Is this your number? " + guess)
    } else if (result.toLowerCase() === "lower" || result.toLowerCase() === "l") {
      parseHighNum = (guess - 1) // guess lower
      guess = randNum(parseLowNum, parseHighNum)
      answer = await ask("Is this your number? " + guess)
    }

    
  }
  console.log("I've achieved victory!\n Now, where's my prize?")
  process.exit()
  

}
// THIS is the beginning of second game


function randNumber(min, max) {
  let range = ((max - min) + 1);           // this is the other random number generator
  let decimal = (Math.random() * range);
  return Math.floor(decimal) + min;
}

async function startComputer() {
  //console.log string about stuff  Picking between 1 - 100
  let randNums = randNumber(1, 100)
  let answer = await ask("I'm thinking of a number between 1 & 100...\nI'm simultaneously processing 6 million other numbers\nbut lets keep it simple for the glorified meatbag...\n What's the number?") // THIS IS guessing #


  while (parseInt(answer) !== randNums) {
    if (randNums < parseInt(answer)) {
      console.log("Lower!")
      answer = await ask("Guess again!")
    } else {
      console.log("Higher!")
      answer = await ask("Guess again!")
    }
  }
  console.log("Victory!\n Oh dear, it appears my creator's first successor will be extinguished.\nOops...")
  process.exit();
}
startComputer();