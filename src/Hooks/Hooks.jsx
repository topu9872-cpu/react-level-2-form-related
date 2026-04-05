import React, { useState } from "react";
// This is a coustom hook.......................................
const Hooks = (defaultValue) => {
  const [hookValue, setHookValue] = useState(defaultValue);

  const handleHookOnChane = (e) => {
    setHookValue(e.target.value);
  };

  return [hookValue, handleHookOnChane];
};
// ...........................................................
// This hook use in the HookForm Component...
export default Hooks;
