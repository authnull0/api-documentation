---
title: Endpoint User Management
---

# Endpoint User Management

The Endpoint User Management manages endpoint users creation, creates credentials based on credential type and assigns them to wallets. The users are also imported from the Authnull Agent running per instance, and are assigned to wallets. All the synchronization happens with the Authnull Agent for endpoint users.

## List User

The List User API allows users to retrieve a list of all the users in the system or application for endpoint user management.

```shell
curl --location 'http://localhost:9090/api/v1/endpointUsers/listAllEpmUsers' \
--header 'Content-Type: application/json' \
--data '{
    "domainId":1,
    "pageId": 1,
    "pageSize": 10,
    "filter": {
        "filterBy": "username",
        "value": "bijay"
    },
    "instanceIds": [1,2]
}'
```

```http
POST /api/v1/endpointUsers/listAllEpmUsers HTTP/1.1
```

```json
{
    "domainId":1,
    "pageId": 1,
    "pageSize": 10,
    "filter": {
        "filterBy": "username",
        "value": "bijay"
    },
    "instanceIds": [1,2]
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/endpointUsers/listAllEpmUsers HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| pageId | Page ID refers to the page number. |
| pageSize | Page size refers to the number of endpoints groups to be fetched. |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| instanceId | The instanceId is used to specify the ID of the instances that are part of the endpoint. |
| filter | filter is the search keyword for searching endpoint groups. |

### HTTP Response

```json
{
    "totalCount": 2,
    "epmUsers": [
        {
            "credType": "Password",
            "userId": 1785,
            "userName": "bijaySuperCredential",
            "source": "",
            "userType": "Local User",
            "instanceIds": [1],
            "assign": true,
            "credentialId": "124",
            "hostNames": ["kloudone01.vm"]
        }
    ]
}
```

<aside class="success">Successfully shown list of all endpoint users.</aside>

## Add Endpoint User Info

The Add Endpoint User Info API allows users to add endpoint-specific information to a user account.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/endpointUsers/addEpmUserInfo' \
--header 'Content-Type: application/json' \
--data '{
"domainId":1,
"userType":"Local",
"credType":"password",
"password":"",
"privilegedUser":"true",
"userName":"testManjuupdate",
"sshKey":"",
"motp":"",
"did":""
}'
```

```http
POST /api/v1/endpointUsers/addEpmUserInfo HTTP/1.1
```

```json
{
  "domainId":1,
  "userType":"Local",
  "credType":"password",
  "password":"",
  "privilegedUser":"true",
  "userName":"testManjuupdate",
  "sshKey":"",
  "motp":"",
  "did":""
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/endpointUsers/addEpmUserInfo HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| userType | Roles — whether the user is admin or user. |
| credType | The credType specifies the type of credential used for authentication. |
| password | The password refers to the authentication credential. |
| privilegedUser | The privilegedUser allows certain users to have elevated access and permissions. |
| userName | An identification used by a person with access to a computer, network, or online service. |
| sshKey | The sshKey allows for secure access to an endpoint using a cryptographic key. |
| motp | MOTP parameter used for Multi-One Time Password authentication. |
| did | The did specifies the unique decentralized identifier associated with a decentralized identity. |

### HTTP Response

```json
{
    "status": "Success",
    "message": "User Added successfully",
    "userId": "71"
}
```

<aside class="success">User Added successfully.</aside>

## Get Endpoint User Detail

The Get Endpoint User Detail API retrieves detailed information about a specific user.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/endpointUsers/epmUserDetail' \
--header 'Content-Type: application/json' \
--data '{
    "domainId":1,
    "userId":25
}'
```

```http
POST /api/v1/endpointUsers/getEpmUserDetail
```

