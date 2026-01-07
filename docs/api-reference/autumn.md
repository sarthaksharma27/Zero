# Subscriptions API

## Overview
The `/subscriptions` endpoint retrieves a list of subscriptions for a customer, with an optional filter by status.

## Endpoint

### Request
**Method**: GET  
**URL**: `/subscriptions`

#### Parameters
<ParamField name="customer_id" type="string" required={true}>The unique identifier for the customer.</ParamField>
<ParamField name="status" type="string" required={false}>Optional filter to retrieve subscriptions by their status.</ParamField>

### Response
- **200 OK**

  ```json
  [
    {
      "id": "sub_123",
      "status": "active",
      "customer_id": "cus_456",
      "created_at": "2023-10-01T12:00:00Z"
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

## Usage Example

```bash
curl -X GET "https://api.example.com/subscriptions?status=active" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"