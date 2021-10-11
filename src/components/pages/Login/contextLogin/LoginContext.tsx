import React, { useContext, useReducer, createContext } from "react";

import { ILoginContext } from "../../../../intefaces";

/*Констаты */
export const ADD_LOGIN: string = "ADD_LOGIN";
export const REMOVE_LOGIN: string = "REMOVE_LOGIN";

/*Создание контекста */
export const LoginContext = createContext<ILoginContext>({
  userToken: "",
  addLogin: (token: string) => {},
  removeLogin: () => {},
  dispatch: () => {},
});

/*Создание функции для использования контекста в других компонентах */
export const useLoginContext = () => {
  return useContext(LoginContext);
};

/*Создание редьюсера */
const reducer = (
  state: { userToken: string },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        userToken: action.payload,
      };
    case REMOVE_LOGIN:
      localStorage.setItem("token", "");
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
  });

  const addLogin = (token: string) =>
    dispatch({ type: ADD_LOGIN, payload: token });

  const removeLogin = () => dispatch({ type: REMOVE_LOGIN, payload: "" });

  return (
    <LoginContext.Provider
      value={{ userToken: state.userToken, addLogin, removeLogin, dispatch }}
    >
      {children}
    </LoginContext.Provider>
  );
};
