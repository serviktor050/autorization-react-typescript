import React from "react";

import { useWeatherContext } from "../pages/Weather/contextWeather/WeatherContext";

type Props = {
  data: {
    main: {
      feels_like: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    name: string;
    weather: [
      {
        description: string;
      }
    ];
    wind: {
      speed: number;
    };
  };
};

export const WeatherInformation: React.FC<Props> = (props) => {
  const { city } = useWeatherContext();

  const { main, name, weather, wind } = props.data;

  return (
    <>
      {!city && <div>The city is not specified!</div>}
      {city && (
        <>
          <h2>{name}</h2>
          <p>Сегодня в городе {weather[0].description}!</p>
          <p>
            Ожидается температура от {main.temp_min.toFixed()} до{" "}
            {main.temp_max.toFixed()} ℃.
          </p>
          <p>
            Сейчас за окном {main.temp.toFixed()} ℃. Ощущается как{" "}
            {main.feels_like.toFixed()} ℃.
          </p>
          <p>Скорость ветра: {wind.speed.toFixed()} м/с.</p>
        </>
      )}
    </>
  );
};
