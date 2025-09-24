import { arrayFromNumbersToString } from "./arrayFromNumbersToString";

describe("массив чисел в массив строк", () => {
  test("Получили массив строк из [1,2,3]", () => {
    expect(arrayFromNumbersToString([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
  test("Получили массив строк из [1,2,3,null,undefined] без лишнего", () => {
    expect(arrayFromNumbersToString([1, 2, 3, null, undefined])).toEqual([
      "1",
      "2",
      "3",
    ]);
  });
});
