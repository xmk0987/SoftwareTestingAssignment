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

test("returns number as number", () => {
  const result = toNumber(43);
  expect(result).toBe(43);
  expect(typeof result).toBe("number");
});

test("symbol input returns NaN", () => {
  expect(toNumber(Symbol("test"))).toBeNaN();
});

test("empty string returns 0", () => {
  expect(toNumber("")).toBe(0);
});

test("object with valueOf method returns correct number", () => {
  const obj = {
    valueOf() {
      return 42;
    },
  };
  expect(toNumber(obj)).toBe(42);
});

test("object with no value returns NaN", () => {
  const obj = { test: "data" };
  expect(toNumber(obj)).toBeNaN();
});
