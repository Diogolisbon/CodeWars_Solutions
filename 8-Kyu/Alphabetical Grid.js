/*
Task:
You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

Examples:
grid(4)

a b c d
b c d e
c d e f
d e f g
grid(10)

a b c d e f g h i j
b c d e f g h i j k
c d e f g h i j k l
d e f g h i j k l m
e f g h i j k l m n
f g h i j k l m n o
g h i j k l m n o p
h i j k l m n o p q
i j k l m n o p q r
j k l m n o p q r s
Notes:
After "z" comes "a"
If function receive N < 0 should return:
null
*/
/*
function grid(N) {
  const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
  const res = [];
  if(N<0) return null;
  if(N===1) return 'a'
  for(let i=0;i<N;i++){
    let str = ''
    for(let j=0;j<N;j++){
      str+=(arr[(j+i)%26]+' ')
    }
    res.push(str.trim())
  }
  return res.join('\n')
}*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function grid() {
  rl.question('Enter the grid size (N): ', (N) => {
    N = parseInt(N);

    if (isNaN(N) || N < 0) {
      console.log('Invalid input. Please enter a non-negative integer.');
    } else {
      const result = Array.from({ length: N }, (_, i) =>
        Array.from({ length: N }, (_, j) => String.fromCharCode((j + i) % 26 + 97)).join(' ')
      ).join('\n');

      console.log(result);
    }

    rl.close();
  });
}

// Call the function to start the process
grid();


