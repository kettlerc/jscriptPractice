console.log("Hello from our first file!")

//Working with conditionals
let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5")
}
else {
    console.log("Your number is greater than 0.5")
}
console.log(random)

const password = prompt("Please enter a new password");

if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid password")
    }
}
else {
    console.log("Password must be at least six characters and contain no spaces.")
}

const age = "34";
if (age >= 0 && age < 5 || age >= 65) {
    console.log("FREE")
}
else if (age >= 6 && age < 10) {
    console.log("$10")
}
else if (age >= 11 && age < 65) {
    console.log("$20")
}
else {
    console.log("INVALID AGE")
}

//Push, pop, shift, unshift
const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']]

//building Object Literals
const person = {
    firstName: 'Mick',
    lastName: 'Jagger'
};

let comment = {
    userName: 'sillybro420',
    downVotes: 19,
    upVotes: 214,
    netScore: 195,
    commentText: 'Tastes like chicken lol',
    tags: ['#hilarious', '#funny', '#silly'],
    isGilded: false
};

const comments = [
    {username : 'Tammy',
    text : 'lololol',
    votes : 9},
    {username : 'Steve'
    text : 'hahaha',
    votes : 38}
]

//Creating For Loops
for (let i = 25; i >= 0; i -= 5){
    console.log(i);
}
