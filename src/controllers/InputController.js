import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import { ERROR_MESSAGE } from '../constants/index.js';

class InputController {
  async askDate() {
    while (true) {
      try {
        return await InputView.readDate();
      } catch (error) {
        Console.log(`${ERROR_MESSAGE.error} ${error.message}`);
      }
    }
  }
}

export default InputController;