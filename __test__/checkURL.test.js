import { checkUrl } from '../src/client/js/checkURL';

const formUrl =
  'https://www.cnn.com/2020/07/16/politics/georgia-kemp-mask-mandate/index.html';

describe('checkUrl', () => {
  test('validate = true?', () => {
    expect(checkUrl(formUrl)).toBe(true);
  });
  test('validate = true?', () => {
    expect(checkUrl('google')).toBe(false);
  });
});
