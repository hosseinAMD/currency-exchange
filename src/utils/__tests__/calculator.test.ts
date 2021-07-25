import { getAvg, getMax, getMin } from "utils/calculator";

describe("getAvg in calculator", () => {
  test("should return 0 for empty arrays", () => {
    expect(getAvg([])).toBe(0);
  });

  test("should return the only number in array with length 1", () => {
    expect(getAvg([1])).toBe(1);
    expect(getAvg([0])).toBe(0);
  });

  test("should return correct average for array with length more than 1", () => {
    expect(getAvg([1, 2])).toBe(1.5);
    expect(getAvg([0, 2, 4])).toBe(2);
  });
});

describe("getMin in calculator", () => {
  test("should return 0 for empty array", () => {
    expect(getMin([])).toBe(0);
  });

  test("should return correct minimum with normal array", () => {
    expect(getMin([5])).toBe(5);
    expect(getMin([1, 8, 3, 2, 1, 0])).toBe(0);
  });
});

describe("getMax in calculator", () => {
  test("should return 0 for empty array", () => {
    expect(getMax([])).toBe(0);
  });

  test("should return correct maximum with normal array", () => {
    expect(getMax([5])).toBe(5);
    expect(getMax([1, 8, 3, 2, 1, 0])).toBe(8);
  });
});
