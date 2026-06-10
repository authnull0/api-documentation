---
title: Endpoint Group Management
---

# Endpoint Group Management

The Endpoint Group Management module is a software component that enables the management of groups of endpoints within a system. This module provides a user interface for adding, modifying, and deleting endpoint groups, as well as associating endpoint users with these groups.

To add endpoint users to an endpoint group, select the desired group from the Endpoint Group Management module and navigate to the Endpoint Users section. From here, you can add or remove users as necessary.

Once endpoint users have been added to an endpoint group, you can generate an authentication flow for the group. This authentication flow determines how users in the group will be authenticated when accessing resources and applications within the system.

## List Endpoint Group

This lists all the Endpoint groups that are present. Endpoint groups refer to a collection of Linux endpoints.

```shell
curl --location --request POST https://api.authnull.kloudlearn.com/api/v1/instanceGroup/listEndpointGroup \
--header 'Content-Type: application/json' \
--data '{
  "domainId": "1",
  "filter": "",
  "pageId": 1,
  "pageSize": 100
}'
```

```http
POST /api/v1/instanceGroup/listEndpointGroup
```

```json
{
  "domainId": 1,
  "filter": "",
  "pageId": 1,
  "pageSize": 100
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instanceGroup/listEndpointGroup`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The domainId is used to specify the domain ID associated with the endpoint group. |
| pageId | Page ID refers to the page number. |
| pageSize | Page size refers to the number of endpoints groups to be fetched. |
| filter | filter is the search keyword for searching endpoint groups. |

### HTTP Response

```json
{
  "totalCount": 2,
  "groups": [
    { "groupId": 60, "groupName": "test 5", "usersCount": 38 },
    { "groupId": 62, "groupName": "test1", "usersCount": 38 }
  ]
}
```

<aside class="success">Endpoint listed.</aside>

## Add Endpoint Group

The Add Endpoint groups API allows users to add new Endpoint groups to a system or application.

```shell
curl --location --request POST https://api.authnull.kloudlearn.com/api/v1/instanceGroup/addInstanceGroup \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1,
  "instanceIds": [1, 3],
  "groupName": "ServerGroup",
  "ou": "",
  "cn": "",
  "dc": ""
}'
```

```http
POST /api/v1/instanceGroup/addInstanceGroup
```

```json
{
  "domainId": 1,
  "instanceIds": [1, 3],
  "groupName": "ServerGroup",
  "ou": "",
  "cn": "",
  "dc": ""
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instanceGroup/addInstanceGroup`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| instanceIds | The instanceIds is used to specify the IDs of the instances that are part of the endpoint group. |
| groupName | The groupName is used to specify the name of the endpoint group being created or modified. |
| ou | Organizational unit (optional). |
| cn | Common name (optional). |
| dc | Domain component (optional). |

### HTTP Response

```json
{
  "instanceId": 63,
  "Code": "200",
  "Message": "Successfully Updated Endpoint Group"
}
```

<aside class="success">Endpoint added.</aside>

## Delete Endpoint Group

The Delete Endpoint Group API allows users to delete an existing Endpoint group from a system or application.

```shell
curl --location --request DELETE https://api.authnull.kloudlearn.com/api/v1/instanceGroup/deleteEndpointGroup \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 2,
  "id": [555]
}'
```

```http
DELETE /api/v1/instanceGroup/deleteEndpointGroup
```

```json
{
  "domainId": 1,
  "id": 5
}
```

### Access Token
Authorization Key Required

### HTTP Request
`DELETE /api/v1/instanceGroup/deleteEndpointGroup`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| id | The id is used to specify the ID of the endpoint group to delete. |

### HTTP Response

```json
{
  "status": "Success",
  "message": "Group Deleted successfully"
}
```

<aside class="success">Endpoint deleted.</aside>

## Edit Endpoint Group

The Edit Endpoint Group API allows users to modify an existing Endpoint group in a system or application.

```shell
curl --location --request PUT 'https://api.authnull.kloudlearn.com/api/v1/instanceGroup/editInstanceGroup' \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1,
  "instanceIds": [3, 5, 6],
  "groupName": "sefali",
  "groupId": 22
}'
```

```http
PUT /api/v1/instanceGroup/editInstanceGroup
```

```json
{
  "domainId": 16,
  "instanceIds": [1, 2],
  "groupName": "Ghimiray"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`PUT /api/v1/instanceGroup/editInstanceGroup`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| instanceIds | The instanceIds is used to specify the IDs of the instances that are part of the endpoint group. |
| groupName | The groupName is used to specify the name of the endpoint group. |

### HTTP Response

```json
{
  "status": "Success",
  "message": "Status Updated Successfully"
}
```

<aside class="success">Endpoint Status Updated.</aside>

## Assign Users To Endpoint Group

The Assign Users to Endpoint Group API allows users to assign or add users to an existing Endpoint group.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/instanceGroup/assignUsersToEndpointGroup' \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1234,
  "groupId": 9,
  "userIds": [2, 3],
  "action": "add"
}'
```

```http
POST /api/v1/instances/assignUsersToEndpointGroup
```

```json
{
  "domainId": 1234,
  "groupId": 9,
  "userIds": [2, 3],
  "action": "add"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instances/assignUsersToEndpointGroup`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| groupId | The groupId is used to specify the unique identifier of a group. |
| action | The action specifies the type of action: `add` or `remove`. |
| userIds | The userIds is used to specify the unique identifiers of users to be added or removed. |

### HTTP Response

```json
{
  "status": "Success",
  "message": "Users Added/Removed successfully"
}
```

<aside class="success">Endpoint Status Updated.</aside>

## Add Auth Flow

The Add Authflow API allows users to add a new authentication flow to an existing Endpoint group.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/instanceGroup/addAuthFlowToInstanceGroup' \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1234,
  "groupId": 13,
  "authFlow": "SSH,DID"
}'
```

```http
POST /api/v1/instanceGroup/addAuthFlowToInstanceGroup
```

```json
{
  "domainId": 1234,
  "groupId": 9,
  "authFlow": "SSH,DID"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instanceGroup/addAuthFlowToInstanceGroup`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| groupId | The groupId is used to specify the unique identifier of a group. |
| authFlow | The authFlow is used to specify the type of authentication flow. |

### HTTP Response

```json
{
  "instanceId": 13,
  "code": "200",
  "message": "Auth Flow Updated"
}
```

<aside class="success">Auth flow added.</aside>

## Update Instance Group Status

The Update Instance Group Status API allows users to update the status of an instance group.

```shell
curl --location --request PUT 'https://api.authnull.kloudlearn.com/api/v1/instanceGroup/updateInstanceGroupStatus' \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1234,
  "groupId": 9,
  "status": "Disabled"
}'
```

```http
PUT /api/v1/instanceGroup/updateInstanceGroupStatus
```

```json
{
  "domainId": 1234,
  "groupId": 9,
  "status": "Disabled"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`PUT /api/v1/instanceGroup/updateInstanceGroupStatus`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | Domain Id is the company/organization id within our Authnull platform. |
| groupId | The groupId is used to specify the unique identifier of a group. |
| status | The status parameter specifies the current status of a group: `Active` or `Inactive`. |

### HTTP Response

```json
{
  "status": "Success",
  "message": "Status Updated Successfully"
}
```

<aside class="success">Instance Group status updated.</aside>
