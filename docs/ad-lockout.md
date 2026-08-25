---
title: Lockout management
description: Investigate account lockouts and the sources causing them.
---

Investigate account lockouts and the sources causing them.

## Available today

Two read endpoints cover lockouts. Both are documented under authentication logs because they return event data rather than perform an action.

| Screen | Method | Endpoint |
|---|---|---|
| Lockout events | `POST` | `/ad/GetLockoutEvents` |
| Lockout bad sources | `POST` | `/ad/GetLockoutBadSources` |

## Not yet supplied

The console exposes lockout actions — unlocking an account, and configuring the lockout threshold and duration. No endpoints for these were provided.

:::danger[Missing.]
Unlock-account and lockout-policy-configuration endpoints are referenced in the information architecture but absent from the endpoint list. Send them and this page becomes complete.
:::
