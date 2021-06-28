
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



const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let property of keys1) {
      if (Array.isArray(object1[property]) || Array.isArray(object2[property])) {
        return eqArrays(object1[property], object2[property]);
      } else {
        if (object1[property] !== object2[property]) {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected) === true) {
    console.log(`✅ Assertion passed! ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`🛑 Assertion failed. ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);