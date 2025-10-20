const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((accumulator, number) => accumulator + number, 0);
};

const multiply = function(array) {
  if(array.length === 0){
    return 0
  }
  let result = 1;
  array.map((element) => result *= element);
  return result;
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(n) {
  let result = 1;
	for (number = 2; number <= n; number ++){
    result *= number;
  }
  return result;
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
