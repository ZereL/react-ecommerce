// actionCreator
export const selectGoods = goods => {
  // return an action
  return {
    type: "GOODS_SELECTED",
    payload: goods
  };
};
