import { capitalizeNames, doubleNumbers, stringItUp } from './array.map';

test('it doubles the number', () => {
  const input = [2, 5, 100];
  const actual = doubleNumbers(input);
  expect(actual).toEqual([4, 10, 200]);
});

test('Stringify each object', () => {
  const input = [2, 5, 100]; // arrange
  const actual = stringItUp(input); // act
  expect(actual).toEqual(['2', '5', '100']); // assert
});

test('Stringify each object', () => {
  const input = ['john', 'JACOB', 'jinGleHeimer', 'schmidt']; // arrange
  const actual = capitalizeNames(input); // act
  expect(actual).toEqual(['John', 'Jacob', 'Jingleheimer', 'Schmidt']); // assert
});

test('Make strings', => {
  const output = makeStrings(famousPeople);
  expect(output).toEqual
})