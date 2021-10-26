import React, { useRef } from "react";

import { useWeatherContext } from "../pages/Weather/contextWeather/WeatherContext";

export const WeatherForm: React.FC = () => {
  const { addCity } = useWeatherContext();

  const ref = useRef<HTMLInputElement>(null);

  const cityHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addCity(ref.current!.value);
      ref.current!.value = "";
    }
  };
  return (
    <div className="input-field">
      <input
        ref={ref}
        type="text"
        id="city"
        placeholder="Введите город"
        onKeyPress={cityHandler}
      />
    </div>
  );
};
