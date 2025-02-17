const { capitalize, reverseString, calculator } = require("./utils");

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
