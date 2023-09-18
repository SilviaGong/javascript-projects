let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
//2) Use the join method on the array to identify the purpose of the parameter inside the ().

//3) Do split or join change the original string/array?
console.log(cargoHold.split(',').sort().join(','));
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.


/* let cargoHold = "water,space suits,food,plasma sword,batteries";
let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let classes = ["science, computer, art"];
let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(classes.length);
console.log(teachers.length);

let string1 = 'LaunchCode students delimiter rock!';
console.log(string1.split(" "));
console.log(string1.split(""));
console.log(string1.split("delimiter"));

let string2 = ["LaunchCode", "Students", "Rock"];
console.log(string2.join(" "));
console.log(string2.join(""));


let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems); */