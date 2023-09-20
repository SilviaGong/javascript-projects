const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petsCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();

console.log("Food Cabinet:", foodCabinet);
console.log("Equipment Cabinet:", equipmentCabinet);
console.log("Pets Cabinet:", petsCabinet);
console.log("Sleep Aids Cabinet:", sleepAidsCabinet);


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
console.log("cargoHold:", cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectCabinet = parseInt(input.question("please select a cabinet(0-3)"));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (selectCabinet >= 0 && selectCabinet < cargoHold.length) {
  console.log(`You selected Cabinet, ${selectCabinet}`);
  console.log(`Contents of Cabinet, ${cargoHold[selectCabinet]}`);
} else {
  console.log(`Invalid cabinet selection. Please select a cabinet between 0 and ${cargoHold.length - 1}`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let selectItem = input.question("Enter an item to check if it's in the cabinet:");
if (selectCabinet >= 0 && selectCabinet < cargoHold.length) {
  // Use the 'includes' method to check if the cabinet contains the selected item
  if (cargoHold[selectCabinet].includes(selectItem)) {
    console.log(`Cabinet ${selectCabinet} DOES contain ${selectItem}.`);
  } else {
    console.log(`Cabinet ${selectCabinet} DOES NOT contain ${selectItem}.`);
  }
} else {
  console.log(`Invalid cabinet selection. Please select a cabinet between 0 and ${cargoHold.length - 1}`);
}