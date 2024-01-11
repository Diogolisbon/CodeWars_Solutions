/*
Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #2

Create a function, named findAverage, that takes an array of ages of All Star Code students and returns the average 
(do NOT round the return value).

var allStars =  [17,16,16,16,16,15,17,17,15,5,17,17,16];
findAverage(allStars) //  => 200/13 = ~15.4
*//*
function findAverage(allStars) {
  return allStars.reduce((a, b) => a + b, 0) / allStars.length;
}*/
/*
function findAverage(array) {
  var total = 0;
  for(var i = 0; i < array.length; i++){
      total+=array[i];
  }
  var average = total/array.length;
  return average;
}*/
/*
const findAverage = array => array.reduce((a, b) => a + b) / array.length;

var array =  [17,16,16,16,16,15,17,17,15,5,17,17,16];
console.log(findAverage(array));
/*
var allStars =  [17,16,16,16,16,15,17,17,15,5,17,17,16];
console.log(findAverage(allStars));*/
