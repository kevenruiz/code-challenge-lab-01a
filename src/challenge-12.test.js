import toLastNames from './challenge-12.js';

it('to last names', () => {
  const input = [{ firstName: 'Jane', lastName: 'Doe' }, { firstName: 'James', lastName: 'Bond' }];
  const actual = toLastNames(input);
  expect(actual).toEqual(['Jane Doe', 'James Bond']);
});