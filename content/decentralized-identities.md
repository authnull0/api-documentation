---
title: Decentralized Identities
---

# Decentralized Identities

Decentralized identities (DIDs) are a type of digital identity that is not controlled by any central authority or organization. Instead, DIDs are created and managed by the individual user, giving them greater control and ownership over their personal data and online presence.

DIDs are typically based on blockchain technology, which provides a secure and transparent way to store and manage identity information. Each DID is assigned a unique identifier, which can be used to authenticate and verify the identity of the user in a variety of contexts, such as logging into websites, accessing financial services, or participating in online communities.

One of the key benefits of DIDs is that they allow individuals to maintain their privacy and control over their personal data. Instead of relying on centralized databases or third-party identity providers, DIDs are stored locally on the user's device and can be selectively shared with others as needed.

DIDs are also designed to be interoperable, meaning that they can be used across different platforms and applications. This enables users to maintain a consistent identity across different services, without having to create and manage multiple accounts or identities.

## Create DID for Issuer

Verifiable credentials are a form of digital identity that allows individuals and organizations to securely and selectively share information about themselves. By creating an Issuer DID, an entity can establish a trusted identity on a decentralized network.

```shell
curl --location --request POST 'https://api.did.kloudlearn.com/api/v1/did/createIssuerDid' \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1,
  "method": "key",
  "name": "Broadcom R&D",
  "description": "R&D department of Broadcom"
}'
```

```http
POST https://api.did.kloudlearn.com/api/v1/did/createIssuerDid
```

```json
{
  "domainId": 1,
  "method": "key",
  "name": "Broadcom R&D",
  "description": "R&D department of Broadcom"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST https://api.did.kloudlearn.com/api/v1/did/createIssuerDid`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| method | The specific DID method used to create the DID (e.g. `key`, `brcm`). |
| domainId | The company or organization using the service. |
| name | The name of the issuer. |
| description | Additional information about the issuer. |

### HTTP Response

```json
{
  "id": "did:key:z6MkkHNepDyi2FYcNAwAHaujXaPFZG8dAzUFPJvneySxmXAK",
  "code": 200,
  "message": "Successfully created DID",
  "status": "Success"
}
```

<aside class="success">Successfully created DID.</aside>

## Create DID for Holder

A Holder DID is a Decentralized Identifier (DID) used by a user to store and control their own verifiable credentials.

```shell
curl --location --request POST 'https://api.did.kloudlearn.com/api/v1/did/createHolderDid' \
--header 'Content-Type: application/json' \
--data '{
  "method": "brcm",
  "domainId": 1,
  "walletUserId": 104,
  "issuerId": 126,
  "name":"Hema",
  "description":"This is a backend Test"
}'
```

```http
POST /api/v1/did/createHolderDid HTTP/1.1
```

