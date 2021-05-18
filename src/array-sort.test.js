import { leastToGreatest, byAge, greatestToLeast, lengthSort, alphabetical } from './array-sort';

it.skip('leastTOGreatest', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const actual = leastToGreatest.skip(input);
  expect(actual).toEqual([1, 2, 3, 5, 20, 90]);
});

it.skip('greatestToLeast', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const actual = greatestToLeast(input);
  expect(actual).toEqual([90, 20, 5, 3, 2, 1]);

});

it.skip('lengthSort', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const actual = lengthSort(input);
  expect(actual).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']);
});

it.skip('alpahbetical', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const actual = alphabetical(input);
  expect(actual).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']);
});


it.skip('byAge', () => {
  const input = [
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Arrogant Ambassador', age: 100 },
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Unlucky Swami', age: 77 }
  ];
  const actual = byAge(input);
  expect(actual).toEqual([
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Unlucky Swami', age: 77 },
    { name: 'Arrogant Ambassador', age: 100 }
  ]);
});