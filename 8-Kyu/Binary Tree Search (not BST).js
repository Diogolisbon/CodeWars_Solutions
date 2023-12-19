/*
Given a number and a binary tree ( not a Binary Search Tree! ):

return True/true if the given number is in the tree
return False/false if it isn't
Each node in the binary tree is either of this Node class or null:

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
*/

function search(n, root) {
  return!!JSON.stringify(root).replace(/\D/g,' ').trim().replace(/\s+/g,':').split(':').filter(v=>v==n).length;
}

// Sample tree structure
const sampleTree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 5, children: [] },
        { value: 6, children: [] },
      ],
    },
    {
      value: 3,
      children: [
        { value: 7, children: [] },
        { value: 8, children: [] },
      ],
    },
    { value: 4, children: [] },
  ],
};

// Test the search function
console.log(search(5, sampleTree)); // Output: true (5 is present in the tree)
console.log(search(9, sampleTree)); // Output: false (9 is not present in the tree)
