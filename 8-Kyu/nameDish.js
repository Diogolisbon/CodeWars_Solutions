/*
Description:
All of the animals are having a feast! Each animal is bringing one dish. 
There is just one rule: the dish must start and end with the same letters as the animal's name. For example,
 the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and 
returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at 
least two letters. beast and dish may contain hyphens and spaces, but these will not appear 
at the beginning or end of the string. They will not contain numerals.


function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}
/*
function feast(name, dish) {
  var firstName = name.split(" ");
  var smallLetter = firstName.toLowerCase(" ");
  var onlyLetters = smallLetter.replace(/[^\w\s]|_/g, "");
  var nameS = onlyLetters.join(" ");

  var firstDish = dish.split(" ");
  var smallLetterDish = firstDish.toLowerCase(" ");
  var onlyLettersDish = smallLetterDish.replace(/[^\w\s]|_/g, "");
  var disH = onlyLettersDish.join(" ");


  return nameS[0] === disH[0] && [disH - 1] === nameS[nameS - 1]
  
}*/

function feast(name, dish) {
  // Split the name into words, convert to lowercase, and remove non-alphanumeric characters
  var firstName = name.split(" ").join("").toLowerCase().replace(/[^\w\s]|_/g, "");

  // Split the dish into words, convert to lowercase, and remove non-alphanumeric characters
  var firstDish = dish.split(" ").join("").toLowerCase().replace(/[^\w\s]|_/g, "");

  // Check if the first and last letters match
  return firstName[0] === firstDish[0] && firstName[firstName.length - 1] === firstDish[firstDish.length - 1];
}

// Example usage:
const result1 = feast("great blue heron", "garlic naan");
console.log(result1); // Output: true

const result2 = feast("chickadee", "chocolate cake");
console.log(result2); // Output: true

const result3 = feast("brown bear", "apple pie");
console.log(result3); // Output: false


