/*
Description:
Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO
 is formed by odd digits of N? Examples:
input	NE	NO
126453	264	153
3012	2	31
4628	4628	0
0 is considered as an even number.
In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.
*/
/*
function evenAndOdd(num){
  const res = ['',''];
  num.toString().split('').map(v=>v*1%2===0?res[0]+=v:res[1]+=v)
  return res.map(v=>v===""?0:v*1);
}*/

function fabricateNEandNO(N) {
  const strN = N.toString();
  let NE = "";
  let NO = "";

  for (let i = 0; i < strN.length; i++) {
    const digit = parseInt(strN[i], 10);

    if (digit % 2 === 0) {
      NE += digit;
    } else {
      NO += digit;
    }
  }

  return [NE || 0, NO || 0];
}

// Examples
console.log(fabricateNEandNO(126453)); // Output: [264, 153]
console.log(fabricateNEandNO(3012));   // Output: [2, 31]
console.log(fabricateNEandNO(4628));   // Output: [4628, 0]





