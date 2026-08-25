---
title: Error handling
description: Errors arrive as a JSON body with a non-2xx status. Read the status to decide whether to retry, and the message to decide what to fix.
---

Errors arrive as a JSON body with a non-2xx status. Read the status to decide whether to retry, and the message to decide what to fix.

## Error shape

```json
{
  "error": "invalid domainId",
  "code": 400
}
```

:::warning[Verify this shape.]
The error envelope above reflects common platform behaviour but has not been confirmed against a live response. Send one real error payload per status and this page becomes authoritative.
:::

## What to do by status

| Code | Meaning | When it happens |
|---|---|---|
| `400` | Bad request | A required body field is missing or has the wrong type. Fix the payload; retrying will not help. |
| `401` | Unauthorized | X-Authorization is missing, malformed or expired. Obtain a fresh token. |
| `403` | Forbidden | The token is valid but not scoped to the orgId, tenantId or domainId you sent. |
| `404` | Not found | The path is wrong, or the record referenced in the body does not exist in this tenant. |
| `409` | Conflict | The resource already exists, such as adding a domain that is already onboarded. |
| `500` | Server error | An unexpected platform failure. Safe to retry once with backoff, then contact support. |

## Retries

Retry only 5xx responses, and use exponential backoff. Retrying a 4xx repeats the same failure. Write endpoints are not documented as idempotent, so avoid blind retries on create calls.
