import React from "react";
import { Redirect } from "react-router";

export const Users: React.FC = () => {
  const userTokenLocalStorage = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  return (
    <>
      {userTokenLocalStorage && (
        <>
          <h1>Пользователи</h1>
        </>
      )}

      {!userTokenLocalStorage && <Redirect to="/login" />}
    </>
  );
};