```json
{
  "method": "brcm",
  "domainId": 1,
  "walletUserId": 104,
  "issuerId": 126,
  "name":"Hema",
  "description":"This is a backend Test"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/did/createHolderDid HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| method | The specific DID method to use for creating the DID. |
| domainId | The company or organization the user is part of. |
| walletUserId | The unique ID of the user. |
| issuerId | The ID of the issuer associated with this holder. |
| name | A user-friendly name or label for the credentials. |
| description | Additional context about the identity. |

### HTTP Response

```json
{
  "id": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "code": 200,
  "message": "Successfully created DID",
  "status": "Success"
}
```

<aside class="success">Successfully created DID.</aside>

## DID List

The DID List API enables users to access and retrieve a list of available Decentralized Identifiers registered on a decentralized network.

```shell
curl --location --request POST 'https://api.did.kloudlearn.com/api/v1/did/DIDList' \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1,
  "issuerId": 2,
  "userId": 104
}'
```

```http
POST /api/v1/did/DIDList HTTP/1.1
```

```json
{
  "domainId": 1,
  "issuerId": 2,
  "userId": 104
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/did/DIDList HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The company or organization using the service. |
| issuerId | The issuer DID used to identify the decentralized identity issuer. |
| userId | The unique identifier associated with a user. |

### HTTP Response

```json
[
    {
        "DIDType": "Issuer",
        "domainId": 1,
        "did": "did:brcm:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "issuerName": "Broadcom",
        "credentialIssued": 1,
        "desc": "This a issuer DID",
        "lastYpdatedAt": "02-12-2023 12:12:12"
    }
]
```

<aside class="success">Successfully Listed DID.</aside>

## Search DID

The Search DID API is used in decentralized identities to search for and retrieve information about a specific DID on a given network or ledger.

```shell
curl --location --request POST 'https://api.did.kloudlearn.com/api/v1/did/SearchDID' \
--header 'Content-Type: application/json' \
--data '{
  "name":"hema",
  "didType":"ISSUER",
  "pageNumber":1,
  "pageSize":10
}'
```

```http
POST https://api.did.kloudlearn.com/api/v1/did/SearchDID HTTP/1.1
```

```json
{
  "name":"hema",
  "didType":"ISSUER",
  "pageNumber":1,
  "pageSize":10
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST https://api.did.kloudlearn.com/api/v1/did/SearchDID HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| name | A user-friendly name to search for. |
| didType | The type of DID to search for (e.g. `ISSUER`, `USER`). |
| pageNumber | The page number of results to retrieve. |
| pageSize | The number of search results to return per page. |

### HTTP Response

```json
{
  "count": 1,
  "didList": [
    {
      "didType": "Issuer",
      "domainId": 1,
      "did": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "issuerName": "hema",
      "credentialIssued": 1,
      "desc": "test",
      "lastUpdatedAt": "02-12-2023 12:12:12"
    }
  ]
}
```

<aside class="success">DID found successfully.</aside>

## Delete DID

The Delete DID API is used to delete a decentralized identifier (DID) and its associated data from the underlying decentralized ledger.

```shell
curl --location --request DELETE 'https://api.did.kloudlearn.com/api/v1/did/deleteDid' \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1,
  "dids": [
    { "type": "Issuer", "did": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
    { "type": "User", "did": "did:brcm:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }
  ]
}'
```

```http
DELETE https://api.did.kloudlearn.com/api/v1/did/deleteDid HTTP/1.1
```

```json
{
  "domainId": 1,
  "dids": [
    { "type": "Issuer", "did": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }
  ]
}
```

### Access Token
Authorization Key Required

### HTTP Request
`DELETE https://api.did.kloudlearn.com/api/v1/did/deleteDid HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The company or organization the user is part of. |
| dids | Array of DID objects to delete. |
| type | The type of DID (`Issuer` or `User`). |

### HTTP Response

```json
{
  "code": 200,
  "message": "2 DIDs deleted successfully",
  "status": "Success"
}
```

<aside class="success">DIDs deleted successfully.</aside>

## Create Schema

The Create Schema API enables issuers to create verifiable credential schemas that define the structure and rules for different types of credentials.

```shell
curl --location --request POST 'https://api.did.kloudlearn.com/api/v1/schema/createSchema' \
--header 'Content-Type: application/json' \
--data '{
  "author": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "name": "EPM User",
  "schema": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "EPM User Schema",
    "type": "object",
    "properties": {
      "userId": { "type": "number" },
      "name": { "type": "string" }
    },
    "additionalProperties": false
  },
  "sign": false
}'
```

```http
POST /api/v1/schema/createSchema HTTP/1.1
```

```json
{
  "author": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "name": "EPM User",
  "schema": {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "EPM User Schema",
    "type": "object",
    "properties": {
      "userId": { "type": "number" },
      "name": { "type": "string" }
    },
    "additionalProperties": false
  },
  "sign": false
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/schema/createSchema HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| author | The entity who created the decentralized identity credentials. |
| name | A user-friendly name for the schema. |
| schema | The JSON schema defining the data structure of the credential. |
| sign | Whether to sign the schema. |

### HTTP Response

```json
{
    "id": "d97534d3-260c-4341-b578-e033dcf3bb99",
    "Schema": {
        "type": "https://w3c-ccg.github.io/vc-json-schemas/schema/2.0/schema.json",
        "version": "1.0",
        "id": "d97534d3-260c-4341-b578-e033dcf3bb99",
        "name": "EPM User",
        "author": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "authored": "2023-02-28T15:34:42Z"
    }
}
```

<aside class="success">Schema created successfully.</aside>

## Credential Schema List

The Credential Schema List API retrieves a list of available verifiable credential schemas.

```shell
curl --location --request POST 'https://api.did.kloudlearn.com/api/v1/credential' \
--header 'Content-Type: application/json' \
--data '{
   "domainId": 1,
   "issuerDid": "did:brcm:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}'
```

```http
POST /api/v1/credential/credentialSchemaList HTTP/1.1
```

```json
{
   "domainId": 1,
   "issuerDid": "did:brcm:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/credential/credentialSchemaList HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The company or organization the user is part of. |
| issuerDid | The issuer DID used to identify the decentralized identity issuer. |

### HTTP Response

```json
[
    { "id": 1, "name": "SSH" }
]
```

<aside class="success">Credential Schema Listed.</aside>

## Create Verifiable Credential

Verifiable Credentials (VCs) are digital credentials that contain information about a person or entity. This API creates a VC associated with a DID for secure and decentralized verification.

```shell
curl --location --request POST 'https://api.authnull.kloudlearn.com/api/v1/issueVerifiableCredential' \
--header 'Content-Type: application/json' \
--data '{
    "domainId": 1,
    "issuerDid": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "holderDid": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "schemaId": 1,
    "credentialName": "EPM User",
    "metadata":{
        "epmUsername": "john",
        "epmPassword": "xxx",
        "holderDID": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "holderId": 1
    },
    "expiry": "2024-01-01T00:00:00Z"
}'
```

```http
POST /api/v1/credential/createCredential HTTP/1.1
```

```json
{
    "domainId": 1,
    "issuerDid": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "holderDid": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "schemaId": 1,
    "credentialName": "EPM User",
    "metadata":{
        "epmUsername": "john",
        "epmPassword": "xxx",
        "holderDID": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
        "holderId": 1
    },
    "expiry": "2024-01-01T00:00:00Z"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/credential/createCredential HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The company or organization issuing the VC. |
| issuerDid | The issuer DID — identifies the decentralized identity issuer. |
| holderDid | The holder DID — identifies the holder of the credentials. |
| schemaId | The schema used to create the verifiable credential. |
| metadata | The set of properties or claims for the credential. |
| expiry | The expiration date of the credential. |

### HTTP Response

```json
{
    "code": 200,
    "message": "Credential Assigned successfully",
    "status": "SUCCESS"
}
```

<aside class="success">Credential Assigned successfully.</aside>

## Assign Credential to Wallet

The Assign Credential to Wallet API enables users to securely store and manage their verifiable credentials in a decentralized wallet.

```shell
curl --location 'https://api.did.kloudlearn.com/api/v1/walletService/assignWalletUser' \
--header 'Content-Type: application/json' \
--data '{
  "walletId":[1,3],
  "userId": [104,105],
  "credentialId": [10]
}'
```

```http
POST /api/v1/walletService/assignWalletUser HTTP/1.1
```

```json
{
  "walletId":[1,3],
  "userId": [104,105],
  "credentialId": [10]
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/walletService/assignWalletUser HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| walletId | The unique identifier of the digital wallet. |
| userId | The unique identifier associated with a user. |
| credentialId | The unique identifier associated with a verifiable credential. |

### HTTP Response

```json
{
    "code": 200,
    "message": "Successfully Assigned Wallet",
    "status": "Success"
}
```

<aside class="success">Wallet assigned successfully.</aside>

## Poll Presentation Request

The Poll Presentation Request API enables a user to acknowledge or verify a digital credential issued by another party.

```shell
curl --location --request POST 'https://api.did.kloudlearn.com/api/v1/walletService/pollPresentationRequest' \
--header 'Content-Type: application/json' \
--data '{
  "walletId": 1,
  "walletKey": "xxxxxx",
  "holderDid": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}'
```

```http
POST api/v1/walletService/pollPresentationRequest HTTP/1.1
```

```json
{
  "walletId": 1,
  "walletKey": "xxxxx",
  "holderDid": "did:key:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST https://api.authnull.kloudlearn.com/api/v1/walletService/pollPresentationRequest HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| walletId | The unique identifier of a digital wallet holding the user's decentralized identities. |
| walletKey | A private key used to sign and authenticate DID transactions. |
| holderDid | The holder DID — identifies the holder of the credentials. |

### HTTP Response

<aside class="success">Presentation Request raised successfully.</aside>
