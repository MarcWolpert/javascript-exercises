const add = function(addend1,addend2) {
	return addend1+addend2;
};

const subtract = function(minuend,subtrahend) {
	return minuend-subtrahend;
};

const sum = function(arr) {
	return arr.reduce((acc,adder)=>{
    return acc+adder;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((acc,multiplier)=>{
    return acc*multiplier
  },1);
};

const power = function(num,power) {
	return num**power;
};

const factorial = function(num) {
	let total=1;
  for (let i=num; i>0; i--){
    total*=i;
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
