import isObject from "../src/isObject";

test("returns true for a function", () => {
  expect(isObject(Function)).toBe(true);
});

test("returns true for a array", () => {
  expect(isObject([1, 2, 3])).toBe(true);
});

test("returns true for a Object", () => {
  expect(isObject({ test: "Data" })).toBe(true);
});

test("returns false for a boolean", () => {
  expect(isObject(true)).toBe(false);
});

test("returns false for a number", () => {
  expect(isObject(43)).toBe(false);
});

test("returns false for null", () => {
  expect(isObject(null)).toBe(false);
});

test("returns false for a string", () => {
  expect(isObject("Hello World")).toBe(false);
});
