---
sidebar_label: Introduction
title: Authnull API documentation
description: A complete guide to integrating with Authnull's passwordless access platform across Active Directory, database and Radius environments.
---

import QuickLinks from '@site/src/components/QuickLinks';
import {Key, Compass, Shield, Globe} from 'lucide-react';

A complete guide to integrating with Authnull's passwordless access platform across Active Directory, database and Radius environments.

## Quick navigation

New to Authnull? Start with authentication, then pick the mode your integration targets.

<QuickLinks
  items={[
    {icon: Key, title: 'Authentication', desc: 'Get a token and send it correctly on every call.', to: '/docs/auth'},
    {icon: Compass, title: 'API conventions', desc: 'Request shape, response shape and status codes.', to: '/docs/conv-request'},
    {icon: Shield, title: 'AD Mode', desc: 'Domains, users, groups, policies and enrollment.', to: '/docs/ad-domains'},
    {icon: Globe, title: 'Radius Mode', desc: 'Network devices behind NPS, ISE and ClearPass.', to: '/docs/rad-onboarding'},
  ]}
/>

## Core functionality

| Section | What it covers |
|---|---|
| [Tenant and organization scope](/docs/scope) | The orgId and tenantId pair that scopes every request. |
| [Pagination and filtering](/docs/pagination) | The shared contract behind every list endpoint. |
| [AD Mode — Policies](/docs/ad-policies) | Create, approve and preview authentication policies. |
| [Database Mode — Connections](/docs/db-connections) | Broker privileged sessions to discovered databases. |
| [Error handling](/docs/errors) | What each status means and when to retry. |

## How the documentation is organized

Getting started → Authentication → Choose a mode → Endpoint reference → Conventions

## Three operating modes

Authnull organizes its surface into three modes. Each owns a distinct family of endpoints, and most integrations use exactly one.

1. AD Mode manages Active Directory and Entra domains, users, groups, authentication policies, sign-in logs and passwordless enrollment.
2. Database Mode discovers database hosts, users, tables and fields, and brokers privileged connections through Authnull agents.
3. Radius Mode registers network devices that authenticate through Microsoft NPS, Cisco ISE or Aruba ClearPass.

## Key concepts

Multi-tenancy. Data is isolated by organization and tenant. Every request carries an orgId and a tenantId, and the token you send must be scoped to the same pair.

Directory users versus platform users. A user discovered in Active Directory is not yet an Authnull user. Onboarding promotes a directory identity into the platform, where it gains a credential wallet and falls under policy.

Policies are approved, not just saved. Creating or updating a policy writes a draft. It has no effect on sign-ins until it is approved.

## Everything is a POST

Authnull does not use REST verbs to express intent. Reads, writes and deletes are almost all POST requests carrying their parameters in a JSON body, including list and search calls. A small number of update endpoints use PUT.

You cannot cache or bookmark a read by URL, and query strings are never used for filtering. Send filters in the body.

## Base URLs

Endpoint paths throughout this reference are written exactly as they appear after the host.

```text
Production   https://api.authnull.com
Development  https://dev.api.authnull.com
```

:::warning[Confirm before publishing.]
Both hosts above are placeholders pending confirmation. The endpoint paths are accurate; the hostnames are not yet verified.
:::

## Security

:::info[Always use HTTPS.]
Plain HTTP requests are rejected.
:::

:::danger[Protect the token.]
Never place the X-Authorization value in client-side code, local storage or a URL. Keep it in a secret manager and rotate it if exposed.
:::

1. Validate input before calling Authnull rather than relying on 400 responses to catch errors.
2. Scope tokens to the smallest organization and tenant that the integration needs.
3. Retry only 5xx responses, with exponential backoff.
4. Treat wallet invalidation and policy deletion as destructive; both force users back through enrollment or leave sign-ins unprotected.

## I want to…

| I want to… | Go to |
|---|---|
| Make my first authenticated call | [Authentication](/docs/auth) |
| List the domains in my tenant | [AD Mode — Domains](/docs/ad-domains) |
| Understand why I get 403 with a valid token | [Troubleshooting](/docs/conv-trouble) |
| Paginate or filter a list endpoint | [Pagination and filtering](/docs/pagination) |
| Register a Radius device | [Radius onboarding](/docs/rad-onboarding) |
| Broker a database connection | [Database — Connections](/docs/db-connections) |

## What each endpoint page contains

Method and path, a description, the body parameters, a runnable example in cURL, JavaScript and Python, response examples per status, the errors you can expect, and the console screen the endpoint backs.

:::warning[This reference is mid-migration.]
Endpoints whose request or response payloads have not yet been supplied are indexed with a note saying so, rather than documented with invented schemas.
:::
