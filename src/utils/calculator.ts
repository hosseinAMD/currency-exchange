export const getAvg = (array: Array<number>) =>
  array.reduce((a, b) => Number(a) + Number(b)) / array.length;

export const getMin = (array: Array<number>) => Math.min(...array);

export const getMax = (array: Array<number>) => Math.max(...array);
