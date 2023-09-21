let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

let strings = [protoArray1, protoArray2, protoArray3, protoArray4];

console.log(strings);
//Use the split methods convert string to array.
/* console.log(protoArray1.split(","));
console.log(protoArray2.split(";"));
console.log(protoArray3.split(" "));
console.log(protoArray4.split(", ")); */

//Use the join methods convert back to string.
/* console.log(protoArray1.split(",").join());
console.log(protoArray2.split(";").join());
console.log(protoArray3.split(" ").join());
console.log(protoArray4.split(", ").join()); */


// use the includes method to check to see if the words are separated by commas (,), semicolons (;), or just spaces.



//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check;
	let output;
	//TODO: 2. write the code required for this step
	for (check = 0; check < strings.length; check++) {
		if (strings[check].includes(",")) {
			output = strings[check].split(",").reverse().join();
		} else {

		}
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let check;
	let output;
	//TODO: write the code required for this step
	for (check = 0; check < strings.length; check++) {
		if (strings[check].includes(";")) {
			output = strings[check].split(";").reverse().join();
		} else {

		}
	}

	return output;
}

//4)
function reverseSpaces() {
	let check;
	let output;
	//TODO: write the code required for this step
	for (check = 0; check < strings.length; check++) {
		if (strings[check].includes(" ")) {
			output = strings[check].split(" ").reverse().join();
		} else {

		}
	}
	return output;
}

//5)
function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step
	for (check = 0; check < strings.length; check++) {
		if (strings[check].includes(", ")) {
			output = strings[check].split(", ").reverse().join();
		} else {

		}
	}
	return output;
}

function runProgram() {
	reverseCommas();
}

runProgram();
// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings: strings,
	reverseCommas: reverseCommas,
	semiDash: semiDash,
	reverseSpaces: reverseSpaces,
	commaSpace: commaSpace,
	runProgram: runProgram
};
