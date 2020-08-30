import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(strKey, defaultValue, reducer) {
  //receives the user reducer
  //piece of state, based off of the value in localStorage using key
  // console.log(strKey, defaultValue, reducer);

  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    // the third argument is for lazy loading purposes.
    // the func will run and be set as the init state
    // using a try - catch block the result of that will be stored as the value.
    let value;
    // used try-catch if application may accidentally set the user in localStorage to undefined
    try {
      value = JSON.parse(
        window.localStorage.getItem(strKey) || String(defaultValue) //either grab by key or set by initial value
      );
    } catch (error) {
      value = defaultValue;
    }
    return value;
  });

  //useEffect to update to localStorage when state changes with the reducer
  // useEffect(() => {
  //   // console.log('State:', state);
  //   window.localStorage.setItem(strKey, JSON.stringify(state));
  //   //when state changes we want to sync to local storage
  // }, [strKey, state]);

  return [state, dispatch];

  // console.log(state, strKey);
}
// We need to pass the key as a dependency because useEffect uses it in setItem and it does not know if it changes or not hence we need to pass it to make sure the old value is not used.

export default useLocalStorageReducer;

// more info: https://stackoverflow.com/questions/56425444/can-we-use-a-function-as-second-arguments-in-useeffect
// used as such = const [user, setUser] = useLocalStorageState('user', [])
