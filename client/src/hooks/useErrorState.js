import { useState } from 'react';

// Creating an exporting an unnamed Function
export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  function setStateValue(val) {
    setValue(val);
  }

  function reset() {
    setStateValue('');
  }
  return [value, setStateValue, reset];
};
