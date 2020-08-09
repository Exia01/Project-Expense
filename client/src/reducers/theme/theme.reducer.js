export const themeReducer = (state, action) => {
  //takes in action
  switch (action.type) {
    //could import the action types instead of typing the cases
    case 'TOGGLE_PALETTE':
      let paletteType = '';
      state.paletteType == 'light'
        ? (paletteType = 'dark')
        : (paletteType = 'light');
      return { ...state, paletteType };
    default:
      return state;
  }
};
