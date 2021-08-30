import { createContext, useState, useReducer } from "react";
import appReducer from "./reducer";

const initialState = {
  register: false,
  user: {},
  intials: null,
  fulname: ""
};
export const AppContext = createContext(initialState);

const AppComponent = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeToRegister = () => {
    dispatch({
      type: "CHECK_REGISTER",
    });
  };

  const saveUser = (user) => {
    dispatch({
      type: "SAVE_USER",
      payload: user,
    });
  };

  const contextValue = {
    ...state,
    changeToRegister,
    saveUser,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppComponent;
