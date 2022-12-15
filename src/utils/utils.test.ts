import { testUtil } from './index';

describe('utils', () => {
  describe('.testUtil', () => {
    it('should return the expected string', () => {
      expect(testUtil()).toEqual('This is a test.');
    });
  });
});
