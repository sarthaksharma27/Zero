# AI Action Endpoint

## Overview
The `/do/:action` endpoint allows users to perform specific actions using AI tools, such as searching inbox messages or sending emails.

## Endpoint

### Request
- **Method**: POST
- **URL**: `/do/:action`
- **Headers**: 
  - `Content-Type: application/json`

#### Parameters
<ParamField name="action" type="string" required={true}>The action to be performed, such as 'inbox_rag' or 'send_email'.</ParamField>

- **Body Parameters**:
  - For `inbox_rag` action:
    <ParamField name="query" type="string" required={true}>The search query for inbox messages.</ParamField>
  - For `send_email` action:
    <ParamField name="to" type="string" required={true}>The recipient's email address.</ParamField>
    <ParamField name="body" type="string" required={true}>The content of the email to be sent.</ParamField>

<Note>Authentication is required to access this endpoint.</Note>

### Response
- **Status Code**: 200 OK

- **Response Body**:
  - For `inbox_rag` action:
    ```json
    {
      "messages": [
        {
          "id": "string",
          "subject": "string",
          "snippet": "string"
        }
      ]
    }
    ```
  - For `send_email` action:
    ```json
    {
      "success": true,
      "messageId": "string"
    }
    ```

## Usage Example

### cURL
```bash
curl -X POST https://api.example.com/do/inbox_rag \
  -H "Content-Type: application/json" \
  -d '{"query": "meeting notes"}'
```

### JavaScript
```javascript
fetch('https://api.example.com/do/send_email', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: 'recipient@example.com',
    body: 'Hello, this is a test email.'
  })
})
.then(response => response.json())
.then(data => console.log(data));
```