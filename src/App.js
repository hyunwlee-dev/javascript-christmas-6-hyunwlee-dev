import InputController from './controllers/InputController.js';
import OutputController from './controllers/OutputController.js';
import ChritsmasEventService from './services/ChritsmasEventService.js';

class App {
  async run() {
    const inputController = new InputController();
    const outputController = new OutputController();
    this.christmasServiceImpl = new ChritsmasEventService(
      inputController,
      outputController,
    );
    await this.christmasServiceImpl.run();
  }
}

export default App;
