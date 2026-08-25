---
title: Groups
description: Read and manage directory groups, and the users inside them.
---

Read and manage directory groups, and the users inside them.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List groups | `POST` | `/groups/listAll` |
| Add group | `POST` | `/groups/addGroup` |
| List group users | `POST` | `/users/listAll` |
| Update group | `PUT` | Dynamic group update URL |

## Listing users in a group

Group membership is read through /users/listAll with a group filter rather than a dedicated endpoint. /ad/GetAllUsersByGroup covers the same need on the directory side.

## Updating a group

Group update is the only PUT in the documented surface and the only endpoint whose URL is constructed at call time rather than fixed.

:::danger[Blocked.]
"Dynamic group update URL" cannot be published as-is. Supply the URL template — for example `/groups/{groupId}` — and the segments that vary, or integrators cannot call it.
:::
