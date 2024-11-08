import words from "../src/words";

test("Multiple words in a string are separated correctly", () => {
  expect(words("one two three")).toEqual(["one", "two", "three"]);
});

test("Empty string is returned correctly", () => {
  expect(words("")).toEqual([]);
});

test("One long word is returned as one word", () => {
  expect(words("sfjklsjfjslkfjlksjafjaslkfjlksadjlfkjslajflsdfj")).toEqual([
    "sfjklsjfjslkfjlksjafjaslkfjlksadjlfkjslajflsdfj",
  ]);
});

test("Pattern matching splits based on custom pattern", () => {
  expect(words("one, two, three, four", /[^, ]+/g)).toEqual([
    "one",
    "two",
    "three",
    "four",
  ]);
});
