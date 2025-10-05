import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();

// Create a rate limiter instance
const ratelimiter = rateLimit({
        windowMs: 5 * 60 * 1000, // 5 minutes
        max: 10, // Limit each IP to 10 requests per 5 minutes
        message: 'Too many requests from this IP, please try again after 5 minutes',
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export default ratelimiter;