import React from "react";

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
