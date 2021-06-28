const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion passed! ${actual} === ${expected}`)
  } else {
    console.log(`🛑 Assertion failed. ${actual} !== ${expected}`)
  }
};


const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    if (sentence[i] !== ' ') {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;

// assertArraysEqual(letterPositions("hello").e, [1]);
// console.log(letterPositions('hel lo'));
// console.log(letterPositions('this is a test'));