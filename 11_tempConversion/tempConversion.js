const convertToCelsius = function(unitToBeConverted) {
  const convertedCelsius = ((unitToBeConverted - 32) * 5/9);
  return (convertedCelsius % 1 == 0) ? convertedCelsius : parseFloat(convertedCelsius.toFixed(1));
};

const convertToFahrenheit = function(unitToBeConverted) {
  const convertedFahrenheit = ((unitToBeConverted * 9/5) + 32);
  return (convertedFahrenheit % 1 == 0) ? convertedFahrenheit : parseFloat(convertedFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
