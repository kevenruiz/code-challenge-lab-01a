export function fiveAndGreaterOnly(arr) {
  return arr.filter(item => item > 5);
}


export function evensOnly(arr) {
  return arr.filter(number => number % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter((item) => item.length < 6);
}

export function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(booger => booger.member === true);
  // eslint-disable-next-line no-restricted-globals
}

export function ofAge(arr) {
  return arr.filter(booger => booger.age > 18);

}