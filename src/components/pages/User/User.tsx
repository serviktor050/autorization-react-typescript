import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import { IQueryKey } from "../../../intefaces";

type Props = {
  history: {};
  location: {};
  match: {
    params: {
      id: string;
    };
  };
};

const fetchUser = async (key: IQueryKey) => {
  const res = await fetch(`https://reqres.in/api/users?id=${key.queryKey[1]}`);
  return res.json();
};

export const User: React.FC<Props> = (props) => {
  const userTokenLocalStorage = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  const id: number = Number(props.match.params.id);

  const { data, status } = useQuery(["user", id], fetchUser);
  const history = useHistory();

  return (
    <div className="page-container">
      {userTokenLocalStorage && (
        <>
          {status === "loading" && <div>Loading data...</div>}
          {status === "error" && <div>Error fetching data</div>}
          {status === "success" && (
            <>
              <h1>
                {data.data.first_name} {data.data.last_name}
              </h1>
              <div className="user-card">
                <div className="user-image">
                  <img
                    src={`${data.data.avatar}`}
                    alt={`${data.data.first_name} ${data.data.last_name}`}
                  />
                </div>
                <div className="user-info">
                  <div className="user-info-name">
                    <p>Name:</p>
                    {` ${data.data.first_name}`}
                    {` ${data.data.last_name}`}
                  </div>
                  <div className="user-info-email">
                    <p>e-mail:</p> {` ${data.data.email}`}
                  </div>
                </div>
              </div>
              <button
                className="waves-effect waves-light btn"
                onClick={() => {
                  history.goBack();
                }}
              >
                Go back
              </button>
            </>
          )}
        </>
      )}
      {!userTokenLocalStorage && <Redirect to="/login" />}
    </div>
  );
};
