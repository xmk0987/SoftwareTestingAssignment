import isSymbol from "../src/isSymbol";

test("returns true for Symbol.iterator", () => {
  expect(isSymbol(Symbol.iterator)).toBe(true);
});

test("returns true for a custom symbol", () => {
  expect(isSymbol(Symbol("custom"))).toBe(true);
});

test("returns false for a string", () => {
  expect(isSymbol("abc")).toBe(false);
});

test("returns false for a number", () => {
  expect(isSymbol(123)).toBe(false);
});

test("returns false for an object", () => {
  expect(isSymbol({})).toBe(false);
});

test("returns false for null", () => {
  expect(isSymbol(null)).toBe(false);
});

test("returns false for undefined", () => {
  expect(isSymbol(undefined)).toBe(false);
});

test("returns false for an array", () => {
  expect(isSymbol([])).toBe(false);
});

test("returns true for an object wrapping a symbol", () => {
  expect(isSymbol(Object(Symbol("wrapped")))).toBe(true);
});
