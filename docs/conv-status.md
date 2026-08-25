---
title: HTTP status codes
description: The status codes Authnull returns and what each means for your client.
---

The status codes Authnull returns and what each means for your client.

| Code | Meaning | When it happens |
|---|---|---|
| `200` | OK | Request succeeded. A read may still return an empty collection. |
| `201` | Created | A resource was created. Returned by some write endpoints. |
| `400` | Bad request | Malformed JSON, missing required field, or a filterBy column that does not exist. |
| `401` | Unauthorized | X-Authorization missing, malformed or expired. |
| `403` | Forbidden | Valid token, wrong scope: orgId, tenantId or domainId outside the token's reach. |
| `404` | Not found | Unknown path, or a referenced record that does not exist in this tenant. |
| `409` | Conflict | Resource already exists — re-adding an onboarded domain, or a duplicate policy name. |
| `429` | Too many requests | Rate limit exceeded. Back off before retrying. |
| `500` | Server error | Platform failure. Retry once with backoff, then contact support. |

:::warning[Rate limits undocumented.]
429 is listed for completeness. No rate limit values were supplied — if limits exist, publish the threshold, window and any Retry-After header.
:::
