import React, { createContext } from 'react';
import { userReducer } from '../reducers/auth/user.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

// separating contexts to prevent unnecessary rendering since user may changed when passed to a props
export const UserContext = createContext();
export const UserDispatchContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  expiresAt: null,
};

const UserContextProvider = (props) => {
  //abstracted away for reusability could place back on file if needed
  const [user, dispatch] = useLocalStorageReducer(
    'user',
    initialState, //default val
    userReducer
  );

  return (
    <UserContext.Provider value={user}>
      <UserDispatchContext.Provider value={dispatch}>
        {props.children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export default UserContextProvider;
