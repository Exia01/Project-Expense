export const userReducer = (state, action) => {
  //takes in action
  switch (action.type) {
    //could import the action types instead of typing the cases
    case 'AUTH_USER':
      const { token, isAuthenticated, userInfo, expiresAt } = action.user;
      return { ...state, token, isAuthenticated, user: userInfo, expiresAt };
    case 'LOGOUT':
      return { isAuthenticated: false, user: null, token: null };
    case 'REFRESH_TOKEN':
      return { ...state, token: action.token };
    default:
      return state;
  }
};
