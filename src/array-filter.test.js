import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati, ofAge } from './array-filter';

it.skip('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

it.skip('evensOnly', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});

it.skip('fiveCharactersOrFewerOnly', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
  const actual = fiveCharactersOrFewerOnly(input); // act
  expect(actual).toEqual(['dog', 'wolf', 'by', 'eaten']); // assert
});

it.skip('peopleWhoBelongToTheIlluminati', () => {
  const input = [
    { name: 'Angelina Jolie', member: true },
    { name: 'Eric Jones', member: 0 },
    { name: 'Paris Hilton', member: true },
    { name: 'Kayne West', member: 0 },
    { name: 'Bob Ziroll', member: true }
  ];
  const actual = peopleWhoBelongToTheIlluminati(input);
  expect(actual).toEqual([
    { name: 'Angelina Jolie', member: true },
    { name: 'Paris Hilton', member: true },
    { name: 'Bob Ziroll', member: true }
  ]);
});


it.skip('ofAge', () => {
  const input = [
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Eric Jones', age: 2 },
    { name: 'Paris Hilton', age: 5 },
    { name: 'Kayne West', age: 16 },
    { name: 'Bob Ziroll', age: 100 }];
  const actual = ofAge(input);
  expect(actual).toEqual([
    { name: 'Angelina Jolie', age: 80 },
    { name: 'Bob Ziroll', age: 100 }]);
});