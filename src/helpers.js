function formatDate(ms) {
  const date = new Date();
  const mailDate = {
    date: `${date.getDate()}`.padStart(2, 0),
    month: `${date.getMonth() + 1}`.padStart(2, 0),
    year: date.getFullYear(),
    hour: `${date.getHours()}`.padStart(2, 0),
    minutes: `${date.getMinutes()}`.padStart(2, 0),
  };
  return `${mailDate.date}/${mailDate.month}/${mailDate.year} ${
    mailDate.hour > 12 ? mailDate.hour - 12 : mailDate.hour
  }:${mailDate.minutes} ${mailDate.hour > 12 ? "pm" : "am"}`;
}
const filterStyle = {
  border: "1px solid #cfd2dc",
  borderRadius: "20px",
  color: "#636363",
  backgroundColor: "#f2f2f2",
};
export { formatDate, filterStyle };
