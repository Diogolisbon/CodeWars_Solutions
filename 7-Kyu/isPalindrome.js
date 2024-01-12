/*
Description:
This Kata is intended as a small challenge for my students

All Star Code Challenge #6

After watching the movie "Arrival", your friend Hannah is obsessed with palindrome names. 
She wants a quick way to check if anyone she knows has one of these unique names.

Create a function, called isPalindrome, that checks if a string is the same backwards as forwards, r
eturning true or false accordingly.

If a non-string value is given as an argument, the function should throw an error.

isPalindrome("hannah") // => true
isPalindrome("billy") // => false 
isPalindrome(1) // => Error
*//*
function isPalindrome(str) {
  if (typeof str === "string") return str == [...str].reverse().join``;
  throw new Error();
}

function isPalindrome(str) {
  const name = str.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  const length = name.length;
  const halfIndex = Math.floor(length / 2);
  const firstHalf = name.substring(0, halfIndex);
  let secondHalf;

  if (length % 2 === 0) {
     // If the length is even, the second half starts from the middle
     secondHalf = name.substring(halfIndex);
  } else {
     // If the length is odd, the second half starts from the middle + 1
     secondHalf = name.substring(halfIndex + 1);
  }

  const reversedSecondHalf = secondHalf.split('').reverse().join('');

  return firstHalf === reversedSecondHalf;
}

// Example usage:
const result = isPalindrome("radar");
console.log(result); // Output: true
*/

function isPalindrome(str) {
  const name = str.toLowerCase;
  let firstHalh = " ";
  let secondHalf = " ";
  const division = name.length / 2;
  for (let i = 0; i < name.length; i++) {
    if ( i < division) {
      firstHalh += name[i];
    } else {
      secondHalf += name[i];
    }
  }
 const reversedSecondHalf = secondHalf.split('').reverse().join('');

 if( firstHalh === reversedSecondHalf) {
  return true;
 }
}

const result = isPalindrome("radar");
console.log(result); // Output: true