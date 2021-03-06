export const minusDays = (date: Date, count: number) => {
  let result = new Date(date);
  result.setDate(result.getDate() - count);
  return result;
};

export const formatDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateTime = (date: Date | string) => {
  const dateTime = typeof date === "string" ? new Date(date) : date;
  const dateString = formatDate(dateTime);
  const hours = dateTime.getHours().toString().padStart(2, "0");
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");
  return `${dateString}@ ${hours}:${minutes}`;
};
