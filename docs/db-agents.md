---
title: Database agents
description: Agents installed on database hosts perform discovery and broker connections. These endpoints list and remove them.
---

Agents installed on database hosts perform discovery and broker connections. These endpoints list and remove them.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List database agents | `POST` | `/api/v1/databaseService/getDatabaseAgentHost` |
| Delete database agent | `POST` | `/api/v1/databaseService/deleteAgentHost` |
| List databases by agent host | `POST` | `/api/v1/databaseService/listDatabase` |

## Deleting an agent

Removing an agent host stops discovery for every database behind it and breaks any brokered connection that routes through it. List the databases on the host first.
