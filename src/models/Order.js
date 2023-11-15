import { RULES } from '../constants/index.js';
import ChritmasEventError from '../errors/ChritmasEventError.js';
import MenuQuantity from './MenuQuantity.js';
import MenuQuantityValidation from './validator/MenuQuantitiyValidation.js';
import OrderValidation from './validator/OrderValidation.js';

class Order {
  menuQuantityList = [];

  constructor(visitDate, menuQuantityList) {
    this.visitDate = visitDate;
    this.#validate(menuQuantityList);
    this.#convertTypeToMenuQuantityList(menuQuantityList);
    this.#validateTypeConvertedMenuQuantityList();
  }

  #validate(menuQuantityList) {
    Object.values(OrderValidation).forEach(({ errorMessage, valid }) => {
      if (!valid(menuQuantityList)) {
        throw new ChritmasEventError(errorMessage);
      }
    });
  }

  #convertTypeToMenuQuantityList(menuQuantityList) {
    const splitedMenuQuantityList = menuQuantityList.split(
      RULES.seperator.menuQuantityList,
    );
    splitedMenuQuantityList.forEach(menuQuantity => {
      this.menuQuantityList.push(new MenuQuantity(menuQuantity));
    });
  }

  #validateTypeConvertedMenuQuantityList() {
    Object.values(MenuQuantityValidation).forEach(({ errorMessage, valid }) => {
      if (!valid(this.menuQuantityList))
        throw new ChritmasEventError(errorMessage);
    });
  }
}

export default Order;
