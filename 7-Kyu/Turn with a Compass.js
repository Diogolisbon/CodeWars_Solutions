/*
You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW)
 and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE"
*/


function direction(index, rotate) {
  //set positions
  const poles = [ 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW' ];
  //set the a index of position
  const start = poles.indexOf(index);
  const move = rotate / 45;
  let end = (start + move) % poles.length;
  if (end < 0) {
    end = 8 + end;
  }
  return poles[end];
  
 }

 console.log(direction("S", 180));   
 console.log(direction("SE", -45)); 
 console.log(direction("W", 495));   
