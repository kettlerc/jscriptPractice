let maximum = parseInt(prompt('Enter the maximum number!'));
while(!maximum) {
    let maximum = parseInt(prompt('Enter a valid number!'));
}

const targetNum = Math.random(Math.random() * maximum) + 1;

let guess = parseInt(prompt('Enter your first guess!'));
let attempts = 1;

while (guess !== targetNum) {
    if (guess === 'q')break;
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt('Too high! Guess again!'));
    } else {
        guess = parseInt(prompt('Too low! Guess again!'));
    }
}
console.log(`You got it! It took ${attempts} guesses!`)