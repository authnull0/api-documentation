<p align="center">
  <img src="static/img/authnull-logo.png" alt="AuthNull" width="220">
</p>

<p align="center"><strong>API documentation for the AuthNull passwordless access platform.</strong></p>

# AuthNull API Documentation

## About this site

This repository is a [Docusaurus](https://docusaurus.io/) documentation site for AuthNull's backend APIs. AuthNull is a single platform (one monolithic API surface, one host, one auth scheme) whose endpoints are organized into three operating modes — **AD Mode**, **Database Mode**, and **Radius Mode**. Every mode shares the same `X-Authorization` bearer token and the same `orgId`/`tenantId` scoping model; they differ only in the routes and resources each one exposes.

This README explains how the site is organized and how to run and maintain it. **It is an index, not the reference itself** — the authoritative endpoint details (parameters, examples, responses, errors) live in the pages under [`docs/`](docs/).

## Table of contents

- [About this site](#about-this-site)
- [API groups and base paths](#api-groups-and-base-paths)
- [Documentation map](#documentation-map)
- [Project structure](#project-structure)
- [Setup and local development](#setup-and-local-development)
- [Maintaining the docs](#maintaining-the-docs)
- [Contributing](#contributing)

## API groups and base paths

| API group | Base path(s) | Description |
|---|---|---|
| **AD Mode** | `/ad`, `/users`, `/groups`, `/walletService`, `/credential`, `/api/v1/policyService`, `/api/v1/policy`, `/policy` | Active Directory and Entra domains, users, groups, authentication policies, sign-in logs, passwordless enrollment |
| **Database Mode** | `/api/v1/databaseService`, `/connections`, `/api/v1/secretservice` | Database host/user/table discovery and brokered privileged connections |
| **Radius Mode** | `/network_device` | Radius network device registration and management (NPS, ISE, ClearPass) |
| **Conventions** (cross-cutting) | n/a | Shared request/response shape, auth, scoping, pagination, and error handling used by all three groups above |

Notes on the surface as documented today:

- **Host:** `https://api.authnull.com` (production), `https://dev.api.authnull.com` (development) — placeholders pending confirmation ([docs/intro.md](docs/intro.md)).
- **Verbs:** almost every endpoint is `POST`, including reads and searches; a small number of update endpoints use `PUT`.
- **Versioning:** a `/api/v1/...` prefix appears on some route groups (policy, database, secret) but not others (`/ad`, `/users`, `/network_device`) — the platform has not standardized this yet.
- **Health checks:** no health/status endpoint is documented for any group.

## Documentation map

Each API group above is broken into one page per resource area under `docs/`.

### Getting started (applies to all modes)

| Docs file | Covers |
|---|---|
| [docs/intro.md](docs/intro.md) | Platform overview, the three modes, base URLs, security notes |
| [docs/auth.md](docs/auth.md) | The `X-Authorization` header and token handling |
| [docs/scope.md](docs/scope.md) | `orgId` / `tenantId` / `domainId` scoping |
| [docs/headers.md](docs/headers.md) | Required and optional request headers |
| [docs/errors.md](docs/errors.md) | Error envelope and status code meanings |
| [docs/pagination.md](docs/pagination.md) | Shared pagination/filtering contract for list endpoints |

### AD Mode

| Docs file | Resource area |
|---|---|
| [docs/ad-domains.md](docs/ad-domains.md) | Domains — onboarding, enforcement mode, MFA provider |
| [docs/ad-users.md](docs/ad-users.md) | Directory vs. platform users, onboarding, credential wallets |
| [docs/ad-groups.md](docs/ad-groups.md) | Group management |
| [docs/ad-policies.md](docs/ad-policies.md) | Authentication policies — create, approve, revoke, preview, discover |
| [docs/ad-logs.md](docs/ad-logs.md) | Authentication and lockout event logs |
| [docs/ad-enrollment.md](docs/ad-enrollment.md) | Passwordless enrollment email flow |
| [docs/ad-lockout.md](docs/ad-lockout.md) | Account lockout events and sources |

### Database Mode

| Docs file | Resource area |
|---|---|
| [docs/db-databases.md](docs/db-databases.md) | Discovered database instances and hosts |
| [docs/db-users.md](docs/db-users.md) | Database-level users |
| [docs/db-tables.md](docs/db-tables.md) | Table and field discovery |
| [docs/db-agents.md](docs/db-agents.md) | Database agent hosts |
| [docs/db-connections.md](docs/db-connections.md) | Brokered privileged database connections |

### Radius Mode

| Docs file | Resource area |
|---|---|
| [docs/rad-onboarding.md](docs/rad-onboarding.md) | Agent install and vendor server configuration (install workflow, not a create-device call) |
| [docs/rad-devices.md](docs/rad-devices.md) | Registered Radius device management |
| [docs/rad-vendors.md](docs/rad-vendors.md) | Supported Radius vendor servers (NPS, ISE, ClearPass) |

### API conventions

| Docs file | Covers |
|---|---|
| [docs/conv-request.md](docs/conv-request.md) | Request shape |
| [docs/conv-response.md](docs/conv-response.md) | Response shape |
| [docs/conv-status.md](docs/conv-status.md) | Status code conventions |
| [docs/conv-trouble.md](docs/conv-trouble.md) | Troubleshooting common failures |

## Project structure

```
api-documentation/
├── docs/                    # All API reference and guide content (Markdown/MDX) — see Documentation map above
├── src/
│   ├── components/          # Shared React components (e.g. QuickLinks) used in docs pages
│   ├── css/                 # Global and custom Docusaurus theme styles
│   ├── pages/               # Standalone routed pages (e.g. index.tsx for "/")
│   └── theme/                # Swizzled theme components (custom Footer)
├── static/                  # Static assets served as-is (images, fonts, favicon)
├── docusaurus.config.ts     # Site config: title, navbar, theme, plugins
├── sidebars.ts              # Docs sidebar structure (Getting started / AD / Database / Radius / Conventions)
└── package.json             # Scripts and dependencies (Docusaurus 3, npm)
```

## Setup and local development

Built with **Docusaurus 3**, managed with **npm**.

| Task | Command |
|---|---|
| Install dependencies | `npm install` |
| Run the dev server (live reload) | `npm start` |
| Build the static site | `npm run build` |
| Serve the built site locally | `npm run serve` |

## Maintaining the docs

1. Add or edit a Markdown/MDX file under `docs/`, following the existing frontmatter pattern (`title`, `description`).
2. Register new pages in [`sidebars.ts`](sidebars.ts) under the relevant category (`Getting started`, `AD Mode`, `Database Mode`, `Radius Mode`, `API conventions`), and add a row to the [Documentation map](#documentation-map) above.
3. Follow the structure already used across reference pages: an **Endpoints** summary table, one `##` section per endpoint with method/path/description, a **Body parameters** table, tabbed cURL/JavaScript/Python examples, and a **Responses** section with status-coded examples.
4. If a request or response payload is unknown, say so explicitly with a `:::warning` admonition rather than inventing a schema — several pages currently do this pending real payloads from the platform team.
5. Run `npm start` and confirm the page renders and internal links resolve — `onBrokenLinks` is set to `throw`, so `npm run build` fails on any broken link.

## Contributing

- Keep endpoint documentation in sync with the actual API. This reference is explicitly mid-migration; several pages are flagged with `:::warning` where payloads are unconfirmed — update or remove those once verified against the live API.
- See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community guidelines.
- Open a pull request against `main`; run `npm run build` locally to confirm the site builds cleanly before submitting.
