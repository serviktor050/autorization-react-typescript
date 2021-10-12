import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useMutation } from "react-query";

import { IForm } from "../../../intefaces";
import { ADD_LOGIN, useLoginContext } from "../Login/contextLogin/LoginContext";

const fetchLogin = async (form: IForm) => {
  const response = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(form),
  });

  let resultOfFetching = await response.json();
  if (resultOfFetching !== "") {
    localStorage.setItem("token", JSON.stringify(resultOfFetching.token));
  }
  return resultOfFetching;
};

export const Login: React.FC = () => {
  const [form, setForm] = useState<IForm>({ email: "", password: "" });
  const mutation = useMutation(fetchLogin);

  const { dispatch } = useLoginContext();

  useEffect(() => {
    if (mutation.data) {
      dispatch({ type: ADD_LOGIN, payload: mutation.data.token });
    }
  }, [dispatch, mutation.isSuccess, mutation.data]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutation.mutate(form);
  };

  return (
    <div className="page-container">
      {mutation.isSuccess === true && <Redirect to="/" />}
      <h1>Authorization</h1>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input
                className="validate"
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email"
              />
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  className="validate"
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  );
};
