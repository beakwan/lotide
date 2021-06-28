const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays(['hi', 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(['hi', 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertEqual(eqArrays(['2', 3], ['2', 3, 4]), false);
