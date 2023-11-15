import { ERROR_MESSAGE } from '../../src/constants/index.js';
import Order from '../../src/models/Order.js';
import OrderValidation from '../../src/models/validator/OrderValidation.js';

describe('타입 변환된 주문(메뉴 형식) 모델 테스트', () => {
  test.each([
    {
      input: {
        menuQuantityList: '요기요파스타-1',
      },
      errorMessage: ERROR_MESSAGE.menuQuantityList
    },
    {
      input: {
        menuQuantityList: '해산물파스타-1,해산물파스타-2',
      },
      errorMessage: ERROR_MESSAGE.menuQuantityList
    },
    {
      input: {
        menuQuantityList: '제로콜라-2,레드와인-4,샴페인-5',
      },
      errorMessage: ERROR_MESSAGE.onlyBeverage
    },
    {
      input: {
        menuQuantityList: '해산물파스타-2,레드와인-19',
      },
      errorMessage: ERROR_MESSAGE.maximum
    },
  ])(
    '$input.menuQuantityList가 메뉴 형식에 어긋나는 경우 예외가 발생한다.',
    ({ input: { menuQuantityList }, errorMessage }) => {
      const dummy = 1;
      expect(() => {
        new Order(dummy, menuQuantityList);
      }).toThrow(
        `${ERROR_MESSAGE.error} ${errorMessage}`
      );
    },
  );
});
