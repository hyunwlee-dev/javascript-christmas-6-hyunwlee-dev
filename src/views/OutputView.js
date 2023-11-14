import { Console } from '@woowacourse/mission-utils';
import { EVENT_MESSAGE } from '../constants/index.js';

const OutputView = Object.freeze({
  printGreeting() {
    Console.print(EVENT_MESSAGE.greeting);
  },
  printMenu() {
    Console.print('<주문 메뉴>');
  },
});

export default OutputView;
