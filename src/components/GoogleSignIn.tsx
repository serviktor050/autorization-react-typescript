import React from "react";
import { GoogleLogin } from "react-google-login";

import { yourClientID } from "../consts";

export const GoogleSignIn: React.FC = () => {
  return (
    <>
      <GoogleLogin
        clientId={`${yourClientID}`}
        buttonText="Login"
        onSuccess={(response) => {
          console.log(response);
        }}
        onFailure={(response) => {
          console.log(response);
        }}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};
