const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./utils");

test("Capitalize First Letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("calculator operations", () => {
  expect(calculator.add(3, 4)).toBe(7);
  expect(calculator.subtract(9, 3)).toBe(6);
  expect(calculator.multiply(8, 9)).toBe(72);
  expect(calculator.divide(8, 2)).toBe(4);
  expect(calculator.divide(8, 0)).toBe("Cannot divide by zero");
});

test("caesar cipher", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
  // Wrapping from z to a
  expect(caesarCipher("xyz", 3)).toBe("abc");
  // Case preservation & punctuation
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
