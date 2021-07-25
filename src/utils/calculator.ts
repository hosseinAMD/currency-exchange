export const getAvg = (array: Array<number>) => {
  if (array.length === 0) return 0;
  return array.reduce((a, b) => Number(a) + Number(b)) / array.length;
};

export const getMin = (array: Array<number>) => {
  if (array.length === 0) return 0;
  return Math.min(...array);
};

export const getMax = (array: Array<number>) => {
  if (array.length === 0) return 0;
  return Math.max(...array);
};
