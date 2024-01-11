/*
Description:
This Kata is intended as a small challenge for my students

Create a function, called removeVowels, that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
*//*
var removeVowels = function(str) {
  return str.replace(/[auioe]/gi, "");
};*/

function removeVowels(str) {
  let result = [];
  const word = str.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    let noVowels = "";
    for(let j = 0; j < word[i].length; j++) {
      if( !vowels.includes(word[i][j])) {
          noVowels += word[i][j];  
      }
    }
      result.push(noVowels);
  }
  return result.join("");
}

const str = "drake";
console.log(removeVowels(str));

/*const removeVowels = (str) => {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  return str
    .split('')
    .filter(char => !vowels.has(char.toLowerCase()))
    .join('');
};

const inputString = "hello world";
console.log(removeVowels(inputString)); // Output: hll wrld
*/
