/*
Description:
Tap Code Translation
Tap code is a way to communicate using a series of taps and pauses for each letter.
 In this kata, we will use dots . for the taps and whitespaces for the pauses.

The number of taps needed for each letter matches its coordinates in the following polybius square 
(note the c/k position). Then you "tap" the row, a pause, then the column. Each letter is separated from others with a pause too.

   1  2  3  4  5
1  A  B C\K D  E
2  F  G  H  I  J
3  L  M  N  O  P
4  Q  R  S  T  U
5  V  W  X  Y  Z
Input:
A lowercase string of a single word (no whitespaces or punctuation, only letters).

Output:
The encoded string as taps and pauses.

Examples
text = "dot"
  "D" = (1, 4) = ". ...."
  "O" = (3, 4) = "... ...."
  "T" = (4, 4) = ".... ...."
  
output: ". .... ... .... .... ...."


"example" -> ". ..... ..... ... . . ... .. ... ..... ... . . ....."
"more"    -> "... .. ... .... .... .. . ....."
Happy coding!
*/
/*
function tapCodeTranslation(text) {
  const dict = [['a','b','c\k','d','e'],['f','g','h','i','j'],['l','m','n','o','p'],['q','r','s','t','u'],['v','w','x','y','z']]
  let str = '';
  text = text.toLowerCase().split``
  for(let i=0;i<text.length;i++){
    dict.map((v,j)=>{
      if(v.some(z=>z.includes(text[i]))){
        str += '.'.repeat(j+1)+' ';
        str += '.'.repeat(v.findIndex(x=>x.includes(text[i]))+1)+' '
      }
    })
  }
  return str.trim();
}*/
/*
function tapCodeTranslation(text) {
  const dict = [['a','b','c\k','d','e'],['f','g','h','i','j'],['l','m','n','o','p'],['q','r','s','t','u'],['v','w','x','y','z']];
  let str = '';
  text = text.toLowerCase().split('');

  for(let i = 0; i < text.length; i++) {
    for(let j = 0; j < dict.length; j++) {
      let found = false;

      for (let z = 0; z < dict[j].length; z++) {
        if (dict[j][z].includes(text[i])) {
          found = true;
          str += '.'.repeat(j + 1) + ' ';
          str += '.'.repeat(z + 1) + ' ';
          break;
        }
      }

      if (found) {
        break;
      }
    }
  }
  return str.trim();
}

const translation = tapCodeTranslation("hello");
console.log(translation);
*/

/* this one under doesnt work, but i kept it here 
 |
 V
function tapCodeTranslation(text) {
  const dict1 = ['a','b','c\k','d','e'];
  const dict2 = ['f','g','h','i','j'];
  const dict3 = ['l','m','n','o','p'];
  const dict4 = ['q','r','s','t','u'];
  const dict5 = ['v','w','x','y','z'];
  let str = " ";
  text = text.toLowerCase().split('');

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < dict1.length; j++) {
      if(text[i] == dict1[j][0] || dict2[j][0] || dict3[j][0] || dict4[j][0] || dict5[j][0]) {
        return str += '.' + ' ';
        break;
      }
      if(text[i] == dict1[j][1] || dict2[j][1] || dict3[j][1] || dict4[j][1] || dict5[j][1]) {
        return str += '..' + ' ';
        break;
      }
      if(text[i] == dict1[j][2] || dict2[j][2] || dict3[j][2] || dict4[j][2] || dict5[j][2]) {
        return str += '...' + ' ';
        break;
      }
      if(text[i] == dict1[j][3] || dict2[j][3] || dict3[j][3] || dict4[j][3] || dict5[j][3]) {
        return str += '....' + ' ';
        break;
      }
      if(text[i] == dict1[j][4] || dict2[j][4] || dict3[j][4] || dict4[j][4] || dict5[j][4]) {
        return str += '.....' + ' ';
        break;
      }
    }    

  }
  return str.trim();
}

console.log(tapCodeTranslation("dot")); 
console.log(tapCodeTranslation("example"))

*/

/*
Another way wthout many built ins:
|
V
*/ /*
function tapCodeTranslation(text) {
  const dict1 = ['a','b','c\k','d','e'];
  const dict2 = ['f','g','h','i','j'];
  const dict3 = ['l','m','n','o','p'];
  const dict4 = ['q','r','s','t','u'];
  const dict5 = ['v','w','x','y','z'];
  let result = " ";
  text = text.toLowerCase().split('');

  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < dict1.length; j++) {
      if (text[i] === dict1[j]) {
        result += '.'.repeat(j + 1) + ' ';
      } else if (text[i] === dict2[j]) {
        result += '..'.repeat(j + 1) + ' ';
      } else if (text[i] === dict3[j]) {
        result += '...'.repeat(j + 1) + ' ';
      } else if (text[i] === dict4[j]) {
        result += '....'.repeat(j + 1) + ' ';
      } else if (text[i] === dict5[j]) {
        result += '.....'.repeat(j + 1) + ' ';
      }
    }
  }

  return result.trim();
}

console.log(tapCodeTranslation("dot")); // Output: ". .... ... .... .... ...."
console.log(tapCodeTranslation("example"));
*/

function tapCodeTranslation(text) {
  const dict = [
    ['a', 'b', 'c', 'k', 'd'],
    ['e', 'f', 'g', 'h', 'i'],
    ['j', 'l', 'm', 'n', 'o'],
    ['p', 'q', 'r', 's', 't'],
    ['u', 'v', 'w', 'x', 'y'],
    ['z']
  ];

  let result = "";

  text = text.toLowerCase().split('');

  for (let i = 0; i < text.length; i++) {
    for (let row = 0; row < dict.length; row++) {
      for (let col = 0; col < dict[row].length; col++) {
        if (text[i] === dict[row][col]) {
          result += ".".repeat(row + 1) + " " + ".".repeat(col + 1) + " ";
        }
      }
    }
  }

  return result.trim();
}

// Examples
console.log(tapCodeTranslation("dot")); 
console.log(tapCodeTranslation("example")); 
console.log(tapCodeTranslation("more"));
