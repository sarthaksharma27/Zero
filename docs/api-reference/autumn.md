# Subscriptions API

## Overview
The `/subscriptions` endpoint retrieves a list of subscriptions for a customer, optionally filtered by status.

## Endpoint

### Request
**Method**: GET  
**URL**: `/subscriptions`

#### Headers
- `Authorization`: Bearer token required for authentication.

#### Parameters
<ParamField name="status" type="string" required={false}>Optional filter to retrieve subscriptions by their status.</ParamField>

### Response
- **200 OK**

  ```json
  [
    {
      "id": "sub_123",
      "status": "active",
      "customer_id": "cus_456",
      "items": [
        {
          "id": "item_789",
          "plan": "basic",
          "quantity": 1
        }
      ]
    }
  ]
  ```

- **401 Unauthorized**

  ```json
  {
    "error": "unauthorized",
    "message": "No customer ID found"
  }
  ```

<Note>Authentication is required to access this endpoint.</Note>

## Usage Example

```bash
curl -X GET https://api.example.com/subscriptions \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d "status=active"
```