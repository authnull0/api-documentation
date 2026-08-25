---
title: Request format
description: The normative rules every Authnull request follows.
---

The normative rules every Authnull request follows.

## Rules

1. Use POST for almost everything, including reads. A small number of update endpoints use PUT.
2. Send parameters in a JSON body. Query strings are not read.
3. Include orgId and tenantId in the body of every call.
4. Include domainId on AD Mode and Radius Mode calls.
5. Set Content-Type: application/json and X-Authorization on every request.

## Canonical request

```shell
curl -X POST 'https://api.authnull.com/<path>' \
  -H 'Content-Type: application/json' \
  -H "X-Authorization: $AUTHNULL_TOKEN" \
  -d '{
    "orgId": 105,
    "tenantId": 1,
    "domainId": 1,
    "pageId": 1,
    "pageSize": 10
  }'
```

## Naming

Field naming is not consistent across services. AD and policy endpoints use camelCase (domainId, pageSize), while Radius device responses use snake_case (ip_address, nas_port_type), and MachineType is capitalized. Match the casing shown on each endpoint page rather than assuming a convention.
