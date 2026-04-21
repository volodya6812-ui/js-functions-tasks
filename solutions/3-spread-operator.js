// BEGIN
const convert = (...dates) => {
  return dates.map(date => {
    const [year, month, day] = date;
    const jsDate = new Date(year, month, day);
    return jsDate.toDateString();
  });
};

export default convert;
// END
