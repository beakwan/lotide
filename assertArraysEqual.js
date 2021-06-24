const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          return true;
        } else {
          return false;
        }
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

assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual(['hi', 2, 3], [1, 2, 3]);
assertArraysEqual(['hi', 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(['2', 3], ['2', 3, 4]);

