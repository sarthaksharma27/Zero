import { Callout, Note } from '@components';

# Subscriptions API

## Description

The `/subscriptions` route provides access to a list of subscriptions associated with a customer. This endpoint allows filtering by subscription status.

## Usage Example

To retrieve a list of subscriptions, make a GET request to the `/subscriptions` endpoint. Ensure that the request includes valid customer data.

### Request

**GET** `/subscriptions`

#### Query Parameters

- `status` (optional): Filter subscriptions by their status.

### Response

The response will return a JSON object containing the subscription data. If no customer ID is found, the response will include an error message with a 401 status code.

## Error Handling

If the request does not include valid customer data, the server will respond with:

```json
{
  "error": "unauthorized",
  "message": "No customer ID found"
}
```

<Note>
Ensure that your request includes valid customer credentials to avoid unauthorized errors.
</Note>

## Properties

- **customer_id**: The unique identifier for the customer whose subscriptions are being queried.
- **status**: The current status of the subscription, used for filtering results.

<Callout>
This feature enhances the API by allowing subscription filtering, improving data retrieval efficiency.
</Callout>