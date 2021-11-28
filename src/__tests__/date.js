import { getReadableDate, getWelcomeText } from "utils/date";

it('returns correct date', () => {
  expect(getReadableDate('1993-12-28T18:30:00.000Z')).toEqual('29 Dec 1993');
});

it('returns empty string if date passed is invalid', () => {
  expect(getReadableDate('hello')).toEqual('');
});

it('returns correct welcome text', () => {
  expect(getWelcomeText('2021-11-28T21:35:39.809Z')).toEqual('Night');
});
