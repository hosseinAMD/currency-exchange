export const saveToStorage = (key: string, value: any, toJSON?: boolean) => {
  let data = value;
  if (toJSON) {
    data = JSON.stringify(value);
  }
  localStorage.setItem(key, data);
};

export const getFromStorage = (key: string, isJSON?: boolean) => {
  const value = localStorage.getItem(key);
  if (value && isJSON) return JSON.parse(value);
  return value;
};
