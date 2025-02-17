const { capitalize, reverseString } = require("./utils");

test("Capitalize First Letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
