import React from "react";
import { useQuery } from "react-query";

import { apiKeyForWeather } from "../../../consts";
import { IQueryKey } from "../../../intefaces";
import { WeatherForm } from "../../Weather/WeatherForm";
import { WeatherInformation } from "../../Weather/WeatherInformation";
import { useWeatherContext } from "../Weather/contextWeather/WeatherContext";

export const Weather: React.FC = () => {
  const userTokenLocalStorage = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  const { city } = useWeatherContext();

  const fetchWeather = async (key: IQueryKey) => {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${apiKeyForWeather}`,
      {
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return res.json();
  };

  const { data, status } = useQuery(["city", city], fetchWeather);
  console.log(status);

  return (
    <div className="page-container">
      {userTokenLocalStorage && (
        <>
          <h1>Weather</h1>
          <p>You can find out the weather in any city in the world.</p>
          <WeatherForm />
          {status === "loading" && <div>Loading data...</div>}
          {status === "error" && <div>Error fetching data</div>}
          {status === "success" && <WeatherInformation data={data} />}
        </>
      )}

      {!userTokenLocalStorage && (
        <>
          <h1>Main Page</h1>
          <p>Go through authorization!</p>
        </>
      )}
    </div>
  );
};
