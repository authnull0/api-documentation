---
title: Tables and fields
description: Inspect the schema of a discovered database, down to individual columns.
---

Inspect the schema of a discovered database, down to individual columns.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List table names | `POST` | `/api/v1/databaseService/getTableNames` |
| Get table fields | `POST` | `/api/v1/databaseService/getTableFields` |

## Order of calls

Call getTableNames for a database, then getTableFields for a chosen table. Field-level data drives the column masking and data classification screens.

:::warning[Payloads needed.]
Both endpoints need a database and table identifier in the body, but the parameter names were not supplied.
:::
