/*
Retirement home viewing is on a knife edge - it really has been a bad day on Countdown…!! (https://en.wikipedia.org/wiki/Countdown_(game_show))

Nick Hewer has lost his glasses and someone is playing tricks on Rachel Riley.

Rachel finds her vowels (A, E, I, O and U), consonants and numbers have all been muddled up into different piles (2D arrays of both 
  strings and numbers) and some joker has thrown in some lower case letters to make matters worse.

As the show assistant, your challenge is to help Rachel sort her vowels into one pile (array), and her consonants into another pile (array).

In doing so you will need to change any lower-case letters to upper-case (as they only use upper case letters on the show…) and you will need
 to remove any numbers as Rachel has enough already. You do not need to return the numbers in a separate array - just remove them.

You should end up with two neat piles like below:

EG: if there were the following cards in the pile (2D array): [["a","B","H"], [0,"d","s"], [1,"W","J"]]

you would need to return: [["A"], ["B","H","D","S","W","J"]]

Consisting of: Vowels: ["A"] Consonants: ["B","H","D","S","W","J"]

Good luck!!
*/
/*
function sortLetters(text) {
  let vowels = [];
  let consonants = [];
  const up = text.toUpperCase();

  for (let i = 0; i < text.length; i++) {
    if (/[AEIOU]/.test(up[i])) {
      vowels.push(up[i]);
    } else if (/[^A-Z]/.test(up[i])) {
      continue;
    } else {
      consonants.push(up[i]);
    }
  }

  return { vowels, consonants };//{ vowels: [ 'A', 'A', 'U' ], consonants: [ 'B', 'G', 'H', 'R' ] }
  //return [vowels, consonants];//[ [ 'A', 'A', 'U' ], [ 'B', 'G', 'H', 'R' ] ]
}

console.log(sortLetters("12abghrau")); */
 
const sortLetters = (text) => {
  const up = text.toUpperCase();
  
  const vowels = [...up].filter(char => /[AEIOU]/.test(char));
  const consonants = [...up].filter(char => /[A-Z]/.test(char) && !/[AEIOU]/.test(char));

  return { vowels, consonants };
};

console.log(sortLetters("12abghrau"));




