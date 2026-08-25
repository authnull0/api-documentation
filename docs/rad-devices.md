---
title: List and delete devices
description: Two endpoints cover the Radius device inventory.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Two endpoints cover the Radius device inventory.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List Radius devices | `POST` | `/network_device/ListDevices` |
| Delete Radius device | `POST` | `/network_device/DeleteDevice` |

## List Radius devices

<span className="api-method api-method--post">POST</span> `/network_device/ListDevices` — *Radius → Devices*

Returns network devices registered against the domain. Filter by device type to separate Microsoft NPS, Cisco ISE and ClearPass devices.

**Body parameters**

| Field | Type | Description |
|---|---|---|
| `domainId` **(required)** | integer | Directory domain the devices belong to. |
| `orgId` **(required)** | integer | Organization the request acts within. Returned to you at onboarding. |
| `tenantId` **(required)** | integer | Tenant inside the organization. Most single-tenant deployments use 1. |
| `pageId` | integer | 1-based page number. Defaults to 1. |
| `pageSize` | integer | Records per page. Defaults to 10, maximum 100. |
| `search` | string | Free-text search across device name and IP address. |
| `filter.filterBy` | string | Column to filter on, for example DEVICE_NAME. |
| `filter.value` | string | Value to match, for example Microsoft NPS. |
| `MachineType` | string | Device class. Use radius for Radius Mode. |

**Example request**

<Tabs groupId="api-lang">
<TabItem value="curl" label="cURL">

```bash
curl -X POST 'https://api.authnull.com/network_device/ListDevices' \
  -H 'Content-Type: application/json' \
  -H "X-Authorization: $AUTHNULL_TOKEN" \
  -d '{
    "domainId": 1,
    "pageId": 1,
    "pageSize": 10,
    "search": "",
    "filter": { "filterBy": "DEVICE_NAME", "value": "Microsoft NPS" },
    "MachineType": "radius",
    "tenantId": 1,
    "orgId": 105
  }'
```

</TabItem>
<TabItem value="node" label="JavaScript">

```js
const res = await fetch("https://api.authnull.com/network_device/ListDevices", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Authorization": process.env.AUTHNULL_TOKEN,
  },
  body: JSON.stringify({
    domainId: 1,
    pageId: 1,
    pageSize: 10,
    search: "",
    filter: { filterBy: "DEVICE_NAME", value: "Microsoft NPS" },
    MachineType: "radius",
    tenantId: 1,
    orgId: 105,
  }),
});

const { network_devices } = await res.json();
```

</TabItem>
<TabItem value="python" label="Python">

```python
import os, requests

res = requests.post(
    "https://api.authnull.com/network_device/ListDevices",
    headers={
        "Content-Type": "application/json",
        "X-Authorization": os.environ["AUTHNULL_TOKEN"],
    },
    json={
        "domainId": 1,
        "pageId": 1,
        "pageSize": 10,
        "search": "",
        "filter": {"filterBy": "DEVICE_NAME", "value": "Microsoft NPS"},
        "MachineType": "radius",
        "tenantId": 1,
        "orgId": 105,
    },
)

print(res.json()["network_devices"])
```

</TabItem>
</Tabs>

**Responses**

<span className="api-status api-status--2xx">200 OK</span>

```json
{
  "network_devices": [
    {
      "ip_address": "10.0.0.10",
      "client_ip": "10.0.0.20",
      "device_type": "Microsoft NPS",
      "nas_port_type": "Wireless"
    }
  ]
}
```

<span className="api-status api-status--4xx">403 Forbidden</span>

```json
{
  "error": "domain 1 not in tenant 1",
  "code": 403
}
```

**Errors**

| Code | Message | Cause |
|---|---|---|
| `400` | invalid filterBy | filterBy names a column that does not exist on network devices. |
| `403` | domain not in tenant | domainId belongs to a different tenant than the token. |

## Response fields

| Field | Type | Description |
|---|---|---|
| `ip_address` | string | Address of the Radius server itself. |
| `client_ip` | string | Address of the client that authenticated through it. |
| `device_type` | string | Vendor product, such as Microsoft NPS. |
| `nas_port_type` | string | Access medium reported by the NAS, such as Wireless or Ethernet. |

## Delete a device

DeleteDevice removes a device from the inventory. It does not uninstall the agent or reconfigure the vendor server, so a device that is still forwarding requests will re-register.

:::warning[Payload needed.]
The DeleteDevice request body was not supplied — most likely a device identifier alongside the usual scope fields.
:::
