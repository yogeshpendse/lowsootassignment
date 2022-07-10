export function reducer(state, action) {
  switch (action.type) {
    case "toggleview":
      return { ...state, sview: !state.sview };
    case "setfirst":
      return { ...state, first: action.payload };
    default:
      throw new Error();
  }
}
