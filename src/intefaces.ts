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

export interface IUseQuery {
  userToken: string;
  addLogin: (token: string) => void;
  removeLogin: () => void;
}

export interface IQueryKey {
  queryKey: string | unknown[];
}

export interface IUpdateData {
  id: number;
  avatar: string;
  email: string;
  first_name: string;
  last_name: string;
  key: string;
}

export interface ITodo {
  title: string;
  id: number;
  completed: boolean;
}

export interface IWeatherContext {
  city: string;
  addCity: (city: string) => void;
  dispatch:
    | Dispatch<{
        type: string;
        payload: string;
      }>
    | VoidFunction;
}
