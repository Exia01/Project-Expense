export const userReducer = (state, action) => {
  //takes in action
  switch (action.type) {
    //could import the action types instead of typing the cases
    case 'AUTH_USER':
      const { token, isAuthenticated, userInfo, expiresAt } = action.user;
      return { ...state, token, isAuthenticated, info: userInfo, expiresAt };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        info: null,
        token: null,
        expiresAt: null,
      };
    case 'REFRESH_TOKEN':
      return { ...state, token: action.token };
    default:
      return state;
  }
};

// Annonymous Funcs:https://www.javascripttutorial.net/javascript-anonymous-functions/
