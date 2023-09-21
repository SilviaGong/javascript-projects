// create an array variable containing the names
let myName = ["Gerard", "Dylen", "Siliva", "Miki", true];
let forLoopedName = [];
// write a for loop that prints each name on a different line
for (let i = 0; i < myName.length; i++) {
  forLoopedName.unshift(myName[i])
}
console.log(forLoopedName);