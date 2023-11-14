import { ERROR_MESSAGE } from '../../src/constants/index.js';
import Order from '../../src/models/Order.js';
import OrderValidation from '../../src/models/validator/OrderValidation.js';

describe('주문(메뉴 형식) 모델 테스트', () => {
  test.each([
    {
      input: {
        menuQuantityList: '해산물파스타',
      },
    },
    {
      input: {
        menuQuantityList: '해산물파스타-ㄱ',
      },
    },
    {
      input: {
        menuQuantityList: '해산물파스타-2,',
      },
    },
    {
      input: {
        menuQuantityList: '해산물파스타-2,레드와인-',
      },
    },
    {
      input: {
        menuQuantityList: '해산물파스타-2,레드와인-0',
      },
    },
    {
      input: {
        menuQuantityList: '해산물파스타-2,레드와인-1,choco-1',
      },
    },
  ])(
    '$input.menuQuantityList가 메뉴 형식에 어긋나는 경우 예외가 발생한다.',
    ({ input: { menuQuantityList } }) => {
      const dummy = 1;
      expect(() => {
        new Order(dummy, menuQuantityList);
      }).toThrow(
        `${ERROR_MESSAGE.error} ${OrderValidation.isMenuQuantityListFormat.errorMessage}`,
      );
    },
  );
});
