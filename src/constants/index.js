const RULES = Object.freeze({
  seperator: Object.freeze({
    menuQuantityList: ',',
    menuQuantitiy: '-',
  }),
  maximum: 20,
});

const EVENT_MESSAGE = Object.freeze({
  greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  visitDate:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menuQuantityList:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
});

const ERROR_MESSAGE = Object.freeze({
  error: '[ERROR]',
  isWithinMonthRange: '유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  menuQuantityList: '유효하지 않은 주문입니다. 다시 입력해 주세요.',
  onlyBeverage: '음료만 주문 시, 주문할 수 없습니다.',
  maximum: '메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.',
});

const MENU_TABLE = Object.freeze({
  애피타이저: Object.freeze({
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  }),
  메인: Object.freeze({
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  }),
  디저트: Object.freeze({
    초코케이크: 15000,
    아이스크림: 5000,
  }),
  음료: Object.freeze({
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  }),
});

export { RULES, EVENT_MESSAGE, ERROR_MESSAGE, MENU_TABLE };
