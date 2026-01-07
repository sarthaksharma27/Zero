# Subscriptions API

## Overview
The `/subscriptions` endpoint allows you to retrieve a list of subscriptions associated with a customer. This endpoint supports optional filtering by subscription status.

## Endpoint

### Request
- **Method**: GET
- **URL**: `/subscriptions`
- **Headers**: 
  - `Authorization: Bearer <token>`

#### Parameters
<ParamField name="status" type="string" required={false}>Optional filter to retrieve subscriptions by their status.</ParamField>

### Response
- **Status Code**: 200 OK
- **Content-Type**: application/json

```json
{
  "subscriptions": [
    {
      "id": "sub_123",
      "status": "active",
      "customer_id": "cus_456",
      "created_at": "2023-10-01T12:00:00Z"
    }
  ]
}
```

<Note>Authentication is required to access this endpoint. Ensure that a valid token is provided in the Authorization header.</Note>

## Usage Example

```bash
curl -X GET https://api.example.com/subscriptions \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```
```json
{
  "subscriptions": [
    {
      "id": "sub_123",
      "status": "active",
      "customer_id": "cus_456",
      "created_at": "2023-10-01T12:00:00Z"
    }
  ]
}
```