import toNumber from "../src/toNumber";

test("test that null values return 0", () => {
  expect(toNumber(null)).toBe(0);
});

test("test that undefined values return NaN", () => {
  expect(toNumber(undefined)).toBeNaN();
});

test("returns float strings as floats", () => {
  const result = toNumber("3.2");
  expect(result).toBe(3.2);
  expect(typeof result).toBe("number");
});

test("integer as string returns as integer", () => {
  const result = toNumber("5");
  expect(result).toBe(5);
  expect(typeof result).toBe("number");
});

test("strings are correctly trimmed return the number", () => {
  const result = toNumber("     5    ");
  expect(result).toBe(5);
  expect(typeof result).toBe("number");
});

test("handles not number strings correctly", () => {
  expect(toNumber("test string")).toBeNaN();
});

test("numbers split by spaces handled as faulty input, returns NaN", () => {
  expect(toNumber("43 434")).toBeNaN();
});
