const assertArraysEqual = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        console.log('✅ These arrays are equal!');
        return;
      } else {
        console.log('🛑 These arrays are not equal!');
        return;
      }
    }
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([2, 3, 5], [6, 5, 4]);
