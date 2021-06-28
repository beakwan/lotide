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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅ Assertion passed! ${actual} === ${expected}`)
  } else {
    console.log(`🛑 Assertion failed. ${actual} !== ${expected}`)
  }
};


const without = function(source, remove) {
  let keepThese = true;
  let newArray = [];
  for (let element of source) {
    keepThese = true; 
    for (let rem of remove) {
      if (element === rem) {
        keepThese = false;
      }
    }
    if (keepThese) {
      newArray.push(element);
    }
  }
  return newArray;
};

module.exports = without;

// console.log(without([1, 2, 1, 3], [1]));
// console.log(without([1, '2', '3'], ['2', 3]));


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);