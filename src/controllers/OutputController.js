import { BENEFITS, RULES } from '../constants/index.js';
import OutputView from '../views/OutputView.js';

class OutputController {
  printGreeting() {
    OutputView.printGreeting();
  }

  printPreview(date) {
    OutputView.printPreview(date);
  }

  printMenu(menuQuantityList) {
    OutputView.printMenu();
    menuQuantityList.forEach(({ menu, quantity }) => {
      OutputView.printMenuQuantity(menu, quantity);
    });
  }

  printTotalPrice(totalPrice) {
    OutputView.printPreviewTotalPrice();
    OutputView.printTotalPrice(totalPrice);
  }

  printPresent(present) {
    OutputView.printPreviewPresent();
    if (present) {
      OutputView.printPresent(`${RULES.present}`);
      return;
    }
    OutputView.printNoting();
  }

  printBenefits(christmaxDDay, weekday, weekend, specialDay, present) {
    OutputView.printPreviewBenefits();
    this.printNotingInBenefits(christmaxDDay, weekday, weekend, specialDay);
    if (christmaxDDay !== 0)
      OutputView.printBenefit(BENEFITS.christmaxDDay.name, christmaxDDay);
    if (weekday !== 0) OutputView.printBenefit(BENEFITS.weekday.name, weekday);
    if (weekend !== 0) OutputView.printBenefit(BENEFITS.weekend.name, weekend);
    if (specialDay !== 0)
      OutputView.printBenefit(BENEFITS.specialDay.name, specialDay);
    if (present) OutputView.printBenefit(RULES.presentTheme, RULES.presetPrice);
  }

  printNotingInBenefits(christmaxDDay, weekday, weekend, specialDay) {
    if (
      christmaxDDay === 0 &&
      weekday === 0 &&
      weekend === 0 &&
      specialDay === 0
    ) {
      OutputView.printNoting();
    }
  }

  printTotalBenefitPrice(totalBenfitPrice) {
    OutputView.printPreviewTotalBenefitPrice();
    OutputView.printTotalBenefitPrice(totalBenfitPrice);
  }

  printFinalPrice(finalPrice) {
    OutputView.printPreviewFinalPrice();
    OutputView.printFinalPrice(finalPrice);
  }

  printEventBedge(bedge) {
    OutputView.printPreviewEventBedge();
    OutputView.printEventBedge(bedge);
  }
}

export default OutputController;
