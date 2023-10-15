//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores) {
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(score) {
    this.scores.push(score);
  }
  average() {
    let sum = 0;
    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }
    let average = sum / this.scores.length;
    return Math.round(average * 10) / 10;
  }
  status() {
    let avgScore = this.average();
    if (avgScore >= 90) {
      return "Accepted";
    } else if (avgScore >= 80) {
      return "Reserve";
    } else if (avgScore >= 70) {
      return "Probationary";
    } else {
      return "Rejected";
    }
  }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

bear.addScore(83);
// console.log(bear);
// console.log(maltese.average());
// console.log(gator);
console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
console.log(`${maltese.name} earned an average test score of ${maltese.average()}% and has a status of ${maltese.status()}.`);
console.log(`${gator.name} earned an average test score of ${gator.average()}% and has a status of ${gator.status()}.`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

function boostStatus(candidate, targetStatus) {
  let tests = 0;
  while (candidate.status() !== targetStatus) {
    const randomScore = Math.floor(Math.random() * 21) + 5; // Random score between 5 and 25
    candidate.addScore(randomScore);
    tests++;
  }
  return tests;
}

// console.log(`Glad Gator's status is now "Reserve" after ${boostStatus(gator, "Reserve")} tests.`);
// console.log(`Glad Gator's status is now "Accepted" after ${boostStatus(gator, "Accepted")} tests.`);