import { Console } from '@woowacourse/mission-utils';
import EventCalculator from '../models/EventCalculator.js';
import Order from '../models/Order.js';
import VisitDate from '../models/VisitDate.js';

class ChritsmasEventService {
  constructor(inputController, outputController) {
    this.inputController = inputController;
    this.outputController = outputController;
  }

  async run() {
    this.outputController.printGreeting();
    await this.askDate();
    await this.askMenuQuantityList();
    this.outputController.printPreview(this.order.visitDate);
    this.outputController.printMenu(this.order.menuQuantityList);
    this.eventCalculator = new EventCalculator(this.order);
    this.eventCalculator.calTotalPrice();
    this.outputController.printTotalPrice(this.eventCalculator.totalPrice);
    this.calBenefits();
    this.calResultsPrice();
  }

  async calResultsPrice() {
    this.eventCalculator.calTotalBenefitPrice();
    this.outputController.printTotalBenefitPrice(
      this.eventCalculator.totalBenefitPrice,
    );
    this.eventCalculator.calFinalPrice();
    this.outputController.printFinalPrice(this.eventCalculator.finalPrice);
    this.eventCalculator.calEventBedge(this.eventCalculator.eventBedge);
    this.outputController.printEventBedge(this.eventCalculator.eventBedge);
  }

  async calBenefits() {
    this.eventCalculator.calPresent();
    this.outputController.printPresent(this.eventCalculator.present);
    this.eventCalculator.calBenefitOfChristmaxDDay();
    this.eventCalculator.calBenefitOfWeekday();
    this.eventCalculator.calBenefitOfWeekend();
    this.eventCalculator.calBenefitOfSpecialDay();
    this.outputController.printBenefits(
      this.eventCalculator.benefitOfchristmaxDDay,
      this.eventCalculator.benefitOfWeekday,
      this.eventCalculator.benefitOfWeekend,
      this.eventCalculator.benefitOfSpecialDay,
      this.eventCalculator.present,
    );
  }

  async askDate() {
    while (true) {
      try {
        const askedDate = await this.inputController.askDate();
        this.visitDate = new VisitDate(askedDate);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }

  async askMenuQuantityList() {
    while (true) {
      try {
        const askedMenuQuantityList =
          await this.inputController.askMenuQuantityList();
        this.order = new Order(this.visitDate.visitDate, askedMenuQuantityList);
        return;
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}

export default ChritsmasEventService;
