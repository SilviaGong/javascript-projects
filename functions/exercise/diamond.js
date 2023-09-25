
//A.Write a function makeLine(size) that returns a line with exactly size hashes.
function makeLine(length, character = "#") {
  let line = '';
  for (let i = 0; i < length; i++) {
    line += character;
  }
  return line;
}

//B.Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape.
function makeSquare(size) {
  let squire = '';
  for (let i = 0; i < size; i++) {
    if (i === size - 1) {
      squire += makeLine(size, character);
    } else {
      squire += makeLine(size, character) + "\n";

    }
  }
  return squire;
}


//C.  Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.
function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += makeLine(width, character) + "\n";
  }
  return rectangle;
}

//D.Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. Use your makeLine function to do this.
function makeDownwardStairs(height) {
  let stairs = '';
  for (let i = 0; i < height; i++) {
    stairs += makeLine(i + 1, character) + "\n";
  }
  return stairs;
}


//E.Write a function makeSpaceLine(numSpaces, numChars) that returns a line with exactly the specified number of spaces, followed by the specified number of hashes, followed again by numSpaces more spaces.
function makeSpaceLine(numSpaces, numChars, character = "#") {
  let spaceLine = '';
  for (let i = 0; i < numSpaces; i++) {
    spaceLine += " ";
  }
  return spaceLine + makeLine(numChars, character) + spaceLine;
}

//F.Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
function makeIsoscelesTriangle(height, character = "#") {
  let triangle = '';
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2 * i + 1, character) + "\n");
  }
  return triangle;
}

//Consider what happens if you create a triangle and reverse it using our reverse function.
function reverse(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}


//Write a function makeDiamond(height) that returns a diamond where the triangle formed by the top portion has the given height.
function makeDiamond(height, character = "#") {
  let diamond = '';
  for (let i = 0; i < height; i++) {
    diamond += "\n" + makeSpaceLine(height - i - 1, 2 * i + 1, character);
  }
  return diamond + "\n" + reverse(diamond);
}

console.log(makeDiamond(5, "*"));
