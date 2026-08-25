---
title: Tenant and organization scope
description: Every Authnull request is scoped to an organization and a tenant. These two identifiers appear in the body of almost every call.
---

Every Authnull request is scoped to an organization and a tenant. These two identifiers appear in the body of almost every call.

Send both identifiers in the JSON body, not as headers or query parameters.

```json
{
  "orgId": 105,
  "tenantId": 1
}
```

## Fields

| Field | Type | Description |
|---|---|---|
| `orgId` **(required)** | integer | Organization the request acts within. Returned to you at onboarding. |
| `tenantId` **(required)** | integer | Tenant inside the organization. Most single-tenant deployments use 1. |

## Domain scope

AD Mode and Radius Mode calls narrow further with domainId, which identifies a specific Active Directory or Entra domain inside the tenant. Retrieve the available values from /ad/GetAllDomains before hard-coding one.

| Field | Type | Description |
|---|---|---|
| `domainId` | integer | Directory domain the call applies to. Required by most AD and Radius endpoints. |

## Mismatched scope

If the token, orgId and tenantId do not agree, the request is rejected rather than silently returning an empty result. Check the scope triple first when a list call returns 403.
