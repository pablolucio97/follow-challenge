import "dotenv/config";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (userId: string) => {
  if (JWT_SECRET) {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1d" });
  }
};

export const verifyToken = (token: string) => {
  if (JWT_SECRET) {
    return jwt.verify(token, JWT_SECRET);
  }
};
