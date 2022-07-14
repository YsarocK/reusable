// Example => replaceAtStringJS("hello world", 2, "22") = he22o world

const replaceAtStringJS = (string, index, replacement) => {
  return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

const replaceAtStringTS = (string: string, index: number, replacement: string) => {
  const result: string = string.substring(0, index) + replacement + string.substring(index + replacement.length);
  return result
}

console.log(replaceAtStringJS("hello workd", 2, "22"))