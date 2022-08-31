const add = function(...theArgs) {
	let total = 0;
  for (const arg of theArgs) {
    total += Number(arg);
  }
  return total;
};

const subtract = function(...theArgs) {
  let total = null;
	for (const arg of theArgs) {
    if (total === null) {
      total = arg;
      continue;
    }
    total -= Number(arg);
  }
  return total;
};

const sum = function(array) {
	let total = 0;
  for (const index of array) {
    total += index;
  }
  return total;
};

const multiply = function(...theArgs) {
  let total = 1;
	for (const arg of theArgs) {

    if (Array.isArray(arg)) {
      for (const index of arg) {
        total *= index;
      }
      continue;
    }

    total *= Number(arg);

  }
  return total;
};

const power = function(base,power) {
  let total = null;
	for (let i = 0; i < power; i++) {
    if (total === null) {
      total = base;
      continue;
    }

    total *= base;
  }
  return total;
};

const factorial = function(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    if (i === num) {
      total = num;
      continue;
    }
    
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
