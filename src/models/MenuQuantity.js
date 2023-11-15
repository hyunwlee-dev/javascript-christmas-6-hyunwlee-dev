import { RULES } from '../constants/index.js';

class MenuQuantity {
  constructor(menuQuantity) {
    const [menu, quantity] = menuQuantity.split(RULES.seperator.menuQuantitiy);
    this.menu = menu;
    this.quantity = quantity;
  }
}

export default MenuQuantity;
