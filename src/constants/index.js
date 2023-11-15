const EVENT_MESSAGE = Object.freeze({
  greeting: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  visitDate:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menuQuantityList:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  empty: '없음',
  preview(date) {
    return `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`;
  },
  totalPrice: '\n<할인 전 총주문 금액>',
  present: '\n<증정 메뉴>',
  benefits: '\n<혜택 내역>',
  totalBenefitPrice: '\n<총혜택 금액>',
  finalPrice: '\n<할인 후 예상 결제 금액>',
  eventBedge: '\n<12월 이벤트 배지>',
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

const RULES = Object.freeze({
  seperator: Object.freeze({
    menuQuantityList: ',',
    menuQuantitiy: '-',
  }),
  maximum: 20,
  presentTheme: `증정 이벤트`,
  present: `샴페인 1개`,
  presetPrice: MENU_TABLE.음료.샴페인,
  minimumPriceForPresent: 120000,
  bedge: {
    star: {
      ko: '별',
      minimum: 5000,
    },
    tree: {
      ko: '트리',
      minimum: 10000,
    },
    santa: {
      ko: '산타',
      minimum: 20000,
    },
  },
});

const BENEFITS = Object.freeze({
  christmaxDDay: Object.freeze({
    name: '크리스마스 디데이 할인',
    min: 1,
    max: 25,
    init: 1000,
    sale: 100,
  }),
  weekday: Object.freeze({
    name: '평일 할인',
    min: 1,
    max: 31,
    validDays: [
      3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
      31,
    ],
    validCategory: '디저트',
    sale: 2023,
  }),
  weekend: Object.freeze({
    name: '주말 할인',
    min: 1,
    max: 31,
    validDays: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
    validCategory: '메인',
    sale: 2023,
  }),
  specialDay: Object.freeze({
    name: '특별 할인',
    min: 1,
    max: 31,
    validDays: [3, 10, 17, 24, 25, 31],
    sale: 1000,
  }),
});

export { RULES, EVENT_MESSAGE, ERROR_MESSAGE, MENU_TABLE, BENEFITS };
