import { square } from "./square";

describe("Возведение в квадрат", () => {
  test("0 в квадрате = 0", () => {
    expect(square(0)).toBe(0);
  });
  test("1 в квадрате = 1", () => {
    expect(square(1)).toBe(1);
  });
  test("2 в квадрате = 25", () => {
    expect(square(5)).toBe(25);
  });
  test("3 в квадрате = 9", () => {
    expect(square(3)).toBe(9);
  });
  test("2 в квадрате != 5", () => {
    expect(square(2)).not.toBe(5);
  });
  test("5 в квадрате != 26", () => {
    expect(square(5)).not.toBe(26);
  });
});

describe("Проверяем вызов Math.pow", () => {
  test("Math.pow вызвался", () => {
    const spy = jest.spyOn(Math, "pow");
    square(2);
    expect(spy).toHaveBeenCalled();
  });
  test("Math.pow вызвался 1 раз", () => {
    const spy = jest.spyOn(Math, "pow");
    square(2);
    expect(spy).toHaveBeenCalledTimes(1);
  });
  test("Math.pow не вызвался", () => {
    const spy = jest.spyOn(Math, "pow");
    square(1);
    expect(spy).not.toHaveBeenCalled();
  });
});
