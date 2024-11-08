import filter from "../src/filter";

const testArray = [
  { price: 3, category: "fruit", item: "apple", grams: 70 },
  { price: 5, category: "meat", item: "minced meat", grams: 400 },
  { price: 10, category: "clothes", item: "socks", brand: "adidas" },
  { price: 2, category: "vegetable", item: "carrot", grams: 100 },
  { price: 8, category: "meat", item: "chicken breast", grams: 500 },
  { price: 12, category: "electronics", item: "headphones", brand: "sony" },
  { price: 7, category: "fruit", item: "banana", grams: 120 },
  { price: 15, category: "clothes", item: "t-shirt", brand: "nike" },
  { price: 1, category: "snack", item: "chocolate bar", grams: 50 },
  { price: 20, category: "electronics", item: "phone charger", brand: "anker" },
];

test("Filters empty array", () => {
  expect(filter([], () => true)).toEqual([[]]);
});

test("Handles null value gracefully", () => {
  expect(filter(null)).toEqual([[]]);
});

test("Filters with allTrue predicate (returns all elements)", () => {
  const allTrue = (item) => item.price > 0;
  expect(filter(testArray, allTrue)).toEqual(testArray);
});

test("Filters with allFalse predicate (returns empty array)", () => {
  const allFalse = (item) => item.category === "shouldNotExist";
  expect(filter(testArray, allFalse)).toEqual([[]]);
});

test("Filters with realistic predicate (returns headphones)", () => {
  const findHeadphones = (item) => item.item === "headphones";
  const expectedOutput = [
    { price: 12, category: "electronics", item: "headphones", brand: "sony" },
  ];
  expect(filter(testArray, findHeadphones)).toEqual(expectedOutput);
});
