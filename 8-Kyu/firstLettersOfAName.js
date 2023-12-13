/*
Description:
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot seperating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F
*/
/*
function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}*/

function abbrevName(name) {
  var nameArray = name.split(''); // Split the name into an array of characters
  var initialsArray = [];

  for (var i = 0; i < nameArray.length; i++) {
    if (nameArray[i] === ' ') {
      // If a space is found, add the uppercase initial to the initials array
      initialsArray.push(nameArray[0].toUpperCase(), '.'); // First initial
      initialsArray.push(nameArray[i + 1].toUpperCase(), '.'); // Second initial
      break; // Break out of the loop once the initials are found
    }
  }

  return initialsArray.join(''); // Join the initials array into a string and return
}

// Example usage:
var result = abbrevName("John Doe");
console.log(result); // Output: J.D.


function abbrevName(name) {
  for (let i = 0; i < name.length; i ++) {
    if (name[i] === " ") {
     return name[0] + "." + name[i + 1] + ".";
    }
  }
}

const nameInit = "Darla Correia";
console.log(abbrevName(nameInit));