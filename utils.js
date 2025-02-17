//function to capitalize the empty the first letter
function capitalize(str) {
  if (!str) return ""; //handle empty string
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

module.exports = { capitalize, reverseString };
