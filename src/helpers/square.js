export const square = (num) => {
  if (num === 0 || num === 1) {
    return num;
  }

  return Math.pow(num, 2);
};
