export const minusDays = (date: Date, count: number) => {
  let result = date;
  result.setDate(result.getDate() - count);
  return result;
};

export const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.getMonth().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateTime = (date: Date) => {
  const dateString = formatDate(date);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${dateString}@ ${hours}:${minutes}`;
};
