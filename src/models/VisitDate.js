import VisitDateValidation from './validator/VisitDateValidation.js';
import ChritmasEventError from '../errors/ChritmasEventError.js';

class VisitDate {
  constructor(visitDate) {
    this.#validate(visitDate);
    this.visitDate = Number(visitDate);
  }

  #validate(visitDate) {
    Object.values(VisitDateValidation).forEach(({ errorMessage, valid }) => {
      if (!valid(visitDate)) throw new ChritmasEventError(errorMessage);
    });
  }
}

export default VisitDate;
