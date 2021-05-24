import { containsW } from './challenge-13.js';

describe('Contains /w/ challenge', () => {
  test('It should return true if it has a w', () => {
    expect(containsW('hello world')).toStrictEqual(true);
    expect(containsW('Hello World')).toStrictEqual(false);
    expect(containsW('hello everyone')).toStrictEqual(false);
  });
});