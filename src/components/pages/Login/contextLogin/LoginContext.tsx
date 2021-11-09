import React, { useContext, useReducer, createContext } from "react";

import { ILoginContext } from "../../../../intefaces";

/*Констаты */
export const ADD_LOGIN: string = "ADD_LOGIN";
export const LOGOUT: string = "REMOVE_LOGIN";
export const ADD_GOOGLE_ID: string = "ADD_GOOGLE_ID";

/*Создание контекста */
export const LoginContext = createContext<ILoginContext>({
  userToken: "",
  googleId: "",
  addLogin: (token: string) => {},
  removeLogin: () => {},
  addGoogleId: (googleId: string) => {},
  dispatch: () => {},
});

/*Создание функции для использования контекста в других компонентах */
export const useLoginContext = () => {
  return useContext(LoginContext);
};

/*Создание редьюсера */
const reducer = (
  state: { userToken: string; googleId: string },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        userToken: action.payload,
      };
    case ADD_GOOGLE_ID:
      localStorage.setItem("googleId", action.payload);
      return {
        ...state,
        googleId: action.payload,
      };
    case LOGOUT:
      localStorage.setItem("token", "");
      localStorage.setItem("googleId", "");
      return {
        ...state,
        userToken: "",
      };
    default:
      return state;
  }
};

/*Создание основного компонента */
export const LoginContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    userToken: "",
    googleId: "",
  });

  const addLogin = (token: string) =>
    dispatch({ type: ADD_LOGIN, payload: token });

  const removeLogin = () => dispatch({ type: LOGOUT, payload: "" });

  const addGoogleId = (googleId: string) =>
    dispatch({ type: ADD_GOOGLE_ID, payload: googleId });

  return (
    <LoginContext.Provider
      value={{
        userToken: state.userToken,
        googleId: state.googleId,
        addLogin,
        removeLogin,
        addGoogleId,
        dispatch,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
