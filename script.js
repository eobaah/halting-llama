// main score to keep track of the total correct answers
var score;

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(randomNum(1,16));
