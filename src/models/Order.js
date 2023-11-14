import ChritmasEventError from '../errors/ChritmasEventError.js';
import OrderValidation from './validator/OrderValidation.js';

class Order {
  constructor(visitDate, menuQuantityList) {
    this.visitDate = visitDate;
    this.#validate(menuQuantityList);
    // TODO: convert to menuQuantity[];
  }

  #validate(menuQuantityList) {
    Object.values(OrderValidation).forEach(({ errorMessage, valid }) => {
      if (!valid(menuQuantityList)) {
        throw new ChritmasEventError(errorMessage);
      }
    });
  }
}

export default Order;
