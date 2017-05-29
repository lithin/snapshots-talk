const reducer = (state = {}, action) => {
  if (action.type === 'ADD') {
    state.number = 1;
  }
  return state;
}

export default reducer;
