const add = function(a,b) {
  return a + b;
	
};

const subtract = function(a,b) {
  return a - b;
	
};

const sum = function(array) {
  return array.reduce((acc, item) => acc + item, 0);
};

const multiply = function(array) {
  return array.reduce((acc, item) => acc * item);
	
};

const power = function(a,b) {
  return a ** b;
	
};

const factorial = function(num) {
  let total  = 1
	for(let i = num;i>0;i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
