import { ERROR_MESSAGE } from '../../constants/index.js';

const OrderValidation = Object.freeze({
  isMenuQuantityListFormat: Object.freeze({
    errorMessage: ERROR_MESSAGE.isMenuQuantityListFormat,
    valid(menuQuantityList) {
      const regex = /^([가-힣]+-([1-9][0-9]*))(,[가-힣]+-([1-9][0-9]*))*$/;
      return regex.test(menuQuantityList);
    },
  }),
});

export default OrderValidation;
