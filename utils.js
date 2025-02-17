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

function caesarCipher(str, shift) {
  return str
    .split("")
    .map((char) => {
      // We only want to shift letters, while punctuation & no.s remain unchanged.
      if (/[a-zA-Z]/.test(char)) {
        //Uppercase have ASCII val from 65 (A) to 90 (Z), Lowercase97 (a) to 122 (z)
        const offset = char === char.toUpperCase() ? 65 : 97;

        /**
         * char.charCodeAt(0) → Converts char to its ASCII number.
         * Subtract offset → Normalizes A-Z or a-z to 0-25 for easier calculation.
         * % 26 → Ensures wrapping (so z wraps back to a).
         * String.fromCharCode converts back to a character
         */
        return String.fromCharCode(
          ((char.charCodeAt(0) - offset + shift) % 26) + offset
        );
      }

      //Handling Non-Letter Characters
      return char;
    })
    .join("");
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
