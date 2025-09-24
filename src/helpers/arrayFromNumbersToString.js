export const arrayFromNumbersToString = (arr) =>
  arr.filter((item) => Number.isInteger(item)).map(String);
