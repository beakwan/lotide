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
};

const middle = function(array) {
  let middleElements = [];
  if (array.length >= 3) {
    if (array.length % 2 !== 0) {
      middleElements.push(array[Math.floor(array.length / 2)]);
    } else {
      middleElements.push(array[Math.floor((array.length - 1) / 2)]);
      middleElements.push(array[Math.floor(array.length / 2)]);
    }
  }
  console.log(middleElements);
  return middleElements;
};

middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
