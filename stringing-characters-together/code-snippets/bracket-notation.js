let jsCreator = "Brendan Eich";
let firstInitial = jsCreator[0];
let lastInitial = jsCreator[8];
let phrase = "JavaScript rocks!";

console.log(phrase.length);
console.log(phrase[phrase.length - 8]);


console.log(jsCreator[-1]);
console.log(jsCreator[42] === '');

let outputStr = "JavaScript was created by somebody with initials " +
  firstInitial + "." +
  lastInitial + ".";

console.log(outputStr);

let cityName = "Vienna";
let stateName = "Virginia";
location = cityName + ", " + stateName;

console.log(location.length);