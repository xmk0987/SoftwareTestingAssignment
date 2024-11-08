import ceil from "../src/ceil";

test("Ceil works with default precision", () => {
  expect(ceil(4.3)).toEqual(5);
});

test("Ceil works with negative precision", () => {
  expect(ceil(443.76, -1)).toEqual(450);
});

test("Ceil works with a high positive precision and lots of decimals", () => {
  expect(ceil(443.74348298492380498203984902384823848238, 37)).toEqual(
    443.7434829849238049820398490238482384824
  );
});

test("Ceil works with integers", () => {
  expect(ceil(442, -2)).toEqual(500);
});

test("Ceil works with high negative precision", () => {
  expect(ceil(442, -10)).toEqual(10000000000);
});
