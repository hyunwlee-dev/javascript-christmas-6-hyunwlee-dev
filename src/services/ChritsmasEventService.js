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
    console.info('visitDate: ', visitDate);
  }
}

export default ChritsmasEventService;
