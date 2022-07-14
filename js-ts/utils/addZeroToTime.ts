// Example => 1: addZeroToTime(2) => "02" - 2: addZeroToTime(11) => "11" 

const addZeroToTimeJS = (number) => {
  return (number.toString().length === 1 ? "0" : "") + number.toString();
};

const addZeroToTimeTS = (number: number) => {
  const result: string = (number.toString().length === 1 ? "0" : "") + number.toString();
  return result;
};