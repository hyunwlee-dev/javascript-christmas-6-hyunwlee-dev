import { Console } from '@woowacourse/mission-utils';
import { EVENT_MESSAGE } from '../constants/index.js';

const OutputView = Object.freeze({
  printGreeting() {
    Console.print(EVENT_MESSAGE.greeting);
  },
  printPreview(date) {
    Console.print(EVENT_MESSAGE.preview(date));
  },
  printMenu() {
    Console.print('<주문 메뉴>');
  },
  printMenuQuantity(menu, quantity) {
    Console.print(`${menu} ${quantity}개`);
  },
  printPreviewTotalPrice() {
    Console.print(EVENT_MESSAGE.totalPrice);
  },
  printTotalPrice(totalPrice) {
    Console.print(`${totalPrice.toLocaleString()}원`);
  },
  printPreviewPresent() {
    Console.print(EVENT_MESSAGE.present);
  },
  printPresent(present) {
    Console.print(`${present}`);
  },
  printPreviewBenefits() {
    Console.print(EVENT_MESSAGE.benefits);
  },
  printBenefit(benefitType, sales) {
    Console.print(`${benefitType}: -${sales.toLocaleString()}원`);
  },
  printPreviewTotalBenefitPrice() {
    Console.print(EVENT_MESSAGE.totalBenefitPrice);
  },
  printTotalBenefitPrice(totalBenefitPrice) {
    if (totalBenefitPrice === 0) {
      Console.print(`${totalBenefitPrice}원`);
      return;
    }
    Console.print(`-${totalBenefitPrice.toLocaleString()}원`);
  },
  printPreviewFinalPrice() {
    Console.print(`${EVENT_MESSAGE.finalPrice}`);
  },
  printFinalPrice(finalPrice) {
    Console.print(`${finalPrice.toLocaleString()}원`);
  },
  printPreviewEventBedge() {
    Console.print(`${EVENT_MESSAGE.eventBedge}`);
  },
  printEventBedge(bedge) {
    Console.print(`${bedge}`);
  },
  printNoting() {
    Console.print(`${EVENT_MESSAGE.empty}`);
  },
});

export default OutputView;
