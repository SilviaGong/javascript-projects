
/* My previous major was computer science at college, but I haven’t coded since graduation. 
So actually I forgot them all, but retained my logical and leaning ability. 
I had been a product manager for 7 years in the internet education industry in China before.  
So I am cofidence that I can learn coding again.*/


//1.Use code to print “Hello, World” to the screen.
console.log("Hello, World");

//2.Define and initialize variables
let name = "John";
let age = 30;

// 3.Change variables
name = "Alice";
age = 25;

// 4.Convert the string '1234' into a number
const strNumber = '1234';
const number = Number(strNumber);


//5.Construct a for loop to repeat a task 100 times
for (let i = 0; i < 100; i++) {
  console.log("This is iteration number: " + i);
}

// 6.Construct if/else if/else statements to decide which task to perform
const condition = true;

if (condition) {
  console.log("Task 1");
} else if (!condition) {
  console.log("Task 2");
} else {
  console.log("Task 3");
}


// 7.Build, modify, and access an array
const fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits[0]);

// 8.Design and call a function
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice");

// 9.Call one function from within another function
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

const result = multiply(3, add(2, 4));
console.log("Result:", result);

// 10.Find and fix bugs in a segment of non-working code
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    // Bug: Index should be '<' instead of '<='
    sum += arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSum(numbers));

