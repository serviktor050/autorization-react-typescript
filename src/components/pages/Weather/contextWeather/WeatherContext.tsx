import React, { useContext, useReducer, createContext } from "react";

import { IWeatherContext } from "../../../../intefaces";

/*Констаты */
export const ADD_CITY: string = "ADD_CITY";

/*Создание контекста */
export const WeatherContext = createContext<IWeatherContext>({
  city: "",
  addCity: (city: string) => {},
  dispatch: () => {},
});

/*Создание функции для использования контекста в других компонентах */
export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

/*Создание редьюсера */
const reducer = (
  state: { city: string },
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

/*Создание основного компонента */
export const WeatherContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    city: "",
  });

  const addCity = (city: string) => dispatch({ type: ADD_CITY, payload: city });

  return (
    <WeatherContext.Provider value={{ city: state.city, addCity, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
};
