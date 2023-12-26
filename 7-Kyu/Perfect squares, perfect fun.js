/*
Given an integer, if the length of it's digits is a perfect square, return a square block
 of sqroot(length) * sqroot(length). If not, simply return "Not a perfect square!".

Examples:

1212 returns:

12
12 

Note: 4 digits so 2 squared (2x2 perfect square). 2 digits on each line.

123123123 returns:

123
123
123

Note: 9 digits so 3 squared (3x3 perfect square). 3 digits on each line.
*/

/*
function repeatSubstrings(input, substringLength) {
  if (!input || input.length % substringLength !== 0) {
    // Handle invalid input
    return "Invalid input";
  }

  const repeatedString = [];
  const numSubstrings = input.length / substringLength;

  for (let i = 0; i < numSubstrings; i++) {
    const startIdx = i * substringLength;
    const endIdx = startIdx + substringLength;
    repeatedString.push(input.slice(startIdx, endIdx));
  }

  return repeatedString.join('\n');
}

// Example: Call the function with input "123123123" and substringLength 3
console.log(repeatSubstrings("123123123", 3));
console.log(repeatSubstrings("1212", 3));*/


function dividedEqually(input) {
  const squareRoot = Math.sqrt(input.length);
  
  if (squareRoot % 1 !== 0) {
    // Check if the input length is a perfect square
    return "Input length must be a perfect square.";
  }

  const result = [];
  const substringLength = input.length / squareRoot;

  for (let i = 0; i < input.length; i += substringLength) {
    result.push(input.slice(i, i + substringLength));
  }

  return result.join('\n');
}

console.log(dividedEqually("1212"));
console.log(dividedEqually("123123123"));


