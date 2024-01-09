/*
Description:
Bob has ladder. He wants to climb this ladder, but being a precocious child, he wonders about exactly how many ways he could to climb this n size 
ladder using jumps of up to distance k.

Consider this example...

n = 5
k = 3

Here, Bob has ladder of length 5, and with each jump, he can ascend up to 3 steps (he can either jump step 1 or 2 or 3).
 This gives the below possibilities

1 1 1 1 1
1 1 1 2
1 1 2 1 
1 2 1 1
2 1 1 1
1 2 2
2 2 1
2 1 2
1 1 3
1 3 1
3 1 1
2 3
3 2
Your task to calculate number of ways to climb ladder of length n with upto k steps for Bob. (13 in above case)

Constraints:

1<=n<=150
1<=k<=50
Tip: try fibonacci.
*/ /*
//try this with the node promp: 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWaysToClimb(n, k) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                dp[i] += dp[i - j];
            }
        }
    }

    return dp[n];
}

// Get user input using readline
rl.question("Enter the number of steps: ", function (n) {
    rl.question("Enter the maximum number of steps you can take at once: ", function (k) {
        // Parse user input to integers
        n = parseInt(n);
        k = parseInt(k);

        // Check if the input is valid
        if (isNaN(n) || isNaN(k) || n <= 0 || k <= 0) {
            console.log("Invalid input. Please enter positive integers for both steps and maximum steps.");
        } else {
            const waysToClimb = countWaysToClimb(n, k);
            console.log(`For a ladder of ${n} steps with a maximum jump of ${k} steps, there are ${waysToClimb} possible ways to climb.`);
        }

        rl.close();
    });
});
*/
/*
//code to print the number of ways for n and k:

function countWaysToClimb(n, k) {
    if (n <= 1) {
        return 1;
    }

    let ways = 0;
    for(let jump = 1; jump <= k && jump <= n; jump++) {
        ways += countWaysToClimb(n - jump, k);
    }
    return ways;
}

const n = 5;
const k = 3;
const waysToClimb = countWaysToClimb(n, k); 

console.log(`For a ladder of ${n} steps with a maximum jump of ${k} steps, there are ${waysToClimb} possible ways to climb.`);
*/

//code to print the number of ways showing all the possibilities in a matrix of numbers:

function printWaysToClimb(n, k) {
    function generateCombinations(currentCombination, currentSum) {
        if (currentSum === n) {
            console.log(currentCombination.join(' '));
            return;
        }

        for (let jump = 1; jump <= k && currentSum + jump <= n; jump++) {
            generateCombinations(currentCombination.concat(jump), currentSum + jump);
        }
    }

    generateCombinations([], 0);
}

// Example usage:
const n = 10;
const k = 3;
console.log(`For a ladder of ${n} steps with a maximum jump of ${k} steps, the possible ways are:`);
printWaysToClimb(n, k);
