import { ERROR_MESSAGE } from '../../constants/index.js';

const VisitDateValidation = Object.freeze({
  isWithinMonthRange: Object.freeze({
    errorMessage: ERROR_MESSAGE.isWithinMonthRange,
    valid(date) {
      const regex = /^([1-9]|[12][0-9]|3[01])$/;
      return regex.test(date);
    },
  }),
});

export default VisitDateValidation;
