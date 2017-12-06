export default (state = { cycles: null, loading: false }, action) => {
  switch (action.type) {
    case "LOAD_PROGRAM":
      return { ...state, loading: true };
    case "SET_CYCLES":
      return {
        ...state,
        loading: false,
        cycles: action.payload
      };
    default:
      return state;
  }
};
