const {
  returnTwo,
  greeting,
  add,
  multiply,
  divide,
  subtract
} = require("./functions");

test("returnTwo should be 2", () => {
  expect(returnTwo()).toBe(2);
});

test("greeting() should return custom greeting", () => {
  expect(greeting("Finn")).toBe("Hello, Finn");
  expect(greeting("AJ")).toBe("Hello, AJ");
});

describe("Math functions:", () => {
  test("add() should return a sum based on two parameters", () => {
    expect(add(2, 4)).toBe(6);
    expect(add(10, 10)).toBe(20);
  });

  test("multiply() should return a product based on two parameters", () => {
    expect(multiply(2, 4)).toBe(8);
    expect(multiply(10, 10)).toBe(100);
  });

  test("divide() should return a quotient based on two parameters", () => {
    expect(divide(4, 2)).toBe(2);
    expect(divide(10, 10)).toBe(1);
  });

  test("subtract() should return a difference based on two parameters", () => {
    expect(subtract(2, 4)).toBe(-2);
    expect(subtract(10, 6)).toBe(4);
  });
});
