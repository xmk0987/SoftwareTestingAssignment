import capitalize from "../src/capitalize";

test("no capitals string correctly capitalized", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("all capitals string correctly set all other letters to non capitalized", () => {
  expect(capitalize("HELLO WORLD")).toBe("Hello world");
});

test("mixed string correctly handled", () => {
  expect(capitalize("heLLo WorlD")).toBe("Hello world");
});

test("no alphabetical string correctly handled", () => {
  expect(capitalize("3242£@@")).toBe("3242£@@");
});

test("null values correctly handled", () => {
  expect(capitalize(null)).toBe("Null");
});

test("empty values correctly handled", () => {
  expect(capitalize("")).toBe("");
});
