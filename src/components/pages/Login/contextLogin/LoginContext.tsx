import React, { useContext, useReducer, createContext } from "react";

import { ILoginContext } from "../../../../intefaces";

/*Констаты */
export const ADD_LOGIN: string = "ADD_LOGIN";

/*Создание контекста */
export const LoginContext = createContext<ILoginContext>({
  userToken: null,
  addLogin: (token: string) => {},
  dispatch: () => {},
});

/*Создание функции для использования контекста в других компонентах */
export const useLoginContext = () => {
  return useContext(LoginContext);
};

/*Создание редьюсера */
const reducer = (
  state: { userToken: string | null },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ADD_LOGIN:
      return {
        ...state,
        userToken: action.payload,
      };
    default:
      return state;
  }
};

/*Создание основного компонента */
export const LoginContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    userToken: null,
  });

  const addLogin = (token: string) =>
    dispatch({ type: ADD_LOGIN, payload: token });

  return (
    <LoginContext.Provider
      value={{ userToken: state.userToken, addLogin, dispatch }}
    >
      {children}
    </LoginContext.Provider>
  );
};
