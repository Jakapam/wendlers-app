export default (state = { user: null, loading: false }, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
};
