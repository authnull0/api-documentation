---
title: Authentication logs
description: Read sign-in activity and the sources responsible for failed attempts.
---

Read sign-in activity and the sources responsible for failed attempts.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| Authentication logs | `POST` | `/ad/GetAuthLog` |
| User authentication logs | `POST` | `/ad/GetUserAuthLog` |
| Authentication bad sources | `POST` | `/ad/GetAuthBadSources` |
| Lockout events | `POST` | `/ad/GetLockoutEvents` |
| Lockout bad sources | `POST` | `/ad/GetLockoutBadSources` |

## Choosing an endpoint

GetAuthLog returns activity across the domain; GetUserAuthLog narrows to a single user. The two bad-sources endpoints aggregate by originating host rather than listing individual events, which is what you want when investigating a spike.

## Time ranges

Log endpoints accept a time window in the request body. The parameter names and accepted format have not been supplied.

:::warning[Payloads needed.]
Date range parameters, page limits and the event record shape are undocumented for all five log endpoints.
:::
