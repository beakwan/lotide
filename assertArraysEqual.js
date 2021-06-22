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
}

const assertArraysEqual = function(arrays) {
  if (arrays) {
    console.log('✅ These arrays are equal!');
  } else {
    console.log('🛑 These arrays are not equal!');
  }
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([2, 3, 5], [6, 5, 4]));
