//There are a few simple rules for translating text to whale language:
//There are no consonants. Only vowels excluding “y”.
//The u‘s and e‘s are extra long, so we must double them in our program.

const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee')
      } else if (input[i] === 'u') {
        resultArray.push('uu')
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}

console.log(resultArray.join('').toUpperCase());
