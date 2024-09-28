const convertToCelsius = function(temperature) {
  //C=(F-32)*5/9
  const result=Number(((temperature-32)*(5/9)).toFixed(1));
  return (result===0.0) ? 0: result;
};

const convertToFahrenheit = function(temperature) {
  //F=(9/5) C + 32
  const result=Number(((9/5)*temperature+32).toFixed(1));
  return (result===0.0) ? 0: result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
