import { ERROR_MESSAGE } from '../../src/constants/index.js';
import VisitDate from '../../src/models/VisitDate.js';
import VisitDateValidation from '../../src/models/validator/VisitDateValidation.js';

describe('방문 날짜 모델 테스트', () => {
  test.each([
    {
      input: {
        date: 'a',
      },
    },
    {
      input: {
        date: '0',
      },
    },
    {
      input: {
        date: '32',
      },
    },
  ])(
    '$input.date가 1 ~ 31 이하의 양수가 아닌 경우 예외가 발생한다.',
    ({ input: { date } }) => {
      expect(() => {
        new VisitDate(date);
      }).toThrow(
        `${ERROR_MESSAGE.error} ${VisitDateValidation.isWithinMonthRange.errorMessage}`,
      );
    },
  );
});
