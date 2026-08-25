---
title: Authentication
description: Authnull authenticates API calls with a bearer token passed in a custom header. Tokens are scoped to an organization and tenant.
---

Authnull authenticates API calls with a bearer token passed in a custom header. Tokens are scoped to an organization and tenant.

## The X-Authorization header

Send your token in X-Authorization on every request. Authnull does not read the standard Authorization header.

```http
X-Authorization: <token>
Content-Type: application/json
```

## Obtaining a token

Token issuance is not yet documented here. Supply the login or token-exchange endpoint, its request body and the token lifetime, and this section will be completed.

:::danger[Missing.]
No token-minting endpoint has been provided. Until it is, integrators have no documented way to obtain the value this header expects.
:::

## Scope

A token is bound to an organization. The orgId and tenantId you send in the request body must match the token's scope, or the call fails with 403.

## Handling secrets

Treat the token as a password. Keep it in an environment variable or secret manager, never in client-side code or source control, and rotate it if it is exposed.

```shell
export AUTHNULL_TOKEN="..."
```
