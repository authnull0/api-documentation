---
title: Users
description: Read directory users, onboard them into privileged access management, and manage their credential wallets.
---

Read directory users, onboard them into privileged access management, and manage their credential wallets.

## Endpoints

| Screen | Method | Endpoint |
|---|---|---|
| List users | `POST` | `/ad/GetAllAdUsers` |
| List PAM users | `POST` | `/users/listAll` |
| Add user | `POST` | `/users/onboardUser` |
| Update user | `POST` | `/users/updateUser` |
| Get user details | `POST` | `/users/{userId}` |
| Invalidate user wallet | `POST` | `/walletService/InvalidateWallet` |
| Reset user wallet | `POST` | `/credential/resetWallet` |

## Two user surfaces

/ad/GetAllAdUsers reads the directory as Authnull discovered it. /users/listAll reads users onboarded into Authnull's privileged access layer. A directory user is not a PAM user until /users/onboardUser is called for them.

## Wallets

Each enrolled user holds a credential wallet. InvalidateWallet revokes the wallet's credentials without removing the user; resetWallet clears it so the user can re-enroll. Both are destructive and force the user through enrollment again.

:::warning[Payloads needed.]
No request or response bodies were supplied for the user endpoints. The path parameter form of `/users/{userId}` is also unusual for this API, which otherwise carries all parameters in the body — confirm whether it is a path or body parameter.
:::
