import { Request } from "express";
import rateLimit from "express-rate-limit";

export const userRateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 10,
    message:{
        STATUS: 429,
        MESSAGE: 'Too many requests, please try again later.',
        SUCCESS: false,
        DATA: null,
    },
    keyGenerator: (req : Request) => {
        return req.headers.authorization || "default-key";
    }
})