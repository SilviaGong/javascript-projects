// Your test file (e.g., Match.test.js)

const Match = require('../Match.js');

describe("Match test", function () {
  test("should return 'No match!' when strings are different", function () {
    expect(Match('Flower', 'flower')).toBe('No match!');
  });
});
