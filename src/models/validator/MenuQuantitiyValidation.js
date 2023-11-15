import { ERROR_MESSAGE, MENU_TABLE, RULES } from '../../constants/index.js';

function findIsExistMenu(categoryKeys, menu) {
  let isExist = false;
  categoryKeys.forEach(food => {
    if (menu === food) isExist = true;
  });
  return isExist;
}

function findIsExistMenuInCategory(menu) {
  let isExist = false;
  Object.values(MENU_TABLE).forEach(category => {
    if (findIsExistMenu(Object.keys(category), menu)) isExist = true;
  });
  return isExist;
}

const MenuQuantityValidation = Object.freeze({
  isNotExistInMenu: Object.freeze({
    errorMessage: ERROR_MESSAGE.menuQuantityList,
    valid(typeConvertedMenuQuantityList) {
      let isValid = true;
      typeConvertedMenuQuantityList.forEach(({ menu }) => {
        if (!findIsExistMenuInCategory(menu)) isValid = false;
      });
      return isValid;
    },
  }),
  isDuplication: Object.freeze({
    errorMessage: ERROR_MESSAGE.menuQuantityList,
    valid(typeConvertedMenuQuantityList) {
      const menus = typeConvertedMenuQuantityList.map(({ menu }) => menu);
      const set = new Set(menus);
      return menus.length === set.size;
    },
  }),
  isOnlyBeverage: Object.freeze({
    errorMessage: ERROR_MESSAGE.onlyBeverage,
    valid(typeConvertedMenuQuantityList) {
      let isValid = false;
      typeConvertedMenuQuantityList.forEach(({ menu }) => {
        if (findIsExistMenu(Object.keys(MENU_TABLE['애피타이저']), menu))
          isValid = true;
        if (findIsExistMenu(Object.keys(MENU_TABLE['디저트']), menu))
          isValid = true;
        if (findIsExistMenu(Object.keys(MENU_TABLE['메인']), menu))
          isValid = true;
      });
      return isValid;
    },
  }),
  isMaximum: Object.freeze({
    errorMessage: ERROR_MESSAGE.maximum,
    valid(typeConvertedMenuQuantityList) {
      const totalQuantity = typeConvertedMenuQuantityList
        .map(({ quantity }) => quantity)
        .reduce((cur, cal) => cur + cal);
      return totalQuantity <= RULES.maximum;
    },
  }),
});

export default MenuQuantityValidation;
