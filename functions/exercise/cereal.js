const input = require('readline-sync');

function makeIngredientList() {
  let list = [];
  let item = input.question("Please enter an ingredient to add to our cereal. Press ENTER to terminate input. ");

  while (item !== "") {
    list.push(item);
    console.log(`Thank you for adding ${item} to the ingredient list.`);
    item = input.question("Please enter another ingredient to add to our cereal, or press ENTER to terminate input. ");
  }

  return list;
}

function makeCereal(ingredients) {
  let name = input.question("Please enter a name for your cereal. Yes, this is important. ");
  let output = `Good morning! It's time for the most important meal of the day: breakfast! Today we'll be eating a hearty bowl of ${name} cereal containing `;

  for (let i = 0; i < ingredients.length; i++) {
    if (i === ingredients.length - 1) {
      output += `and ${ingredients[i]}. Isn't that just great?`;
    } else {
      output += `${ingredients[i]}, `;
    }
  }

  return output;
}

console.log(makeCereal(makeIngredientList()));