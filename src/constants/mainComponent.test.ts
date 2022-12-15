import { EMPTY_STRING } from './mainComponent';

describe('constants', () => {
  describe('.EMPTY_STRING', () => {
    it('should test computed constants so youo know if a child constant changes anything', () => {
      expect(EMPTY_STRING).toMatchSnapshot();
    });
  });
});
