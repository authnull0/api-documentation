---
title: Common headers
description: Two headers cover nearly every call. Nothing else is required.
---

Two headers cover nearly every call. Nothing else is required.

```http
X-Authorization: <token>
Content-Type: application/json
```

## Reference

| Field | Type | Description |
|---|---|---|
| `X-Authorization` **(required)** | string | Bearer token identifying the caller. Sent on every request. |
| `Content-Type` **(required)** | string | Always application/json. Authnull does not accept form-encoded bodies. |
| `Accept` | string | Optional. Responses are application/json regardless. |

## Not supported

The standard Authorization header, API keys in query strings, and basic authentication are not accepted.
