import React, { createContext, useMemo } from 'react';
import { themeReducer } from '../reducers/theme/theme.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

// separating contexts to prevent unnecessary rendering since user may changed when passed to a props
export const ThemeContext = createContext();
export const ThemeDispatchContext = createContext();

const initialState = {
  currentTheme: 'light',
  info: null,
  // represent the color for the apps
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  // font color, ui elements, background
  dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  custom: { syntax: '#ffff00', ui: '#ffff00', bg: '#ffff00' },
};

function ThemeContextProvider(props) {
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

export default ThemeContextProvider;
