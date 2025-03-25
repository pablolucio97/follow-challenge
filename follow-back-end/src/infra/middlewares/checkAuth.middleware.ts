import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../../auth/auth";

export const checkAuth =  (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.error("Token missing", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = verifyToken(token) as { userId: string };
    req.userId = decodedToken.userId;
    next();
  } catch (error: any) {
    return res.error("Invalid or expired token.", 401);
  }
};
