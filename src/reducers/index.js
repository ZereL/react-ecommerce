import { combineReducers } from "redux";
import postsReducers from "./postsReducers";
import { reducer as formReducer } from 'redux-form';

const goodsReducer = () => {
  return [
    { title: "apple", price: "$23" },
    { title: "banana", price: "$223" },
    { title: "orange", price: "$213" },
    { title: "kiwi", price: "$243" }
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
  selectedGoods: selectedGoodsReducer,
  posts: postsReducers,
  form: formReducer
});
