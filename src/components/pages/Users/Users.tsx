import React, { useState } from "react";
import { Redirect } from "react-router";
import { useQuery } from "react-query";

import { IQueryKey } from "../../../intefaces";

const fetchUsers = async (key: IQueryKey) => {
  const res = await fetch(
    `https://reqres.in/api/users?page=${key.queryKey[1]}`
  );
  return res.json();
};

export const Users: React.FC = () => {
  const userTokenLocalStorage = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  const [page, setPage] = useState(1);
  const { data, status } = useQuery(["listUsers", page], fetchUsers, {
    keepPreviousData: true,
  });

  console.log(data);

  return (
    <div className="page-container">
      {userTokenLocalStorage && (
        <>
          <h1>Пользователи</h1>
          {status === "loading" && <div>Loading data...</div>}
          {status === "error" && <div>Error fetching data</div>}
          {status === "success" && <div>Loading success</div>}
        </>
      )}

      {!userTokenLocalStorage && <Redirect to="/login" />}
    </div>
  );
};
