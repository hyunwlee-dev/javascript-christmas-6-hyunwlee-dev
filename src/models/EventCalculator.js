import {
  BENEFITS,
  EVENT_MESSAGE,
  MENU_TABLE,
  RULES,
} from '../constants/index.js';

class EventCalculator {
  constructor(order) {
    this.order = order;
  }

  calTotalPrice() {
    let totalPrice = 0;
    this.order.menuQuantityList.forEach(({ menu, quantity }) => {
      totalPrice += this.getPriceInMenuTable(menu, quantity);
    });
    this.totalPrice = totalPrice;
  }

  getPriceInMenuTable(menu, quantity) {
    let sum = 0;
    Object.values(MENU_TABLE).forEach(category => {
      sum += this.calPriceMenu(Object.entries(category), menu, quantity);
    });
    return sum;
  }

  calPriceMenu(categoryEntries, menu, quantity) {
    let sum = 0;
    categoryEntries.forEach(([food, price]) => {
      if (menu === food) sum += price * quantity;
    });
    return sum;
  }

  calPresent() {
    if (this.totalPrice >= RULES.minimumPriceForPresent) {
      this.present = true;
      return;
    }
    this.present = false;
  }

  calBenefitOfChristmaxDDay() {
    const { min, max, init, sale } = BENEFITS.christmaxDDay;
    let sum = init;
    if (this.order.visitDate < min || this.order.visitDate > max) {
      this.benefitOfchristmaxDDay = 0;
      return;
    }
    sum += sale * (this.order.visitDate - BENEFITS.christmaxDDay.min);
    this.benefitOfchristmaxDDay = sum;
  }

  calBenefitOfWeekday() {
    const { min, max, validDays, validCategory, sale } = BENEFITS.weekday;
    if (
      this.order.visitDate < min ||
      this.order.visitDate > max ||
      !validDays.includes(this.order.visitDate)
    ) {
      this.benefitOfWeekday = 0;
      return;
    }
    this.benefitOfWeekday = this.getBenefit(validCategory, sale);
  }

  calBenefitOfWeekend() {
    const { min, max, validDays, validCategory, sale } = BENEFITS.weekend;
    if (
      this.order.visitDate < min ||
      this.order.visitDate > max ||
      !validDays.includes(this.order.visitDate)
    ) {
      this.benefitOfWeekend = 0;
      return;
    }
    this.benefitOfWeekend = this.getBenefit(validCategory, sale);
  }

  getBenefit(validCategory, sale) {
    let sum = 0;
    this.order.menuQuantityList.forEach(({ menu, quantity }) => {
      if (Object.keys(MENU_TABLE[validCategory]).includes(menu))
        sum += quantity * sale;
    });
    return sum;
  }

  calBenefitOfSpecialDay() {
    const { min, max, validDays, sale } = BENEFITS.specialDay;
    if (this.order.visitDate < min || this.order.visitDate > max) {
      this.benefitOfSpecialDay = 0;
      return;
    }
    if (!validDays.includes(this.order.visitDate)) {
      this.benefitOfSpecialDay = 0;
      return;
    }
    this.benefitOfSpecialDay = sale;
  }

  calTotalBenefitPrice() {
    let sum =
      this.benefitOfchristmaxDDay +
      this.benefitOfWeekday +
      this.benefitOfWeekend +
      this.benefitOfSpecialDay;
    if (this.present) sum += RULES.presetPrice;
    this.totalBenefitPrice = sum;
  }

  calFinalPrice() {
    let sum = this.totalPrice - this.totalBenefitPrice;
    if (this.present) sum += RULES.presetPrice;
    this.finalPrice = sum;
  }

  calEventBedge() {
    if (this.totalBenefitPrice >= RULES.bedge.santa.minimum) {
      this.eventBedge = RULES.bedge.santa.ko;
      return;
    }
    if (this.totalBenefitPrice >= RULES.bedge.tree.minimum) {
      this.eventBedge = RULES.bedge.tree.ko;
      return;
    }
    if (this.totalBenefitPrice >= RULES.bedge.star.minimum) {
      this.eventBedge = RULES.bedge.star.ko;
      return;
    }
    this.eventBedge = EVENT_MESSAGE.empty;
  }
}

export default EventCalculator;
