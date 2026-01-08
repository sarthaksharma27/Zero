# Usage Limit Library

<div className="flex gap-2"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-mono text-gray-600">apps/server/src/lib/usage-limit.ts</span></div>

## Overview

This module provides functionality to track and limit AI usage on a per-user basis. It uses Redis to store and manage usage data, ensuring that each user's usage is reset every 24 hours. The library defines two main functions: `checkAIUsageLimit` and `getUsageStats`.

## Function Signatures

### `checkAIUsageLimit`

```typescript
export async function checkAIUsageLimit(userId: string): Promise<boolean>
```

- **Purpose**: Checks if the AI usage for a given user has exceeded the daily limit.
- **Returns**: A boolean indicating whether the user can proceed with AI usage (`true`) or if the limit has been reached (`false`).

### `getUsageStats`

```typescript
export async function getUsageStats(userId: string): Promise<{ count: number; limit: number; remaining: number; }>
```

- **Purpose**: Retrieves the current usage statistics for a user.
- **Returns**: An object containing the current usage count, the daily limit, and the remaining usage available.

## Usage Example

```typescript
import { checkAIUsageLimit, getUsageStats } from './usage-limit';

async function handleRequest(userId: string) {
  const canProceed = await checkAIUsageLimit(userId);
  if (!canProceed) {
    console.warn(`[AI] Usage limit exceeded for user ${userId}`);
    return;
  }

  const stats = await getUsageStats(userId);
  console.log(`Current usage: ${stats.count}, Remaining: ${stats.remaining}`);
}
```

## Configuration

The module requires the following environment variables to be set:

| Variable                  | Description                                    | Required |
|---------------------------|------------------------------------------------|----------|
| `UPSTASH_REDIS_REST_URL`  | The URL for the Upstash Redis REST API.        | Yes      |
| `UPSTASH_REDIS_REST_TOKEN`| The token for authenticating with Upstash Redis| Yes      |
| `AI_DAILY_LIMIT`          | The maximum number of allowed requests per day | No (Defaults to 100) |

<Callout type="info">
Redis is used as a dependency for managing usage data. Ensure that your Redis instance is properly configured and accessible.
</Callout>