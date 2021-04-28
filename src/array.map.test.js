import { capitalizeNames, doubleNumbers, stringItUp, makeStrings } from './array.map';

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

const famousPeople = [
  {
    name: 'Angelina Jolie',
    age: 80
  },
  {
    name: 'Eric Jones',
    age: 2
  },
  {
    name: 'Paris Hilton',
    age: 5
  },
  {
    name: 'Kayne West',
    age: 16
  },
  {
    name: 'Bob Ziroll',
    age: 100
  }
];

test('make strings', () => {
  const output = makeStrings(famousPeople);
  expect(output).toEqual([
    'Angelina Jolie can go to The Matrix',
    'Eric Jones is under age!!',
    'Paris Hilton is under age!!',
    'Kayne West is under age!!',
    'Bob Ziroll can go to The Matrix'
  ]);
});