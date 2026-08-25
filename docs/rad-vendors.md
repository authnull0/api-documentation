---
title: NPS / Cisco ISE / ClearPass
description: Authnull sits behind your existing Radius server. Configuration happens on the vendor product, not through the Authnull API.
---

Authnull sits behind your existing Radius server. Configuration happens on the vendor product, not through the Authnull API.

## How it fits together

The Radius agent runs on or beside the Radius server. The vendor product forwards authentication requests to the agent, which evaluates them against Authnull policy and returns an accept or reject. Devices then appear in the Authnull inventory with their device_type set to the vendor product.

## Identifying vendor devices

Filter the device list by DEVICE_NAME to isolate one vendor.

```json
{
  "filter": {
    "filterBy": "DEVICE_NAME",
    "value": "Microsoft NPS"
  },
  "MachineType": "radius"
}
```

## Vendor configuration steps

The per-product configuration steps for Microsoft NPS, Cisco ISE and Aruba ClearPass have not been supplied.

:::danger[Missing.]
This page needs the actual configuration procedure for each of the three products: what to point at the agent, on which port, and with what shared secret.
:::
