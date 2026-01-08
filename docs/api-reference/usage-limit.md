import { Callout } from 'nextra/components'

# Usage Limit Library

This module provides functions to manage and check AI usage limits for users. It uses Redis for tracking usage and automatically resets limits every 24 hours.

## Overview

The `usage-limit.ts` module is responsible for managing daily usage limits for AI services. It uses Redis to store and track usage counts, ensuring that each user does not exceed their daily limit. The limits reset every 24 hours using Redis's TTL (Time to Live) feature.

### Dependencies

- **Redis**: This module relies on Redis for storing usage data. It uses the `@upstash/redis` package to interact with Redis.

## Functions

### `checkAIUsageLimit`

```typescript
export async function checkAIUsageLimit(userId: string): Promise<boolean>
```

Checks if a user's AI usage has exceeded the daily limit.

- **Parameters**:
  - `userId` (string): The unique identifier for the user.

- **Returns**: `Promise<boolean>` - Returns `true` if the user is within the limit, `false` if the limit has been exceeded.

- **Usage**:
  This function increments the usage count for the user and checks if the daily limit has been reached. If it's the first request of the day, it sets the expiration to 24 hours.

### `getUsageStats`

```typescript
export async function getUsageStats(userId: string)
```

Returns the current usage statistics for a user.

- **Parameters**:
  - `userId` (string): The unique identifier for the user.

- **Returns**: An object containing:
  - `count`: The current usage count.
  - `limit`: The daily usage limit.
  - `remaining`: The remaining usage available for the day.

## Configuration

The module requires the following environment variables:

<Callout>
  Ensure these environment variables are set in your environment to enable proper functioning of the usage limit library.
</Callout>

- `UPSTASH_REDIS_REST_URL`: The URL for the Upstash Redis REST API.
- `UPSTASH_REDIS_REST_TOKEN`: The authentication token for accessing the Upstash Redis REST API.
- `AI_DAILY_LIMIT`: The daily usage limit for AI services. Defaults to `100` if not specified.

```typescript
const DAILY_LIMIT = parseInt(process.env.AI_DAILY_LIMIT || "100");
```

## Example

```typescript
import { checkAIUsageLimit, getUsageStats } from './usage-limit';

// Check if a user can proceed with an AI request
const canProceed = await checkAIUsageLimit('user123');
if (!canProceed) {
  console.warn('Usage limit exceeded');
}

// Get usage stats for a user
const stats = await getUsageStats('user123');
console.log(`Used: ${stats.count}, Remaining: ${stats.remaining}`);
```