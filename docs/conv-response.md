---
title: Response format
description: Successful responses return a named collection or object, not a generic envelope.
---

Successful responses return a named collection or object, not a generic envelope.

## List responses

A list endpoint returns its records under a key named for the resource, and usually a totalCount for pagination.

```json
{
  "domains": [ { "domainId": 1, "domainName": "corp.example.com" } ],
  "totalCount": 1
}
```

## Collection keys

The key varies by service: domains, policies, databases, network_devices. There is no shared data or results wrapper, so client code must know the key per endpoint.

## Empty results

An empty result is a 200 with an empty array, not a 404. Reserve 404 handling for wrong paths.

```json
{
  "network_devices": [],
  "totalCount": 0
}
```
