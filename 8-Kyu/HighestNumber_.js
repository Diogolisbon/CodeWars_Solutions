/*
Description:
ASC Week 1 Challenge 1 (Easy #1)

Create a function that takes an array of numbers, and returns the highest number in the array.

Examples:

highestNumb([12,4,6,0]) // output => 12
highestNumb([2,1.99,2.01,1.4]) //output => 2.01
If the input is an array with a length of 0, the function should throw an error.
*//*
function highestNumb(arr) {
  if (arr.length===0) throw new Error()
  return Math.max(...arr)
}*/

function highestNumb(arr) {

  let numbersArray = Math.max(...arr);
  return numbersArray;
}

let numbersArray = [1, 5, 3, 8, 2];
let numbersString = "1 5 3 8 2";

console.log(highestNumb(numbersArray));
console.log(highestNumb(numbersString));