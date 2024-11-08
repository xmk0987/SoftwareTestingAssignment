import toString from "../src/toString";

test("test that null is correctly handled", () => {
  expect(toString(null)).toBe("null");
});

test("test that undefined is correctly handled", () => {
  expect(toString(undefined)).toBe("undefined");
});

test("test that empty string is correctly handled", () => {
  expect(toString("")).toBe("");
});

test("test that number is transformed to string", () => {
  const result = toString(433);
  expect(result).toBe("433");
  expect(typeof result).toBe("string");
});

test("test that string is correctly handled", () => {
  const result = toString("test string");
  expect(result).toBe("test string");
  expect(typeof result).toBe("string");
});

test("test that array is correctly handled", () => {
  const result = toString([43, 23, 43]);
  expect(result).toBe("43,23,43");
  expect(typeof result).toBe("string");
});
