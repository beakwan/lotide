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


const without = function(source, remove) {
  let keepThese = [];
  let removeThese = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (source[i] === remove[j]) {
        removeThese.push(source[i]);
        break;
      } else {
        keepThese.push(source[i]);
        break;
      }
    }
  }
  console.log(keepThese);
  return keepThese;
}
without([1, 2, 1, 3], [1]);
without([1, '2', '3'], ['2', 3]);


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);