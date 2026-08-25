---
title: Database users
description: Read the accounts that exist inside discovered databases and the privileges they hold.
---

Read the accounts that exist inside discovered databases and the privileges they hold.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List database users | `POST` | `/api/v1/databaseService/listUser` |
| List unique usernames | `POST` | `/api/v1/databaseService/getUniqueUsernames` |
| User privileges | `POST` | Database user privileges endpoint |

## Scope of a database user

These are accounts inside the database engine, not Authnull platform users. A database user is discovered by an agent and linked to a platform identity only when a connection is brokered.

:::warning[Payload needed.]
The privileges endpoint has no path, and the privilege record shape is unspecified.
:::
