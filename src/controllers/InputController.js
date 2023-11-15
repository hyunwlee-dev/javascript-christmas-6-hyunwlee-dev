import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import { ERROR_MESSAGE } from '../constants/index.js';

class InputController {
  async askDate() {
    while (true) {
      try {
        return await InputView.readDate();
      } catch (error) {
        Console.print(`${ERROR_MESSAGE.error} ${error.message}`);
      }
    }
  }

  async askMenuQuantityList() {
    while (true) {
      try {
        return await InputView.readMenuQuantityList();
      } catch (error) {
        Console.print(`${ERROR_MESSAGE.error} ${error.message}`);
      }
    }
  }
}

export default InputController;
