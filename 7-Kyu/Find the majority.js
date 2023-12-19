/*
Goal
Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that 
returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

Example
majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null
*/
/*
function majority(arr) {
  const res = arr.reduce((a,b)=>(a[b]?a[b]+=1:a[b]=1,a),{});
  const max = Math.max(...Object.values(res));
  const filtered = Object.entries(res).filter(v=>v[1]===max);
  return filtered.length === 1 ? filtered[0][0] : null;
}*/


function majority(arr) {
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];

    // Increment the count for the current element
    count[currentElement] = (count[currentElement] || 0) + 1;
  }

  let maxCount = 0;
  let majorityElement = null;

  // Find the element with the maximum count
  for (const element in count) {
    if (count[element] > maxCount) {
      maxCount = count[element];
      majorityElement = element;
    }
  }

  // Check if there is a majority element
  return maxCount > 1 ? majorityElement : null;
}

// Examples
console.log(majority(["A", "B", "A"]));     // Output: "A"
console.log(majority(["A", "B", "B", "A"])); // Output: null

//---
function majority(arr) {
  const res = arr.reduce(function(a, b) {
    if (a[b]) {
      a[b] += 1;
    } else {
      a[b] = 1;
    }
    return a;
  }, {});

  const values = Object.values(res);
  const max = Math.max.apply(null, values);

  const filtered = Object.entries(res).filter(function(v) {
    return v[1] === max;
  });

  return filtered.length === 1 ? filtered[0][0] : null;
}

// Examples
console.log(majority(["A", "B", "A"]));     // Output: "A"
console.log(majority(["A", "B", "B", "A"])); // Output: null
