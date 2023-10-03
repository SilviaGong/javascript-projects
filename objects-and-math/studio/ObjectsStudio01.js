// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

let selectedIDs = [];

// Function to select a random entry from the idNumbers array
function selectRandomEntry(idNumbers) {
  let randomIds = Math.floor(Math.random() * idNumbers.length);
  return idNumbers[randomIds];
}

// Loop to select three unique ID numbers
while (selectedIDs.length < 3) {
  let randomID = selectRandomEntry(idNumbers);
  // Check if the selected ID is not already in the selectedIDs array
  if (!selectedIDs.includes(randomID)) {
    // Add the selected ID to the array
    selectedIDs.push(randomID);
  }
}
console.log(selectedIDs);


// Code your buildCrewArray function here,takes two arrays as parameters:
function buildCrewArray(selectedIDs, candidates) {
  let crew = [];
  for (let i = 0; i < selectedIDs.length; i++) {
    for (let j = 0; j < candidates.length; j++) {
      if (selectedIDs[i] === candidates[j].astronautID) {
        crew.push(candidates[j].name);
      }
    }
  }
  return crew;
}

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function (hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function (hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function (hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function (hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function (hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function (hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

// Code your template literal and console.log statements:
console.log(buildCrewArray(selectedIDs, animals));
console.log(`${buildCrewArray(selectedIDs, animals)[0]} , ${buildCrewArray(selectedIDs, animals)[1]} and ${buildCrewArray(selectedIDs, animals)[2]} are going to space!`);
