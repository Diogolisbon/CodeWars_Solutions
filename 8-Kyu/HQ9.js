const HQ9 = require('./path-to-your-file/HQ9'); // Replace with the actual path to your HQ9 file

// Test Case 1: 'H' should return 'Hello World!'
const result1 = HQ9('H');
console.log(result1 === 'Hello World!' ? 'Test Case 1 Passed' : 'Test Case 1 Failed');

// Test Case 2: 'Q' should return 'Q'
const result2 = HQ9('Q');
console.log(result2 === 'Q' ? 'Test Case 2 Passed' : 'Test Case 2 Failed');

// Test Case 3: '9' should return the lyrics for "99 Bottles of Beer"
const result3 = HQ9('9');
// Replace the expected value with the actual lyrics if needed
const expected3 = '99 bottles of beer on the wall';
console.log(result3.includes(expected3) ? 'Test Case 3 Passed' : 'Test Case 3 Failed');

// Test Case 4: Any other input should return undefined
const result4 = HQ9('A');
console.log(result4 === undefined ? 'Test Case 4 Passed' : 'Test Case 4 Failed');
