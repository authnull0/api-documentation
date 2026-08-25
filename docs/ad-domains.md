---
title: Domains
description: Onboard and manage the Active Directory and Entra domains Authnull protects, including per-domain enforcement mode and MFA provider.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Onboard and manage the Active Directory and Entra domains Authnull protects, including per-domain enforcement mode and MFA provider.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List AD domains | `POST` | `/ad/GetAllDomains` |
| Add AD domain | `POST` | `/ad/AddDomain` |
| List domain groups | `POST` | `/ad/GetAllGroupsByDomain` |
| List users in group | `POST` | `/ad/GetAllUsersByGroup` |
| List all AD users | `POST` | `/ad/GetAllAdUsers` |
| List Entra users | `POST` | `/ad/GetEntraUsers` |
| Update domain enforcement mode | `POST` | `/ad/updateDomainEnforcement` |
| Get domain MFA provider | `POST` | `/ad/GetMFAProvider` |
| Set domain MFA provider | `POST` | `/ad/SetMFAProvider` |
| Delete domain MFA provider | `POST` | `/ad/DeleteMFAProvider` |

## List AD domains

<span className="api-method api-method--post">POST</span> `/ad/GetAllDomains` — *Identity Provider → Domains*

Returns every domain onboarded to the tenant. Call this first: the domainId it returns is required by most other AD and Radius endpoints.

**Body parameters**

| Field | Type | Description |
|---|---|---|
| `orgId` **(required)** | integer | Organization the request acts within. Returned to you at onboarding. |
| `tenantId` **(required)** | integer | Tenant inside the organization. Most single-tenant deployments use 1. |
| `pageId` | integer | 1-based page number. Defaults to 1. |
| `pageSize` | integer | Records per page. Defaults to 10, maximum 100. |

**Example request**

<Tabs groupId="api-lang">
<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.authnull.com/ad/GetAllDomains' \
  -H 'Content-Type: application/json' \
  -H "X-Authorization: $AUTHNULL_TOKEN" \
  -d '{ "orgId": 105, "tenantId": 1, "pageId": 1, "pageSize": 10 }'
```

</TabItem>
<TabItem value="node" label="JavaScript">

```js
const res = await fetch("https://api.authnull.com/ad/GetAllDomains", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": process.env.AUTHNULL_TOKEN,
  },
  body: JSON.stringify({ orgId: 105, tenantId: 1, pageId: 1, pageSize: 10 }),
});

const { domains, totalCount } = await res.json();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import os, requests

res = requests.post(
    "https://api.authnull.com/ad/GetAllDomains",
    headers={
        "Content-Type": "application/json",
        "X-Authorization": os.environ["AUTHNULL_TOKEN"],
    },
    json={"orgId": 105, "tenantId": 1, "pageId": 1, "pageSize": 10},
)

print(res.json()["domains"])
```

</TabItem>
</Tabs>

**Responses**

<span className="api-status api-status--2xx">200 OK</span>

```json
{
  "domains": [
    {
      "domainId": 1,
      "domainName": "corp.example.com",
      "enforcementMode": "monitor",
      "status": "active"
    }
  ],
  "totalCount": 1
}
```

<span className="api-status api-status--4xx">403 Forbidden</span>

```json
{
  "error": "token not scoped to organization 105",
  "code": 403
}
```

**Errors**

| Code | Message | Cause |
|---|---|---|
| `401` | missing token | X-Authorization header absent or empty. |
| `403` | scope mismatch | orgId or tenantId does not match the token's scope. |

## Enforcement and MFA

updateDomainEnforcement switches a domain between monitoring and enforcing. SetMFAProvider and DeleteMFAProvider attach or remove the MFA provider used for that domain's sign-ins.

Request and response payloads for these four endpoints have not been supplied and are not documented yet.

:::warning[Payloads needed.]
AddDomain, updateDomainEnforcement, GetMFAProvider, SetMFAProvider and DeleteMFAProvider are indexed above but not yet specified. Send one example request and response for each to complete this page.
:::
