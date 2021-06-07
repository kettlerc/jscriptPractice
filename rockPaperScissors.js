const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
  return userInput;
  else {
    console.log('Please enter a valid choice.')
  }
};

//console.log(getUserChoice('rock'));

function getComputerChoice () {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0){
    return 'rock'
  } else if (randomNumber === 1){
    return 'paper'
  } else {
    return 'scissors'
  }
};

//console.log(getComputerChoice());

function determineWinner (userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return 'It is a tie!'
  } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
  } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
  } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
  } else if (userChoice === 'bomb') {
    return 'You CHEATED! But you won....'
  }
};

//console.log(determineWinner('paper', 'scissors'));

function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
