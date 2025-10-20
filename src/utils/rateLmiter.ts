import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
  points: 3, // Number of allowed requests
  duration: 120, // Per 60 seconds
  blockDuration: 300, // Block for 2 minutes if limit exceeded
});

export default rateLimiter;
