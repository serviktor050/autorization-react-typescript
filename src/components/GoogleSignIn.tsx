import React from "react";
import { GoogleLogin } from "react-google-login";

import { yourClientID } from "../consts";
import { useLoginContext } from "../components/pages/Login/contextLogin/LoginContext";

export const GoogleSignIn: React.FC = () => {
  const { addGoogleId } = useLoginContext();
  return (
    <>
      <GoogleLogin
        clientId={`${yourClientID}`}
        buttonText="Login"
        onSuccess={(response) => {
          console.log(response);
          if ("googleId" in response) {
            if (response.googleId) {
              addGoogleId(response.googleId);
            }
          }
        }}
        onFailure={(response) => {
          console.log("Fail login");
        }}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};
