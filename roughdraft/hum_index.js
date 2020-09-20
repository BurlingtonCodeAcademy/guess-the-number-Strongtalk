const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
    });
}

function randNum(min, max) {
    let range = ((max - min) + 1);           // this is the random number generator
    let decimal = (Math.random() * range);
    return Math.floor(decimal) + min;
}

async function start() {
    //console.log string about stuff  Picking between 1 - 100
    let randNums = randNum(1, 100)
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
start();