import 'express';

declare module 'express' {
  interface Response {
    success: (data: any, status: number) => Response;
    error: (message: string, status: number) => Response;
  }
}