```json
{
  "userId":26,
  "domainId":1
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/endpointUsers/getEpmUserDetail HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| userIds | The userId is used to specify the unique identifier of a user. |

### HTTP Response

```json
{
  "domainId":1,
  "userId":26,
  "userType":"Local",
  "credType":"password",
  "password":"xxxx",
  "privilegedUser":"true",
  "userName":"testManjuupdate",
  "sshKey":"",
  "motp":"",
  "did":""
}
```

<aside class="success">Epm User Detail Fetched.</aside>

## Update Endpoint User Info

The Update Endpoint User Info API updates a user's information.

```shell
curl --location --request PUT 'https://api.authnull.kloudlearn.com/api/v1/endpointUsers/updateEpmUserInfo' \
--header 'Content-Type: application/json' \
--data '{
  "userId":26,
  "domainId":1,
  "userType":"Local",
  "credType":"password",
  "password":"xxxx",
  "privilegedUser":"true",
  "userName":"testManjuupdate",
  "sshKey":"",
  "motp":"",
  "did":""
}'
```

```http
PUT /api/v1/endpointUsers/updateEpmUserInfo HTTP/1.1
```

```json
{
  "userId":26,
  "domainId":1,
  "userType":"Local",
  "credType":"password",
  "password":"xxxx",
  "privilegedUser":"true",
  "userName":"testManjuupdate",
  "sshKey":"",
  "motp":"",
  "did":""
}
```

### Access Token
Authorization Key Required

### HTTP Request
`PUT /api/v1/endpointUsers/updateEpmUserInfo HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| userId | The userId is used to specify the unique identifier of a user. |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| userType | Roles — whether the user is admin or user. |
| credType | The credType specifies the type of credential used for authentication. |
| password | The password refers to the authentication credential. |
| privilegedUser | The privilegedUser allows certain users to have elevated access. |
| userName | An identification used by a person with access. |
| sshKey | The sshKey allows for secure access using a cryptographic key. |
| motp | MOTP parameter for Multi-One Time Password authentication. |
| did | The did specifies the decentralized identifier. |

### HTTP Response

```json
{
    "status": "Success",
    "message": "User Updated successfully",
    "userId": "26"
}
```

<aside class="success">EPM User Info updated.</aside>

## Update User Wallet

The Update User Wallet API allows developers to programmatically update the wallet of a user on the platform.

```shell
curl --location --request PUT 'https://api.authnull.kloudlearn.com/api/v1/endpointUsers/updateUserWallet' \
--header 'Content-Type: application/json' \
--data '{
    "epmUserId":[402],
    "domainId":1,
    "authnullUserNames":[104,105],
    "groupId":[381,382],
    "instanceId":[15,16],
    "assignMultiple": "false",
    "userType":"local",
    "privilegedUser":"yes",
    "credentialId":[0],
    "credentialType":"password",
    "issuerId":1
}'
```

```http
PUT /api/v1/endpointUsers/updateUserWallet HTTP/1.1
```

```json
{
  "epmUserId":[402],
  "domainId":1,
  "authnullUserNames":[104,105],
  "groupId":[381,382],
  "instanceId":[15,16],
  "assignMultiple": "false",
  "userType":"local",
  "privilegedUser":"yes",
  "credentialId":[0],
  "credentialType":"password",
  "issuerId":1
}
```

### Access Token
Authorization Key Required

