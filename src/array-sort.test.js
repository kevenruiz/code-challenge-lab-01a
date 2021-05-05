import { leastToGreatest, byAge, greatestToLeast, lengthSort, alphabetical } from './array-sort';

test('leastTOGreatest', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const actual = leastToGreatest(input);
  expect(actual).toEqual([1, 2, 3, 5, 20, 90]);
});

test('greatestToLeast', () => {
  const input = [1, 3, 5, 2, 90, 20];
  const actual = greatestToLeast(input);
  expect(actual).toEqual([90, 20, 5, 3, 2, 1]);

});

test('lengthSort', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const actual = lengthSort(input);
  expect(actual).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']);
});

test('alpahbetical', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten'];
  const actual = alphabetical(input);
  expect(actual).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']);
});


test('byAge', () => {
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