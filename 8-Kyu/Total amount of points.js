/*
Description:
Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the array.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such list and counts the points of our team in the championship. 
Rules for counting points for each match:

if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4


const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0) */
/*
  function points(games) {
    var totalPoints = 0;
    for (var i = 0; i < games.length; i++) {
      var current = games[i];
      if (current[0] > current[2]) {
        totalPoints += 3;
      } else if (current[0] === current[2]) {
        totalPoints += 1;
      } else {
        totalPoints += 0;
      }
      
    }
    return totalPoints;
  }
*/




function points(results) {
  let totalPoints = 0;

  for (let i = 0; i < results.length; i++) {
    const [home, other] = results[i].split(':').map(Number);

    if (home > other) {
      totalPoints += 3;
    } else if (home === other) {
      totalPoints += 1;
    }
    // No need for an else statement, as adding 0 points is not necessary

  }

  return totalPoints;
}

const results = ["3:1", "2:2", "0:1"];
console.log(points(results));
