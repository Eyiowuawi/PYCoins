import { createContext, useState, useReducer } from "react";
import appReducer from "./reducer";

const initialState = {
  register: false,
  profile: {},
  initials: null,
  fullname: "",
  apiKeys: {},
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

    dispatch({
      type: "SAVE_USER",
      payload: payload,
    });
  };

  const logoutUser = () => {
    dispatch({
      type: "LOGOUT_USER",
    });
  };

  const saveApiKeys = (data) => {
    dispatch({
      type: "SAVE_API_KEYS",
      payload: data,
    });
  };
  const switchBusiness = () => {
    dispatch({
      type: "SWITCH_TO_BUSINESS",
    });
  };

  const contextValue = {
    ...state,
    changeToRegister,
    saveUser,
    logoutUser,
    switchBusiness,
    saveApiKeys,
    state: state,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppComponent;
