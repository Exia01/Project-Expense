import React, { createContext, useMemo } from 'react';
import { themeReducer } from '../reducers/theme/theme.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

// separating contexts to prevent unnecessary rendering since user may changed when passed to a props
export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();

const initialState = {
  paletteType: light,
  info: null,
};

function UserContextProvider(props) {
  //abstracted away for reusability could place back on file if needed
  const [theme, dispatch] = useLocalStorageReducer(
    'theme',
    initialState, //default val
    themeReducer
  );

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={dispatch}>
        {props.children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default UserContextProvider;
