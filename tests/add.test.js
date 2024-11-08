import add from "../src/add";

test("Adds positive numbers 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("Adds negative numbers -1 + -2 to equal -3", () => {
  expect(add(-1, -2)).toBe(-3);
});

test("Adds mixed numbers 1 + -2 to equal -1", () => {
  expect(add(1, -2)).toBe(-1);
});

test("Adds float numbers 1.04 + 2.51 to equal 3.55", () => {
  expect(add(1.04, 2.51)).toBeCloseTo(3.55, 2);
});

console.log("check tests working");
