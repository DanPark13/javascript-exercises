const add = function(one, two) {
  return one + two;
};

const subtract = function(one, two) {
	return one - two;
};

const sum = function(numbers) {
	result = 0
  numbers.forEach((number) => {
    result += number
  })
  return result
};

const multiply = function(numbers) {
    result = 1
    numbers.forEach((number) => {
      result *= number
    }) 
    return result
};

const power = function(one, two) {
	return one ** two;
};

const factorial = function(number) {
  if (number < 2){
    return 1;
  } return number * factorial(number - 1)
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
