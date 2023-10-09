
/* let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {
    if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
      return 'LaunchCode Rocks!';
    } else if (num % 2 === 0 && num % 3 === 0) {
      return 'LaunchCode!';
    } else if (num % 2 === 0 && num % 5 === 0) {
      return 'Launch Rocks! (CRASH!!!!)';
    } else if (num % 3 === 0 && num % 5 === 0) {
      return 'Code Rocks!';
    } else if (num % 2 === 0 && num % 5 === 0) {
      return 'Launch Rocks!';
    } else if (num % 2 === 0) {
      return 'Launch!';
    } else if (num % 3 === 0) {
      return 'Code!';
    } else if (num % 5 === 0) {
      return 'Rocks!';
    } else {
      return "Rutabagas! That doesn't work.";
    }
  }
} */


let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {
    const divisors = [2, 3, 5];
    const messages = ['Launch', 'Code', 'Rocks'];

    let output = '';

    for (let i = 0; i < divisors.length; i++) {
      if (num % divisors[i] === 0) {
        output += messages[i];
      }
    }
    if (output === '') {
      return "Rutabagas! That doesn't work.";
    } else {
      return output + '!';
    }
  }
}

module.exports = launchcode;



