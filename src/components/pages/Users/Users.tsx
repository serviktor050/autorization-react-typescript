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

type Props = {
  history: {};
  location: {
    search: string;
  };
  match: {};
};

export const Users: React.FC<Props> = (props) => {
  const userTokenLocalStorage: string = JSON.parse(
    JSON.stringify(localStorage.getItem("token"))
  );

  let pageNumber: string = props.location.search.substr(6);

  const [page, setPage] = useState(pageNumber || 1);
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
          <h1>Users</h1>
          {status === "loading" && <div>Loading data...</div>}
          {status === "error" && <div>Error fetching data</div>}
          {status === "success" && (
            <>
              <Table
                columns={columns}
                dataSource={updateData}
                pagination={false}
                onRow={(record: IUpdateData) => {
                  return {
                    onClick: (event) => {
                      return history.push(`/users/user-${record.id}`);
                    },
                  };
                }}
              ></Table>
              {data.page === 1 && (
                <div className="pagination-list-users">
                  <div className="page-list-users">{data.page}</div>
                  <div
                    className="up-list-users"
                    onClick={() => {
                      setPage((data.page += 1));
                      history.push(`/users?page=${data.page}`);
                    }}
                  >
                    +
                  </div>
                </div>
              )}
              {data.page === data.total_pages && (
                <div className="pagination-list-users">
                  <div
                    className="down-list-users"
                    onClick={() => {
                      setPage((data.page -= 1));
                      if (data.page === 1) {
                        history.push(`/users`);
                      } else {
                        history.push(`/users?page=${data.page}`);
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="page-list-users">{data.page}</div>
                </div>
              )}
            </>
          )}
        </>
      )}

      {!userTokenLocalStorage && <Redirect to="/login" />}
    </div>
  );
};
