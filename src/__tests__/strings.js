import {formatGameType} from 'utils/string';

it('should return blank string if input is not string', () => {
  expect(formatGameType(123)).toEqual('');
});

it('removes underscore from gametype', () => {
  expect(formatGameType('hello_world')).toEqual('hello world');
});

it('removes multiple underscore from gametype', () => {
  expect(formatGameType('hello_world_1')).toEqual('hello world 1');
});