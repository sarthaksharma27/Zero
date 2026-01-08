import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const DAILY_LIMIT = parseInt(process.env.AI_DAILY_LIMIT || "100");

/**
 * Checks if the AI usage has exceeded the daily limit.
 * Resets automatically every 24 hours via Redis TTL.
 */
export async function checkAIUsageLimit(userId: string): Promise<boolean> {
  const key = `usage:ai:${userId}:${new Date().toISOString().split('T')[0]}`;
  
  const currentUsage = await redis.incr(key);
  
  // If this is the first request of the day, set expiration to 24 hours
  if (currentUsage === 1) {
    await redis.expire(key, 86400);
  }

  if (currentUsage > DAILY_LIMIT) {
    console.warn(`[AI] Usage limit exceeded for user ${userId}`);
    return false; // Limit reached
  }

  return true; // Safe to proceed
}

/**
 * Returns current usage stats for the UI
 */
export async function getUsageStats(userId: string) {
  const key = `usage:ai:${userId}:${new Date().toISOString().split('T')[0]}`;
  const count = await redis.get<number>(key) || 0;
  return { count, limit: DAILY_LIMIT, remaining: Math.max(0, DAILY_LIMIT - count) };
}
