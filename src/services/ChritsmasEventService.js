import Order from '../models/Order.js';
import VisitDate from '../models/VisitDate.js';

class ChritsmasEventService {
  constructor(inputController, outputController) {
    this.inputController = inputController;
    this.outputController = outputController;
  }

  async run() {
    this.outputController.printGreeting();
    const askedDate = await this.inputController.askDate();
    const visitDate = new VisitDate(askedDate);
    const askedMenuQuantityList =
      await this.inputController.askMenuQuantityList();
    console.log('askedMenuQuantityList: ', askedMenuQuantityList);
    const order = new Order(visitDate.visitDate, askedMenuQuantityList);
    console.info('visitDate: ', visitDate);
    console.info('order: ', order);
  }
}

export default ChritsmasEventService;
