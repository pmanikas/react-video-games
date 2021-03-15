export const covertMsToTime = (ms) => {
  return `${Math.floor(ms / 60)}:${("0" + Math.floor(ms % 60)).slice(-2)}`;
};