### HTTP Request
`PUT /api/v1/endpointUsers/updateUserWallet HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| epmUserId | The userId is used to specify the unique identifier of a user. |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| authnullUserNames | The authnullUserNames specifies the usernames of the users whose wallets need to be updated. |
| groupId | The groupId is used to specify the ID of the wallet group. |
| instanceId | The instanceId specifies the unique identifier of the user wallet instance to be updated. |
| privilegedUser | The privilegedUser allows certain users to have elevated access. |
| assignMultiple | The assignMultiple allows multiple wallet values to be updated simultaneously. |
| userType | The userType specifies the type of user. |
| credentialId | The credentialId is used to specify the unique identifier for the user's wallet credential. |
| credentialType | The credentialType specifies the type of credential being updated. |
| issuerId | The issuerId is used to specify the ID of the entity that issued the wallet. |

### HTTP Response

```json
{
    "status": "Success",
    "message": "Wallet Updated"
}
```

<aside class="success">Wallet updated.</aside>

## Delete Endpoint User

The Delete Endpoint User API deletes a user account from the system.

```shell
curl --location --request DELETE 'https://api.authnull.kloudlearn.com/api/v1/endpointUsers/deleteEpmUser' \
--header 'Content-Type: application/json' \
--data '{
    "domainId": 1,
    "key": "34rfdhuytqwrtttbcv",
    "epmUsers": [
        { "epmUserId": 514, "userName": "hema", "instanceId": 17 },
        { "epmUserId": 515, "userName": "hema", "instanceId": 17 }
    ]
}'
```

```http
DELETE api/v1/endpointUsers/deleteEpmUser HTTP/1.1
```

```json
{
    "domainId": 1,
    "key": "34rfdhuytqwrtttbcv",
    "epmUsers": [
        { "epmUserId": 514, "userName": "hema", "instanceId": 17 }
    ]
}
```

### Access Token
Authorization Key Required

### HTTP Request
`DELETE api/v1/endpointUsers/deleteEpmUser HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| epmUserId | The epmUserId is the unique user ID associated with a particular endpoint. |
| userName | An identification used by a person with access. |
| instanceId | The instanceId is used to specify the ID of the instances that are part of the endpoint. |

### HTTP Response

```json
{
    "status": "Success",
    "message": "User deleted successfully"
}
```

<aside class="success">Endpoint User deleted.</aside>

## Password Policy

A proper password complexity policy would be: eight characters for the length of a password and at least three types of the following characters used: uppercase letters, lowercase letters, digits, and special characters.

## Add Password Policy

