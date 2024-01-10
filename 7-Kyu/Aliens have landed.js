/*
Description:
Aliens have landed on earth. They speak an Alien version of English. So you can communicate with them,
 write a function which translates an English sentence to the language of the Aliens using these rules:

Double all vowels (a,e,i,o,u)
Reverse the order of the letters in each word
All characters must be in lowercase
*/

function speak(str) {
  const result = [];
  const language = str.toLowerCase().split('');
  const vowels = /[aeiou]/;

  for (let i = 0; i < language.length; i++) {
    if (vowels.test(language[i])) {
      //or  if (vowels.indexOf(language[i]) !== -1) {
      language.splice(i + 1, 0, language[i]);
      i++; // Skip the next index since we've just added a duplicate vowel
    }
  }

  const final = language.join('');
  const reversed = final.split('').reverse().join('');

  result.push(reversed);

  return result;
}

const str = "aeiou hfgfg agegigogug";
console.log(speak(str));
