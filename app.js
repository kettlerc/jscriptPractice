console.log("Hello from our first file!")

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
