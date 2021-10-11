import { Dispatch } from "react";

export interface IForm {
  email: string;
  password: string;
}

export interface ILoginContext {
  userToken: string;
  addLogin: (token: string) => void;
  removeLogin: () => void;
  dispatch:
    | Dispatch<{
        type: string;
        payload: string;
      }>
    | VoidFunction;
}
