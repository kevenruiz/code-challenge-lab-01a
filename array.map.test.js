test('it doubles the number', () => {
  const input = [2, 5, 100];
  const actual = doubleNumbers(input);
  expect(actual).toEqual([4, 10, 200]);
})