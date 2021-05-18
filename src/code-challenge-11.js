export function returnTen(str) {
  // const array = str.split('');

  return str.split('').slice((-10));

}

export function findMax(matrix) {
  const anArray = [];
  matrix.join().split(',').forEach((booger) => anArray.push(Number(booger)));

  return Math.max(...anArray);

}


