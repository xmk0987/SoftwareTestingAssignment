import toString from "../src/toString";

test("null is correctly handled", () => {
  expect(toString(null)).toBe("");
});

test("undefined is correctly handled", () => {
  expect(toString(undefined)).toBe("");
});

test("empty string is correctly handled", () => {
  expect(toString("")).toBe("");
});

test("number is transformed to string", () => {
  const result = toString(433);
  expect(result).toBe("433");
  expect(typeof result).toBe("string");
});

test("string is correctly handled", () => {
  const result = toString("test string");
  expect(result).toBe("test string");
  expect(typeof result).toBe("string");
});

test("array is correctly handled", () => {
  const result = toString([43, 23, 43]);
  expect(result).toBe("43,23,43");
  expect(typeof result).toBe("string");
});

test("symbol is converted to string", () => {
  expect(toString(Symbol("test"))).toBe("test");
});

test("special numbers handled correctly", () => {
  expect(toString(-0)).toBe("-0");
});
