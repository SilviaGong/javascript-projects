let string = "where does the .push() method put things in an array?"
console.log(string.length);
console.log(string[0]);

let myString = "JavaScript";
let letterJ = myString.slice(0, 1);
let letterS = myString.slice((myString.indexOf("S")), (myString.indexOf("S") + 1));
console.log(`${letterJ}${letterS}`);

let myArray = ["Gerard", "Teacher", "Very Tall", 32, false, undefined];
let newArray = [];
newArray.unshift(myArray[0]);
newArray.unshift(myArray[1]);
newArray.unshift(myArray[2]);
newArray.unshift(myArray[3]);
console.log(newArray);
console.log(myArray[4].length);