/*
Description:
Create a function called shortcut to remove all the lowercase vowels in a given string.

Examples
shortcut("codewars") // --> cdwrs
shortcut("goodbye")  // --> gdby
Don't worry about uppercase vowels.
*/
/*
function shortcut(string){
    return string.replace(/[aeiou]/g,'')
}*/

function remove(str) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
const regex = new RegExp(`[${vowels.join('')}]`, 'gi');
const final = str.replace(regex, '');
return final;
}

const phrase = "codewars";
console.log(remove(phrase)); 