---
title: Connections
description: Brokered sessions from a platform identity to a database account, and the terminal that runs on top of them.
---

Brokered sessions from a platform identity to a database account, and the terminal that runs on top of them.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List connections | `POST` | `/connections/listConnections` |
| Create connection | `POST` | `/connections/createConnections` |
| Get connection mode | `POST` | `/api/v1/secretservice/getConnectionMode` |
| Initialize database terminal | `POST` | Database terminal initialization endpoint |

## Connection mode

getConnectionMode lives in the secret service rather than the database service. It reports how credentials are supplied for a connection — injected from the vault, or entered by the user — which determines what createConnections must send.

## Terminal

The in-browser terminal is initialized against an existing connection. The initialization endpoint has not been supplied.

:::warning[Payloads needed.]
createConnections is the most consequential write endpoint in Database Mode and has no documented body. The terminal initialization endpoint has no path.
:::
