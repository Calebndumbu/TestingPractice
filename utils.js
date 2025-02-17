//function to capitalize the empty the first letter
function capitalize(str) {
  if (!str) return ""; //handle empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => (b !== 0 ? a / b : "Cannot divide by zero"),
  multiply: (a, b) => a * b,
};

module.exports = { capitalize, reverseString, calculator };
