/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

/* 
for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let iodd = 3; iodd <= 29; iodd += 2) {
  console.log(iodd);
}


for (let ieven = 12; ieven >= -14; ieven -= 2) {
  console.log(ieven);
}

for (let i1 = 50; i1 >= 20; i1 -= 1) {
  if (i1 % 3 === 0) {
    console.log(i1);

  }
}
 */
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */

let str = "LaunchCode";
let arr = [1, 5, "LC101", "blue", 42];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for (let i = str.length - 1; i >= 0; i -= 1) {
  console.log(str[i]);
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
let newStr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evenStr = [];
let oddStr = []
for (let i = 0; i < newStr.length; i += 1) {
  if (newStr[i] % 2 === 0) {
    evenStr = evenStr + newStr[i]
  } else {
    oddStr = oddStr + newStr[i];
  }
}
console.log(evenStr);
console.log(oddStr);