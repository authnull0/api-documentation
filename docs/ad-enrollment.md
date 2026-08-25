---
title: Enrollment
description: Move users from a password to a passwordless credential — invite them, register a TOTP authenticator or a passkey, and track completion.
---

Move users from a password to a passwordless credential: invite them, register a TOTP authenticator or a passkey, and track completion.

## Invitations

| Screen | Method | Endpoint |
|---|---|---|
| Enrollment summary | `POST` | Enrollment summary endpoint |
| Enrollment status | `POST` | Enrollment status endpoint |
| Send enrollment email | `POST` | `/ad/SendEnrollmentEmail` |
| Admin invite | `POST` | Admin invitation endpoint |
| Self-enrollment | `POST` | Self-enrollment endpoint |

## Factor registration

| Screen | Method | Endpoint |
|---|---|---|
| MFA status | `POST` | MFA status endpoint |
| Begin TOTP setup | `POST` | TOTP setup begin endpoint |
| Confirm TOTP setup | `POST` | TOTP setup confirmation endpoint |
| Begin passkey registration | `POST` | WebAuthn registration begin endpoint |
| Finish passkey registration | `POST` | WebAuthn registration finish endpoint |

## The begin and finish pattern

TOTP and passkey registration are both two-step. The begin call returns a challenge — a TOTP secret, or a WebAuthn credential creation request. The finish call submits the user's proof and completes registration. State is held between the two calls, so they must be made in order and within the challenge's lifetime.

## Passkeys

Passkey registration follows WebAuthn. The begin response is passed to navigator.credentials.create() in the browser, and the resulting attestation is posted back to the finish endpoint.

:::danger[Blocked.]
Nine of the eleven endpoints on this page have no path — the source lists a description where the URL should be. Enrollment cannot be published until the real paths, request bodies and challenge lifetimes are supplied.
:::
