import React from "react";

export const Main: React.FC = () => {
  const userTokenLocalStorage = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  return (
    <div className="page-container">
      {userTokenLocalStorage && (
        <>
          <h1>Главная страница</h1>
          <p>Вы авторизовались!</p>
        </>
      )}

      {!userTokenLocalStorage && (
        <>
          <h1>Главная страница</h1>
          <p>Пройдите авторизацию!</p>
        </>
      )}
    </div>
  );
};
