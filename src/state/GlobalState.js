import React, { createContext, useContext } from 'react';

const GlobalStateContext = createContext();

function GlobalStateProvider(props) {
  const state = useContext(GlobalStateContext);
  return <GlobalStateContext.Provider value={ state }>{props.children}</GlobalStateContext.Provider>;
}

export { GlobalStateContext, GlobalStateProvider };