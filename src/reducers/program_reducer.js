export default (state = { program: null, loading: false }, action) => {
  switch (action.type) {
    case "LOAD_PROGRAM":
      return { ...state, loading: true };
    case "SET_PROGRAM":
      return {
        ...state,
        loading: false,
        program: {
          cycles: [...action.payload.program.cycles],
          startingOneRepMaxes: action.payload.startingOneRepMaxes
        }
      };
    default:
      return state;
  }
};
