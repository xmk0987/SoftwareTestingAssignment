import upperFirst from "../src/upperFirst";

test("no capitals string first letter capitalized", () => {
  expect(upperFirst("hello world")).toBe("Hello world");
});

test("all capitals string stays the same", () => {
  expect(upperFirst("HELLO WORLD")).toBe("HELLO WORLD");
});

test("mixed string first letter set to upper, rest stays the same", () => {
  expect(upperFirst("heLLo WorlD")).toBe("HeLLo WorlD");
});

test("no alphabetical string correctly handled", () => {
  expect(upperFirst("3242£@@")).toBe("3242£@@");
});

test("null values correctly handled", () => {
  expect(upperFirst(null)).toBe("");
});

test("empty values correctly handled", () => {
  expect(upperFirst("")).toBe("");
});
