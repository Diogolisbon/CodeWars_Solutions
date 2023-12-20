/*
Frank's Sticky Calculator
Description
Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

For instance:

50 + 12 becomes 5012
and then the operation is carried out as usual:

(5012) + 12 = 5024
Task
It is your job to create a function which takes 3 parameters:

stickyCalc(operation, val1, val2)
which works just like Frank's sticky calculator

Some Examples
stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101
Note
The calculator only works for positive integers only.
The calculator rounds any non-integer before operating.
The calculator rounds any output to nearest integer.
For example:

stickyCalc('/', 12.1, 6.8), 18);   
12.1 and 6.8 are rounded to 12 and 7 respectively & they 'stick together' to make 127.


Although 127 / 7 = 18.1428 ; 18 is outputted instead.
*//*

function stickyCalculator (operation, val1, val2){
    const val = Math.round(val1).toString()+Math.round(val2).toString()
    return Math.round(eval(`${val}${operation}${val2}`))

*/
function stikyCalculator(operation, val1, val2) {
    //since we are not converting val1 and val2 to numbers,
    // it will perform a string concatenation
    //in a addition operation would be: 
    //val1 = Number(val1); 
    //or: val1 = +val1; 
    const concatenatedString = Math.round(val1).toString() + Math.round(val2).toString();
   
    if(operation === "+") {
        return Number(concatenatedString) + val2;
    }
    if(operation === "-") {
        return  Number(concatenatedString) - val2;
    }
    if(operation === "*") {
        return Number(concatenatedString) * val2;
    }
    if(operation === "/") {
        return Math.round((Number(concatenatedString) / Math.round(val2)));
    } 
    if(operation < 0) {
        return null;
    }

    let result = Number(operation + val1 + val2);
    return Math.round(result);
   
}


const val1 = 12.1;
const val2 = 6.8;
console.log(stikyCalculator("+", val1, val2));
console.log(stikyCalculator("-", val1, val2));
console.log(stikyCalculator("*", val1, val2));
console.log(stikyCalculator("/", val1, val2));