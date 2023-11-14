import { Console } from '@woowacourse/mission-utils';
import { EVENT_MESSAGE } from '../constants/index.js';

const InputView = {
  async readDate() {
    return Console.readLineAsync(EVENT_MESSAGE.visitDate);
  },
  async readMenuQuantityList() {
    return Console.readLineAsync(EVENT_MESSAGE.menuQuantityList);
  },
};
export default InputView;
