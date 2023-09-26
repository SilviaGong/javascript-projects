//Convert the following named function to an anonymous function that is stored in a variable.
/* function reverse(str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
} */

/* let reverse = function (str) {
  let lettersArray = str.split('');
  let reversedLettersArray = lettersArray.reverse();
  return reversedLettersArray.join('');
};
console.log(reverse("hello")); */

//Method1:
/* function printMessage() {
  console.log("The future is now!");
}
setTimeout(printMessage, 5000); */

//Method2:
/* setTimeout(function () {
  console.log("The future is now!");
}, 5000); */


/* let nums = [3.14, 42, 4811];
let timesTwo = function (n) {
  return n * 2;
};
let doubled = nums.map(timesTwo);
console.log(nums);
console.log(doubled); */

let nums = [3.14, 42, 4811];
// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function (n) {
  return n;
});
// console.log(halved);

let names = ["Chris", "Jim", "Sally", "Blake", "Paul"];
// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (n) {
  return n;
});

// console.log(firstInitials);

function combineEntries(arrayName) {
  if (arrayName.length <= 1) {
    return arrayName[0];
  } else {
    return arrayName[0] + combineEntries(arrayName.slice(1));
  }
}
console.log(combineEntries(["g", "h", "k"]));

function decreasingSum(integer) {
  if (integer === 1) {
    return integer;
  } else {
    return integer + decreasingSum(integer - 1);
  }
}
console.log(decreasingSum(5));