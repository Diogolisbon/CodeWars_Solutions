/*
You have two arrays: arrSearch and arrTake. arrSearch has to be sorted in reverse alphabetical order. 
Now, from arrSearch extract the third element, and from that element select the third letter.
 If the letter you selected matches the first letter of one or more elements of arrTake, return the first element that 
 starts with the respective letter. If there is no element to match in the second array then return 'Nothing here'.
*/

function select(arrSearch, arrTake) {
  const sortedArr = arrSearch.sort().reverse();
  const l = sortedArr[2][2];
  let match = [];

  for (let i = 0; i < arrTake.length; i++) {
    if (arrTake[i][0] === l) {
      match.push(arrTake[i]);
    }
  }

  return match.length > 0 ? match : "Nothing here";
}


const arrSearch = ["apple", "banana", "orange", "kiwi", "grape"];
const arrTake = ["applePie", "bananaSplit", "orangeJuice", "kiwiSmoothie", "grapeJam"];

const result = select(arrSearch, arrTake);
console.log(result);

 



