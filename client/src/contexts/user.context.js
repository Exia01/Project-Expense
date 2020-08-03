import React, { createContext, useMemo } from 'react';
import { userReducer } from '../reducers/auth/user.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

// separating contexts to prevent unnecessary rendering since user may changed when passed to a props
export const UserContext = createContext();
export const UserDispatchContext = createContext();

const initialState = {
  isAuthenticated: false,
  info: null,
  token: null,
  expiresAt: null,
};

//At some point maybe look into https cookies for token?
function UserContextProvider(props) {
  //abstracted away for reusability could place back on file if needed
  const [user, dispatch] = useLocalStorageReducer(
    'user',
    initialState, //default val
    userReducer
  );

  // Using React Memo:  https://stackoverflow.com/questions/57840535/passing-multiple-value-and-setter-pairs-to-context-provider-in-react 

  function isAuthenticated() {
    if (!user.token || !user.expiresAt) {
      return false;
    }
    return (
      new Date().getTime() / 1000 < user.expiresAt
    );
  };

  const providerValue = React.useMemo(() => ({
    user,
    isAuthenticated
  }), [user, isAuthenticated]);
  return (
    <UserContext.Provider value={providerValue}>
      <UserDispatchContext.Provider value={dispatch}>
        {props.children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;


// UserReducer: https://alligator.io/react/usereducer/

//Check Authentication: https://www.codementor.io/@obabichev/react-token-auth-12os8txqo1

// Info on JWT:https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#login