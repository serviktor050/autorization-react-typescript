import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { Table } from "antd";
import { nanoid } from "nanoid";

import { IQueryKey, IUpdateData } from "../../../intefaces";

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
  const { data, status } = useQuery(["users", page], fetchUsers, {
    keepPreviousData: true,
  });

  const history = useHistory();

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar: string) => {
        return (
          <>
            <img src={`${avatar}`} alt={avatar} />
          </>
        );
      },
    },
    {
      title: "First name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  let updateData: [] = [];

  if (status === "success") {
    updateData = data.data.map((item: IUpdateData) => {
      return {
        id: item.id,
        avatar: item.avatar,
        email: item.email,
        first_name: item.first_name,
        last_name: item.last_name,
        key: nanoid(),
      };
    });
  }

  return (
    <div className="page-container">
      {userTokenLocalStorage && (
        <>
          <h1>Пользователи</h1>
          {status === "loading" && <div>Loading data...</div>}
          {status === "error" && <div>Error fetching data</div>}
          {status === "success" && (
            <>
              <Table
                columns={columns}
                dataSource={updateData}
                pagination={false}
                onRow={(record: IUpdateData) => {
                  console.log(record);
                  return {
                    onClick: (event) => {
                      return history.push(`/users/user-${record.id}`);
                    },
                  };
                }}
              ></Table>
            </>
          )}
        </>
      )}

      {!userTokenLocalStorage && <Redirect to="/login" />}
    </div>
  );
};
