const input = require('readline-sync');

function getValidInput(prompt, isValid) {

  let userInput = input.question(prompt);

  while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
  }

  return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let isAstr = function (aStr) {
  return aStr[0] === 'a';
};

// TODO 2: write a validator 
// that ensures input is a vowel
let isVowel = function (str) {
  let string = str.toLowerCase();
  if (string.indexOf('a') || string.indexOf('e') || string.indexOf('i') || string.indexOf('o') || string.indexOf('u')) {
    return true;
  } else {
    return false;
  }
};

// Be sure to test your code!
console.log(getValidInput('Enter a vowel:', isVowel));

