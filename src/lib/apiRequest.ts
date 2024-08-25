import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { call } from "redux-saga/effects";

interface Response<T> {
  status: string;
  message: string;
  data?: T;
}

function* apiRequest<T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: T
): Generator<any, T, any> {
  const config: AxiosRequestConfig = {
    url,
    method,
    data: method === "GET" ? undefined : data,
  };

  const response: AxiosResponse<Response<T>> = yield call(
    axios.request,
    config
  );

  if (response.data.status === "SUCCESS") {
    return response.data.data as T;
  } else {
    throw new Error(response.data.message || "An unexpected error occurred");
  }
}

export { apiRequest };
