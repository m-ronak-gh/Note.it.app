import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();

// Create a rate limiter instance
const ratelimiter = rateLimit({
        windowMs: 5 * 60 * 1000, // 5 minutes
        max: 50, // Limit each IP to 50 requests per 5 minutes
        // message: 'Too many requests from this IP, please try again after 5 minutes',
        standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export default ratelimiter;

// const ratelimiter = async (req,res,next) => {
//     try {
//         const {success} = await ratelimit.limit("my-limit-key"); //here, my-limit-key can be userid(if you have authentication system) or ip addresses too.
//         if(!success){
//             return res.status(429).json({
//                 message:"Too many requests, please try again later"
//             })
//         }
//         next()
//     } catch (error) {
//         console.error("Rate limit error : ",error)
//         next(error)
//     }
// }
