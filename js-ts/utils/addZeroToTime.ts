const addZeroToTimeJS = (number) => {
  return (number.toString().length === 1 ? "0" : "") + number.toString();
};

const addZeroToTimeTS = (number: number) => {
  const result: string = (number.toString().length === 1 ? "0" : "") + number.toString();
  return result;
};