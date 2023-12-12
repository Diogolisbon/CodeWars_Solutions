/*
Description:
You will be given a string of letters. The string must be returned in alphabetical order.
*//*
function alphabetti(str) {
  return str.split``.sort((a,b)=>a.toLowerCase()>b.toLowerCase()).join``
}*/

function alphabetical(str) {
  // Split the string into an array of letters
  const lettersArray = str.split('');

  // Convert each letter to lowercase
  const lowercaseArray = lettersArray.map(letter => letter.toLowerCase());

  // Sort the array of lowercase letters
  const sortedArray = lowercaseArray.sort();

  // Join the sorted array back into a string
  const sortedString = sortedArray.join('');

  // Return the sorted string
  return sortedString;
}

const phrase = "Adhffh djdid Hhur";

// Call the function and log the result
console.log(alphabetical(phrase));
