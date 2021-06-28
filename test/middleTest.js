const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const { italic } = require('ansi-colors');

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});

// assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3]));
// assertArraysEqual(middle([1, 2, 3, 4]), ([2, 3]));