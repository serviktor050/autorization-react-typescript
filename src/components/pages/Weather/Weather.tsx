import React from "react";
import { useQuery } from "react-query";
import { Redirect } from "react-router-dom";

import { apiKeyForWeather } from "../../../consts";
import { IQueryKey } from "../../../intefaces";
import { WeatherForm } from "../../Weather/WeatherForm";
import { WeatherInformation } from "../../Weather/WeatherInformation";
import { useWeatherContext } from "../Weather/contextWeather/WeatherContext";

export const Weather: React.FC = () => {
  const userTokenLocalStorage: string = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  const googleIdLocalStorage: string = JSON.parse(
    JSON.stringify(localStorage.getItem("googleId"))
  );

  const isAuth = userTokenLocalStorage || googleIdLocalStorage;
  const { city } = useWeatherContext();

  const fetchWeather = async (key: IQueryKey) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKeyForWeather}`
    );
    return res.json();
  };

  const { data, status } = useQuery(["city", city], fetchWeather);

  return (
    <div className="page-container">
      {isAuth && (
        <>
          <h1>Weather</h1>
          <p>You can find out the weather in any city in the world.</p>
          <WeatherForm />
          {status === "loading" && <div>Loading data...</div>}
          {status === "error" && <div>Error fetching data</div>}
          {status === "success" && <WeatherInformation data={data} />}
        </>
      )}

      {!isAuth && <Redirect to="/login" />}
    </div>
  );
};
