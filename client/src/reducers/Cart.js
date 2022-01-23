const reducer = (
  state = { cart: null, error: null, loading: false },
  action
) => {
  switch (action.type) {
    case "GET_CART":
      return {
        ...state,
        cart: action.payload,
        loading: false,
        error: null,
      };
    case "CREATE_CART":
      return {
        ...state,
        cart: action.payload,
        loading: false,
        error: null,
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        cart: action.payload,
        loading: false,
        error: null,
      };
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cart: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
export default reducer;
