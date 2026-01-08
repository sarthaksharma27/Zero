# AI Usage Limit Check

## Overview
This feature checks if a user's AI usage has exceeded the daily limit. It utilizes Redis to track usage and resets automatically every 24 hours.

## Endpoint

### Request
- **Method**: POST
- **URL**: `/api/usage-limit/check`
- **Headers**: 
  - `Content-Type: application/json`
  - `Authorization: Bearer <token>`

#### Parameters
<ParamField name="userId" type="string" required={true}>The unique identifier for the user whose usage is being checked.</ParamField>

### Response
- **Status Code**: 200 OK
- **JSON Example**:
  ```json
  {
    "count": 45,
    "limit": 100,
    "remaining": 55
  }
  ```

## Usage Example

```bash
curl -X POST https://api.example.com/api/usage-limit/check \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{"userId": "user_12345"}'
```

<Note>This endpoint requires authentication. Ensure your token is valid and has the necessary permissions.</Note>

<Callout>Use this endpoint to monitor and manage AI usage effectively, preventing overuse and ensuring fair resource distribution.</Callout>