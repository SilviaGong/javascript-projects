let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {
      return Math.floor(Math.random() * 11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {
      return Math.round(Math.random() * 10);
   }
};



// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!


let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade];

function screwReports(crew) {
   for (let i = 0; i < crew.length; i++) {
      let crewKey = crew[i];
      console.log(`${crewKey["name"]} is a ${crewKey["species"]}. They are ${crewKey["age"]} years old and ${crewKey["mass"]} kilograms. Their ID is ${crewKey["astronautID"]}.`);
   }
}

screwReports(crew);


function fitnessTest(candidates) {
   let turns = 0;
   let movesteps = 0;
   let results = [];
   for (let i = 0; i < candidates.length; i++) {
      while (movesteps < 20) {
         movesteps += candidates[i].move();
         turns++;
      }
      results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
   }
   return results;
}
console.log(fitnessTest(crew));