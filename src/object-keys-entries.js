export function capitalizeObjectKeys(obj) {
  const booger = Object.keys(obj);
  return booger.map(newbooger => newbooger.toUpperCase());
}

export function sortedKeys(obj) {
  const booger = Object.keys(obj);
  return booger.sort((a, b) => a.length - b.length);

}

export function getFilteredKey(obj) {
  const booger = Object.keys(obj);
  return booger.filter(a => a.length < 4);
}

export function getArrayOfKeysAndValues(obj) {
  const newObject = Object.entries(obj);
  return newObject;
}

export function sortedArraysByValuesLength(obj) {
  const newObject = Object.entries(obj);
  return newObject.sort((a, b) => (a.length > b.length) ? 1 : -1);
}





