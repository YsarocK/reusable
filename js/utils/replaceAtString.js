const replaceAtString = (string, index, replacement) => {
  return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}