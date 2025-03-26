import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3333",
});

export interface IApiSuccessResponse<T> {
  RES: T;
  STATUS: number;
  SUCCESS: boolean;
}

export interface IApiErrorResponse {
  RES: null;
  MSG: string;
  SUCCESS: boolean;
  STATUS: number;
}

api.interceptors.response.use(
  (response: AxiosResponse<IApiSuccessResponse<unknown>>) => {
    console.log("[RESPONSE SUCCESS]", response.data);
    return response;
  },
  (error: AxiosError<IApiErrorResponse>) => {
    console.error("[RESPONSE ERROR]", error);
    return Promise.reject(error);
  }
);

api.interceptors.request.use((request) => {
  console.log(`[${request.method?.toUpperCase()} : ${request.url}]`);
  return request;
});
