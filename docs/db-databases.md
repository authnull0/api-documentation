---
title: Databases
description: Discover the database instances Authnull agents have found, and the hosts they run on.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Discover the database instances Authnull agents have found, and the hosts they run on.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List databases | `POST` | `/api/v1/databaseService/listDatabase` |
| List unique database names | `POST` | `/api/v1/databaseService/getUniqueDatabasenames` |
| Delete database | `POST` | Database delete endpoint |
| List unique hosts | `POST` | `/api/v1/databaseService/listUniqueHosts` |

## List databases

<span className="api-method api-method--post">POST</span> `/api/v1/databaseService/listDatabase` — *Databases → All databases*

Returns the databases discovered in the tenant. The same endpoint is used to list databases attached to a specific agent host by adding the host to the filter.

**Body parameters**

| Field | Type | Description |
|---|---|---|
| `orgId` **(required)** | integer | Organization the request acts within. Returned to you at onboarding. |
| `tenantId` **(required)** | integer | Tenant inside the organization. Most single-tenant deployments use 1. |
| `pageId` | integer | 1-based page number. Defaults to 1. |
| `pageSize` | integer | Records per page. Defaults to 10, maximum 100. |
| `search` | string | Free-text match on database name or host. |
| `filter` | object | Column filter, for example `{ filterBy: "HOST", value: "10.0.0.10" }`. |

**Example request**

<Tabs groupId="api-lang">
<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.authnull.com/api/v1/databaseService/listDatabase' \
  -H 'Content-Type: application/json' \
  -H "X-Authorization: $AUTHNULL_TOKEN" \
  -d '{ "orgId": 105, "tenantId": 1, "pageId": 1, "pageSize": 10 }'
```

</TabItem>
<TabItem value="node" label="JavaScript">

```js
const res = await fetch("https://api.authnull.com/api/v1/databaseService/listDatabase", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": process.env.AUTHNULL_TOKEN,
  },
  body: JSON.stringify({ orgId: 105, tenantId: 1, pageId: 1, pageSize: 10 }),
});

const { databases } = await res.json();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import os, requests

res = requests.post(
    "https://api.authnull.com/api/v1/databaseService/listDatabase",
    headers={
        "Content-Type": "application/json",
        "X-Authorization": os.environ["AUTHNULL_TOKEN"],
    },
    json={"orgId": 105, "tenantId": 1, "pageId": 1, "pageSize": 10},
)

print(res.json()["databases"])
```

</TabItem>
</Tabs>

**Responses**

<span className="api-status api-status--2xx">200 OK</span>

```json
{
  "databases": [
    {
      "databaseId": 7,
      "databaseName": "payments",
      "host": "10.0.0.10",
      "engine": "postgres"
    }
  ],
  "totalCount": 1
}
```

## Unique-value endpoints

getUniqueDatabasenames and listUniqueHosts exist to populate filter dropdowns. They return distinct values rather than records, so they are cheap to call on page load.

:::warning[Payload needed.]
The database delete endpoint has no path in the source list.
:::
