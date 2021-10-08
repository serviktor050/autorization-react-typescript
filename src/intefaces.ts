import { Dispatch } from "react";

export interface IForm {
  email: string;
  password: string;
}

export interface ILoginContext {
  userToken: string | null;
  addLogin: (token: string) => void;
  dispatch:
    | Dispatch<{
        type: string;
        payload: string;
      }>
    | VoidFunction;
}
