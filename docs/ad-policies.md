---
title: Policies
description: Authentication policies decide who may sign in, from where, and with what factor. The policy service also discovers existing Active Directory policies and previews the impact of a change before you commit it.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Authentication policies decide who may sign in, from where, and with what factor. The policy service also discovers existing Active Directory policies and previews the impact of a change before you commit it.

## Policy lifecycle

| Screen | Method | Endpoint |
|---|---|---|
| List policies | `POST` | `/api/v1/policyService/ListPolicy` |
| Create policy | `POST` | `/api/v1/policyService/CreateJSONPolicy` |
| Update policy | `POST` | `/api/v1/policyService/UpdateJSONPolicy` |
| Approve policy | `POST` | `/api/v1/policyService/approvePolicyJSON` |
| Revoke policy | `POST` | `/api/v1/policyService/revokePolicyJSON` |
| Delete policy | `POST` | `/api/v1/policyService/deletePolicyJSON` |
| Execute policy action | `POST` | `/api/v1/policyService/PolicyAction` |

## Discovery and impact

| Screen | Method | Endpoint |
|---|---|---|
| Discover AD policies | `POST` | `/api/v1/policyService/DiscoverADPolicies` |
| Apply discovered policies | `POST` | `/api/v1/policyService/ApplyDiscoveredPolicies` |
| Preview policy impact | `POST` | `/api/v1/policy/json/previewImpact` |
| Get effective policy | `POST` | `/api/v1/policy/json/getEffectivePolicy` |

## Policy targets

These endpoints populate the pickers used when building a policy: the groups, users, organizational units and source IP ranges a rule can be scoped to.

| Screen | Method | Endpoint |
|---|---|---|
| List AD groups for policy | `POST` | `/api/v1/policy/listADGroups` |
| List AD users for policy | `POST` | `/api/v1/policy/listADUsers` |
| List organizational units | `POST` | `/api/v1/policyService/listOU` |
| Get policy users | `POST` | `/api/v1/policyService/GetUsers` |
| List source IPs | `POST` | `/api/v1/policyService/listSourceIP` |
| Update enrolled groups | `POST` | `/policy/UpdateEnrolledGroups` |

## List policies

<span className="api-method api-method--post">POST</span> `/api/v1/policyService/ListPolicy` — *Policies → All policies*

Returns the tenant's authentication policies with their approval state. A policy does not take effect until it has been approved.

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
curl -X POST 'https://api.authnull.com/api/v1/policyService/ListPolicy' \
  -H 'Content-Type: application/json' \
  -H "X-Authorization: $AUTHNULL_TOKEN" \
  -d '{ "orgId": 105, "tenantId": 1, "pageId": 1, "pageSize": 10 }'
```

</TabItem>
<TabItem value="node" label="JavaScript">

```js
const res = await fetch("https://api.authnull.com/api/v1/policyService/ListPolicy", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": process.env.AUTHNULL_TOKEN,
  },
  body: JSON.stringify({ orgId: 105, tenantId: 1, pageId: 1, pageSize: 10 }),
});

const { policies } = await res.json();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import os, requests

res = requests.post(
    "https://api.authnull.com/api/v1/policyService/ListPolicy",
    headers={
        "Content-Type": "application/json",
        "X-Authorization": os.environ["AUTHNULL_TOKEN"],
    },
    json={"orgId": 105, "tenantId": 1, "pageId": 1, "pageSize": 10},
)

print(res.json()["policies"])
```

</TabItem>
</Tabs>

**Responses**

<span className="api-status api-status--2xx">200 OK</span>

```json
{
  "policies": [
    {
      "policyId": 42,
      "policyName": "Contractor MFA",
      "status": "approved",
      "appliesTo": "group:Contractors"
    }
  ],
  "totalCount": 1
}
```

**Errors**

| Code | Message | Cause |
|---|---|---|
| `403` | scope mismatch | Token is not scoped to the orgId sent in the body. |

## Approval flow

Create and update write a draft. Approve activates it, revoke deactivates it without deleting, and delete removes it permanently. Call previewImpact before approving to see which users a rule would newly allow or block.

:::warning[Payloads needed.]
The policy JSON schema is the largest gap in this reference. CreateJSONPolicy and UpdateJSONPolicy accept a policy document whose structure is not documented — send one complete example and this section can specify the whole lifecycle.
:::
