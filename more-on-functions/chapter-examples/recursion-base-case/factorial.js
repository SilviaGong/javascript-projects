//The following concept check assumes that only positive integers are passed to the function.

function factorial(integer, isValid) {
  if (isValid(integer)) {
    return "Error: Invalid input";
  } else if (integer === 1) {
    return integer;
  } else {
    return integer * factorial(integer - 1, isValid);
  }
}

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.
let isErr = function (number) {
  if (isNaN(number) || number <= 0 || !Number.isInteger(number)) {
    return true;
  } else {
    return false;
  }
}

console.log(factorial(6, isErr));