import React from "react";
import { SliderComponent } from "../../SliderComponent";

export const Main: React.FC = () => {
  const userTokenLocalStorage = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  return (
    <div className="page-container">
      {userTokenLocalStorage && (
        <>
          <h1>Main Page</h1>
          <p>You have logged in!</p>
          <SliderComponent />
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
