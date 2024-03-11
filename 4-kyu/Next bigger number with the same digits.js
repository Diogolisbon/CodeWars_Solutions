/*Description:
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

12 ==> 21
513 ==> 531
2017 ==> 2071
If no bigger number can be composed using those digits, return -1:

9 ==> -1
111 ==> -1
531 ==> -1
*/

function nextBiggerNumber(n) {
  const digits = n.toString().split('').map(Number);
  let i = digits.length - 2;

  // Step 1: Find the largest index i such that arr[i] < arr[i + 1]
  while (i >= 0 && digits[i] >= digits[i + 1]) {
      i--;
  }

  // Step 2: If no such index i exists, return -1
  if (i === -1) {
      return -1;
  }

  let j = digits.length - 1;

  // Step 3: Find the largest index j such that arr[i] < arr[j]
  while (digits[j] <= digits[i]) {
      j--;
  }

  // Step 4: Swap the digits at indices i and j
  [digits[i], digits[j]] = [digits[j], digits[i]];

  // Step 5: Sort the digits to the right of index i in ascending order
  const sortedRight = digits.splice(i + 1).sort((a, b) => a - b);

  // Step 6: Concatenate all the digits to get the final result
  const result = parseInt([...digits, ...sortedRight].join(''));
  
  return result > n ? result : -1;
}

// Test cases
console.log(nextBiggerNumber(12));   // Output: 21
console.log(nextBiggerNumber(513));  // Output: 531
console.log(nextBiggerNumber(2017)); // Output: 2071
console.log(nextBiggerNumber(9));    // Output: -1
console.log(nextBiggerNumber(111));  // Output: -1


// Test cases
console.log(nextBiggerNumber(12));   // Output: 21
console.log(nextBiggerNumber(513));  // Output: 531
console.log(nextBiggerNumber(2017)); // Output: 2071
console.log(nextBiggerNumber(9));    // Output: -1
console.log(nextBiggerNumber(111));  // Output: -1













/*

function nextBigger(n) {
  const sortedDigits = n => ("" + n).split("").sort((a, b) => b - a);
  const max = +sortedDigits(n).join("");
  for (let i = n + 1; i <= max; i++) {
    if (max === +sortedDigits(i).join("")) return i;
  }
  return -1;
}*/
