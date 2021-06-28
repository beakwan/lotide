const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function (array) {
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

module.exports = middle;


middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4]);
