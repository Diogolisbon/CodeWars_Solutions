/*
Description:
Andy LOVES coffee, he's totally addicted. Unfortunately he drinks too much so the doctor has 
advised he only drinks 6 espresso shots a day.

Andy only drinks one type of coffee a day, and each have the following number of espresso shots in them:

espresso = 1 shot

double espresso = 2 shots

flat white = 2 shots

latte = 1 shot

mocha = 2 shots

decaf = 0 shot

Challenge:

Create a function that returns the following:

If Andy has consumed no shots return "You haven't even had coffee today!"

If Andy has had less than 4 shots return "The doctor won't be worried yet!"

If Andy has had 4 shots return "You can have 2 more shots then no more!"

If Andy has had 5 shots return "You can only have an espresso, latte or a decaf now"

If Andy has had 6 or more shots return "Only decaf for you now!"
*/rn "Only decaf for you now!";
}*/

function caffeine(c, coffee) {
  if (c === "espresso") coffee *= 1;
  else if (c === "doubleEspresso") coffee *= 2;
  else if (c === "flat white") coffee *= 2;
  else if (c === "latte") coffee *= 1;
  else if (c === "mocha") coffee *= 2;
  else if (c === "decaf") coffee *= 0;
  else return "Invalid coffee type";

  if (coffee === 0) return "You haven't even had coffee today!";
  if (coffee < 4) return "The doctor won't be worried yet!";
  if (coffee === 4) return "You can have 2 more shots, then no more!";
  if (coffee === 5) return "You can only have an espresso, latte, or a decaf now";
  if (coffee === 6) return "Only decaf for you now!";
  if (coffee > 6) return "Only decaf for you now!";

  return `Enjoy your ${c} with ${coffee} shots!`;
}

// Example usage:
const coffeeType = "espresso";
const coffeeShots = 3;
console.log(caffeine(coffeeType, coffeeShots));
