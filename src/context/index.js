import { createContext, useState, useReducer } from "react";
import appReducer from "./reducer";

const initialState = {
  register: false,
  profile: {},
  intials: null,
  fulname: "",
};
export const AppContext = createContext(initialState);

const AppComponent = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeToRegister = () => {
    dispatch({
      type: "CHECK_REGISTER",
    });
  };

  const saveUser = (data) => {
    let payload = {};
    if (data.user) payload = data;
    else {
      payload = {
        ...data,
        business: {
          ...data.business,
          user: null,
        },
        user: {
          ...data.business.user,
        },
      };
    }
    console.log(payload);

    dispatch({
      type: "SAVE_USER",
      payload: payload,
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