The Add Password Policy API defines the password requirements for user accounts.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/instances/addPasswordPolicy' \
--header 'Content-Type: application/json' \
--data '{
    "policyName":"PolicynonMachineTest",
    "templateName":"Template1",
    "minLen":"5",
    "maxLen":"10",
    "firstChar":"",
    "allowUpperLower":"",
    "allowSpecial":"yes",
    "allowNumeric":"yes"
}'
```

```http
POST /api/v1/instances/addPasswordPolicy HTTP/1.1
```

```json
{
    "policyName":"PolicynonMachineTest",
    "templateName":"Template1",
    "minLen":"5",
    "maxLen":"10",
    "firstChar":"",
    "allowUpperLower":"",
    "allowSpecial":"yes",
    "allowNumeric":"yes"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instances/addPasswordPolicy HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| policyName | The policyName refers to the name of the policy to be applied. |
| templateName | The templateName refers to the password policy template name. |
| minLen | The minLen sets the minimum required length for a user's password. |
| maxLen | The maxLen sets the maximum required length for a user's password. |
| firstChar | The firstChar specifies whether the first character must be uppercase, lowercase, or a digit. |
| allowUpperLower | The allowUpperLower specifies whether the policy allows both uppercase and lowercase letters. |
| allowSpecial | The allowSpecial determines whether special characters are allowed. |
| allowNumeric | The allowNumeric specifies whether numeric characters are allowed. |

### HTTP Response

```json
{
    "code": 200,
    "message": "Successfully Added Password Policy"
}
```

<aside class="success">Successfully Added Password Policy.</aside>

## Delete Password Policy

The Delete Password Policy API removes an existing password policy.

```shell
curl --location --request DELETE 'https://api.authnull.kloudlearn.com/api/v1/instances/deletePasswordPolicy' \
--header 'Content-Type: application/json' \
--data '{ "policyId":1 }'
```

```http
DELETE /api/v1/instances/deletePasswordPolicy HTTP/1.1
```

```json
{ "policyId": 1 }
```

### Access Token
Authorization Key Required

### HTTP Request
`DELETE /api/v1/instances/deletePasswordPolicy HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| policyId | The policyId specifies the unique identifier of a password policy. |

### HTTP Response

<aside class="success">Successfully deleted Password Policy.</aside>

## List All Password Policy

The List All Password Policy API retrieves a list of all existing password policies.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/instances/listPasswordPolicy' \
--header 'Content-Type: application/json' \
--data '{
    "machineIds":[1,2,3],
    "pageId":1,
    "pageSize": 10
}'
```

```http
POST /api/v1/instances/listAllPasswordPolicy HTTP/1.1
```

```json
{
    "machineIds":[1,2,3],
    "pageId":1,
    "pageSize": 10
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instances/listAllPasswordPolicy HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| machineIds | The machineIds filters password policies based on machine IDs. |
| pageId | Page ID refers to the page number. |
| pageSize | Page size refers to the number of items to fetch. |

### HTTP Response

```json
{
    "totalPolicies": 17,
    "totalPages": 2,
    "passwordPolicies": [
        {
            "policyId": 2,
            "policyName": "PolicyManjuTest",
            "minLen": "5",
            "maxLen": "10",
            "firstChar": "",
            "allowUpperLower": "",
            "allowSpecial": "yes",
            "allowNumeric": "yes"
        }
    ]
}
```

<aside class="success">Successfully Listed All Password Policy.</aside>

## Assign Policy To Endpoints

The Assign Policy to Endpoints API assigns a password policy to a specific endpoint.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/instances/assignPolicyToMachine' \
--header 'Content-Type: application/json' \
--data '{
    "policyId":2,
    "instanceId":1
}'
```

```http
POST /api/v1/instances/assignPolicyToMachine HTTP/1.1
```

```json
{ "policyId": 2, "instanceId": 1 }
```

### HTTP Request
`POST /api/v1/instances/assignPolicyToMachine HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| policyId | The policyId specifies the unique identifier of a password policy. |
| instanceId | The instanceId is used to specify the ID of the instances that are part of the endpoint. |

### HTTP Response

```json
{
    "code": 200,
    "message": "Successfully Assigned Password Policy To Endpoint"
}
```

<aside class="success">Successfully Assigned Policy To endpoint.</aside>

## Update Password Policy

The Update Password Policy API updates an existing password policy.

```shell
curl --location --request PUT 'https://api.authnull.kloudlearn.com/api/v1/instances/updatePasswordPolicy' \
--header 'Content-Type: application/json' \
--data '{
    "policyId": 1,
    "policyName":"testPolicy",
    "minLen":"",
    "maxLen": "",
    "firstChar": "",
    "allowUpperLower":"",
    "allowSpecial":"",
    "allowNumeric":""
}'
```

```http
POST /api/v1/instances/updatePasswordPolicy HTTP/1.1
```

```json
{
    "policyId":2,
    "policyName":"PolicyManjuTest1",
    "minLen":"3",
    "maxLen":"5",
    "firstChar":"",
    "allowUpperLower":"",
    "allowSpecial":"",
    "allowNumeric":""
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instances/updatePasswordPolicy HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| policyName | The policyName refers to the name of the policy. |
| minLen | The minLen sets the minimum required length. |
| maxLen | The maxLen sets the maximum required length. |
| firstChar | The firstChar specifies the first character requirement. |
| allowUpperLower | Whether uppercase and lowercase letters are allowed. |
| allowSpecial | Whether special characters are allowed. |
| allowNumeric | Whether numeric characters are allowed. |

### HTTP Response

<aside class="success">Successfully updated Password Policy.</aside>

## Validate Password

The Validate Password API validates if a password meets the specified policy requirements.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/instances/validatePassword' \
--header 'Content-Type: application/json' \
--data '{
  "machineId":"",
  "password":""
}'
```

```http
POST /api/v1/instances/validatePolicy HTTP/1.1
```

```json
{
  "machineId": "",
  "password": ""
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instances/validatePolicy HTTP/1.1`

### HTTP Response

<aside class="success">Successfully Password Policy validated.</aside>
