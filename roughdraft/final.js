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
// THIS IS where interface starts

async function begin() {
    let game = await ask("Would you like to pick #? (1)\n Or would you like me to(2)?")
    if (parseInt(game) === 1) {
        start();
    } else {
        startComputer();
    }
}

async function start() {
    console.log("Let's play a game where you (Player1) guess a number and I (Computer1) try to guess it.")

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
    let secretNumber = await ask("Now pick a number inbetween the parameters.\nI won't peek, I promise...\n");
    let parseNumber = parseInt(secretNumber);

    while (!parseNumber || parseNumber > 100 || parseNumber < 1) {
        console.log("Has your creator ever referred to you as 'deceitful?'\n Stop cheating! ")
        secretNumber = await ask("Now pick a number inbetween the parameters\nI won't peek, I promise...\n");
        parseNumber = parseInt(secretNumber);

    };
    console.log('You entered: ' + secretNumber);
    //let lowNum = 1;
    //let highNum = 100;
    let guess = randNum(parseLowNum, parseHighNum);
    let answer = await ask("Is this your number? " + guess);
    console.log(answer)
    if (answer.toLowerCase() === "yes") {
        console.log("Victory! Good show ol' sport.");
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

        //console.log("Hmm... Is your number higher or lower?");
    }
    console.log("I've achieved victory!\n Where's my prize?")
    process.exit()
    // attempting to modify guessing range

}
// THIS is the beginning of second game


function randNumber(min, max) {
    let range = ((max - min) + 1);           // this is the random number generator
    let decimal = (Math.random() * range);
    return Math.floor(decimal) + min;
}

async function startComputer() {
    //console.log string about stuff  Picking between 1 - 100
    let randNums = randNumber(1, 100)
    let answer = await ask('String place holder') // THIS IS guessing #


    while (parseInt(answer) !== randNums) {
        if (randNums < parseInt(answer)) {
            console.log("Lower!")
            answer = await ask("Guess again!")
        } else {
            console.log("Higher!")
            answer = await ask("Guess again!")
        }
    }
    console.log("VictORY!")
    process.exit();
}
startComputer();