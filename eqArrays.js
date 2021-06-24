const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays(['hi', 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['hi', 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays(['2', 3], ['2', 3, 4]), false);

