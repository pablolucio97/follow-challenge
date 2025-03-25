import { Request, Response } from "express";
export class CheckServerHealthController {
  handle(_: Request, response: Response): Response {
    const isServerHealth = process.uptime();
    if (isServerHealth) {
      return response.success("Server connected.", 200);
    } else {
      const message = "Server not connected.";
      return response.error(message, 400);
    }
  }
}
