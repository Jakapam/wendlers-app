export default (state = { username: null, loading: false }, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return { ...state, loading: true };
    case "LOGIN_USER":
      return { ...state, loading: false, ...action.payload };
    default:
      return state;
  }
};
