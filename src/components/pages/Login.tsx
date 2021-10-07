import React, { useState } from "react";
import { Iform } from "../../intefaces";

export const Login: React.FC = () => {
  const [form, setForm] = useState<Iform>({ email: "", password: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <>
      <h1>Страница авторизации</h1>
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
    </>
  );
};
