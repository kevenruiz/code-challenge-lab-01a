import { capitalizeObjectKeys, getArrayOfKeysAndValues, getFilteredKey, sortedArraysByValuesLength, sortedKeys } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});

test('sortedKeys', () => {
  const booger = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] };
  const newbooger = sortedKeys(booger);
  expect(newbooger).toEqual(['age', 'name', 'isDog', 'friends']);
});

test(' getFilteredKey', () => {
  const booger = { name: 'Angelina Jolie', isSpot: false, age: 80, };
  const newbooger = getFilteredKey(booger);
  expect(newbooger).toEqual(['age']);
});

test('getArrayOfKeysAndValues', () => {
  const booger = { name: 'Angelina Jolie', age: 80 };
  const newbooger = getArrayOfKeysAndValues(booger);
  expect(newbooger).toEqual([['name', 'Angelina Jolie'], ['age', 80]]);
});

test('sortedArraysByValuesLength', () => {
  const booger = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' };
  const newbooger = sortedArraysByValuesLength(booger);
  expect(newbooger).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]);
});


