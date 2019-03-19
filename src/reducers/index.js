import { combineReducers } from "redux";

const goodsReducer = () => {
  return [
    { title: "abcd", price: "23" },
    { title: "cdes", price: "223" },
    { title: "32add", price: "213" },
    { title: "ggsss", price: "243" }
  ];
};

const selectedGoodsReducer = (selectedGoods = null, action) => {
  // if actionType is GOODS_SELECTED, return new goods
  if (action.type === "GOODS_SELECTED") {
    return action.payload;
  }
  // if is not, return old selectedGoods
  return selectedGoods;
};

export default combineReducers({
  goods: goodsReducer,
  selectedGoods: selectedGoodsReducer
});
