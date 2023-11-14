const VisitDateValidation = Object.freeze({
  isWithinMonthRange: Object.freeze({
    errorMessage: `유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
    valid(date) {
      const regex = /^([1-9]|[12][0-9]|3[01])$/;
      return regex.test(date);
    },
  }),
});

export default VisitDateValidation;
