function greet() {

}

let gerardOdject = {
  name: "Gerard",
  occupation: "Teacher",
  age: 32,
  isReallyTall: true,
  greet: function (name = this.name) {
    return `Hello ${name}`;
  }
}


for (let item in gerardOdject) {
  // print the key in gerardObject
  console.log(item);
  //print the value in gerardObject
  console.log(gerardOdject[item]);
}


let bananaCat = {
  name: null,
  species: "Banana Cat",
  weight: null,
  archNemesis: "Apple Dog"
}

bananaCat.name = "Bananya";
// bananaCat["name"] = "Bananya";
console.log(bananaCat.name);

let student = {
  name: ["Gerard Darris", "Banana Cat", "Apple Dog", "Mango Zebra", "Kiwi Kiwi"],
  scores: [100, 95, 74, 82, 91]
};

let studentName = student["name"];
let studentScores = student["scores"];

for (let i = 0; i < studentName.length; i++) {
  let output = "";
  for (items in student) {
    output += `${student[items][i]}:`
  }
  // console.log(studentName[i] + ":" + studentScores[i]);
  console.log(output);
}

/* let iteration1 = "Grerard Darris:100";
let iteration2 = "Banana Cat:95" */