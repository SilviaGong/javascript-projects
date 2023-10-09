const RPS = require("../RPS.js");

describe("RPS", function () {
  test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
    let output = RPS('rock', 'paper');
    expect(output).toBe("Player 2 wins!");
  });
  test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
    let output = RPS('paper', 'scissors');
    expect(output).toBe("Player 2 wins!");
  });
  test("returns 'Player 2 wins!' if P1 = scissors & P2 = rock ", function () {
    let output = RPS('scissors', 'rock');
    expect(output).toBe("Player 2 wins!");
  });
  test("returns 'TIE!' if P1 = P2", function () {
    let output = RPS('scissors', 'scissors');
    expect(output).toBe("TIE!");
  });
  test("returns 'Player 1 wins!' if P1 = rock & P2 = scissors ", function () {
    let output = RPS('rock', 'scissors');
    expect(output).toBe("Player 1 wins!");
  });
  test("returns 'invalid input!' if P1 = ten & P2 = five ", function () {
    let output = RPS('ten', 'five');
    expect(output).toBe("invalid input!");
  });
});