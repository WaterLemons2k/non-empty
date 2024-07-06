import test from 'ava';
import notEmpty from './index.js';

const nonEmpty = [true, 123, { foo: 1 }, [1], 'false', new Date()];
const empty = [null, undefined, false, NaN, 0, -0, 0n, '', {}, []];

test('Not empty', (t) => {
  for (const value of nonEmpty) {
    t.true(notEmpty(value), `"${value}" should not be empty`);
  }
});

test('empty', (t) => {
  for (const value of empty) {
    t.false(notEmpty(value), `"${value}" should be empty`);
  }
});
