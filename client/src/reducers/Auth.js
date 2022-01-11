const reducer = (
  state = { auth: null, error: null, loading: false },
  action
) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "SIGNIN":
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        auth: action?.payload,
        error: action?.error,
        loading: false,
      };
    case "LOGOUT":
      localStorage.clear();

      return {
        ...state,
        authData: null,
      };

    default:
      return state;
  }
};
export default reducer;
