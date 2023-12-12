/*
Description:
Task Overview
Americans are odd people: in their buildings, the first floor is actually
 the ground floor and there is no 13th floor ('cause of superstition).

Write a function that given an American floor (passed as an integer) returns the real floor.
Moreover, your function should work for basement floors too: just return the same value as the passed one.

Usage Examples
getRealFloor(1) == 0 
getRealFloor(0) == 0 // Special case to please Europeans
getRealFloor(5) == 4
getRealFloor(15) == 13
getRealFloor(-3) == -3
*/
/*
function getRealFloor(n) {
  return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
}*/

function getRealFloor(n) {

  var floor = n + 1;

 /*if (n === 0) {
  return floor == 1;
 }
 if ( n === 13) {
  return floor == 14;
 } */
 if ( n >= 13) {
  return floor = n + 2;
 }
 return floor;
}

//const floor = 2;
console.log(getRealFloor(0));
console.log(getRealFloor(1));
console.log(getRealFloor(12));
console.log(getRealFloor(13));
console.log(getRealFloor(14));
