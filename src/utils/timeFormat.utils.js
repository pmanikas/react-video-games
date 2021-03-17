const covertMsToTime = (ms) => {
  return `${Math.floor(ms / 60)}:${("0" + Math.floor(ms % 60)).slice(-2)}`;
};

const getCurrentMonth = (date) => {
  const month = date.getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = (date) => {
  const day = date.getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

export { covertMsToTime, getCurrentMonth, getCurrentDay };
