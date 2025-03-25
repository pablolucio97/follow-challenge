import { NextFunction, Request, Response } from "express";

interface ISuccessResponse {
  STATUS: number;
  MESSAGE: string;
  SUCCESS: boolean;
  DATA: any;
}

interface IErrorResponse {
  STATUS: number;
  MESSAGE: string;
  SUCCESS: boolean;
}

export const responseMiddleware = (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  res.success = (data: any, status: number) => {
    const response: ISuccessResponse = {
      STATUS: status,
      MESSAGE: "Success",
      SUCCESS: true,
      DATA: data,
    };
    return res.status(status).json(response);
  };
  res.error = (message: string, status: number) => {
    const response: IErrorResponse = {
      STATUS: status,
      MESSAGE: message,
      SUCCESS: false,
    };
    return res.status(status).json(response);
  };
  next();
};
