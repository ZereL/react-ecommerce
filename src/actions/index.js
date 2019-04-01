import jsonPlaceholder from "../apis/jsonPlaceholder";

// actionCreator
export const selectGoods = goods => {
  // return an action
  return {
    type: "GOODS_SELECTED",
    payload: goods
  };
};

// export const fetchPosts = async () => {
//   const response = await jsonPlaceholder.get("/post");

//   return {
//     type: "FETCH_POSTS",
//     payload: response
//   };
// };

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};
