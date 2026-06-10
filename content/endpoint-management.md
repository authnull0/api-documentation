---
title: Endpoint Management
---

# Endpoint Management

Endpoint management is the process of actively monitoring, detecting, and preventing malware attacks on devices that are connected to a network. This is typically done to implement security policies and monitor suspicious activities on endpoints. It can be done by:

1. Inventory / management of Endpoints or servers (Windows, Linux, macOS and others)
2. Active Directory Sync for users (one way only)
3. Workflows to control permissions
4. Endpoint user management through Endpoint User Management Service

## List Instances

The List Instances API allows users to retrieve a list of computing instances that belong to an endpoint group in a system or application.

```shell
curl POST 'https://api.authnull.kloudlearn.com/api/v1/instances/list' \
--header 'Content-Type: application/json' \
--data '{
  "domainId": 1,
  "pageId": 1,
  "pageSize": 10,
  "filter": ""
}'
```

```http
POST /api/v1/instances/list HTTP/1.1
```

```json
{
  "domainId": 1,
  "pageId": 1,
  "pageSize": 10,
  "filter": ""
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instances/list HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The domainId is used to specify the ID of the domain to which the endpoint belongs. |
| pageId | Page ID refers to the page number. |
| pageSize | Page size refers to the number of endpoints groups to be fetched. |
| filter | filter is the search keyword for searching endpoint groups. |

### HTTP Response

```json
{
  "domainId": 1,
  "groupId": 0,
  "totalCount": 7,
  "instances": [
    {
      "totalUsers": 38,
      "instanceName": "SK2014",
      "osName": "RedHat",
      "publicIp": "192.168.3.1",
      "privateIp": "",
      "hostName": "",
      "status": "Inactive",
      "instanceId": 1,
      "totalGroups": 8
    }
  ]
}
```

<aside class="success">All the instances listed below.</aside>

## Add Instances

The Add Instance API allows users to add a new computing instance to an endpoint group in a system or application.

```shell
curl POST 'https://api.authnull.kloudlearn.com/api/v1/instances/addInstance' \
--header 'Content-Type: application/json' \
--data '{
  "domain_id": 25,
  "instance_name": "kloudone.vm",
  "os_id": 1,
  "public_ip": "144.32.55.5",
  "private_ip": "10.32.45.1"
}'
```

```http
POST /api/v1/instances/addInstance HTTP/1.1
```

```json
{
  "domainId": 1234,
  "instanceName": "kloudone.vm",
  "osId": 1,
  "publicIp": "144.32.55.5",
  "privateIp": "10.32.45.1"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instances/addInstance HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The domainId is used to specify the ID of the domain to which the endpoint belongs. |
| instanceName | The instanceName specifies the name of the instance that the endpoint belongs to. |
| osId | The osId specifies the operating system identifier for the device associated with the endpoint. |
| publicIp | The public IP refers to the unique identifier assigned to a device visible to the public internet. |
| privateIp | The privateIp is used to specify the private IP address for an endpoint in a private network. |

### HTTP Response

```json
{
  "instanceId": "fdsf-dfdf-gfdsgf-fdsgfdg-fdge",
  "code": 200,
  "message": "success"
}
```

<aside class="success">Instance added to the list.</aside>

## Update Auth Type

The Update Auth Type API allows users to update the authentication type used for a computing instance within an endpoint group.

```shell
curl PUT https://api.authnull.kloudlearn.com/api/v1/instances/updateAuthType \
--header 'Content-Type: application/json' \
--data '{
  "instanceId": 1,
  "domainId": 1,
  "authType": "SSH,DID,Password"
}'
```

```http
PUT /api/v1/instances/updateAuthType HTTP/1.1
```

```json
{
  "instanceId": 1,
  "domainId": 1,
  "authType": "SSH,DID,Password"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`PUT /api/v1/instances/updateAuthType HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| instanceId | The instanceId is used to specify the ID of the instances that are part of the endpoint. |
| domainId | The domainId is used to specify the ID of the domain to which the endpoint belongs. |
| authType | Authorization type. |

### HTTP Response

```json
{
  "Auth Type Updated"
}
```

<aside class="success">Auth type updated.</aside>

## Assign User to Endpoints

The Assign User to Endpoints API allows users to assign one or more users to specific computing instances within an endpoint group.

```shell
curl POST 'https://api.authnull.kloudlearn.com/api/v1/instances/assignUsersToMachines' \
--header 'Content-Type: application/json' \
--data '{
  "instanceIds": [1, 2],
  "domainId": 1,
  "userIds": [106, 103],
  "action": "add"
}'
```

```http
POST /api/v1/instances/assignUsersToMachines HTTP/1.1
```

```json
{
  "instanceIds": [1, 2],
  "domainId": 1,
  "userIds": [106, 103],
  "action": "add"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/instances/assignUsersToMachines HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The domainId is used to specify the ID of the domain to which the endpoint belongs. |
| instanceIds | The instanceId is used to specify the ID of the instances that are part of the endpoint. |
| userIds | The userId is used to specify the unique identifier of a user to be added or removed from an endpoint. |
| action | The action specifies the type of action to be performed: `add` or `remove`. |

### HTTP Response

```json
{
  "code": 200,
  "message": "Successfully Added"
}
```

<aside class="success">Group added to endpoint.</aside>

## Assign Groups To Endpoints

The Assign Groups to Endpoints API allows users to assign one or more groups to specific computing instances within an endpoint group.

```shell
curl PUT 'https://api.authnull.kloudlearn.com/api/v1/instances/assignGroupToMachines' \
--header 'Content-Type: application/json' \
--data '{
  "instanceId": [1, 2],
  "domainId": 1,
  "groupId": [1, 2, 3],
  "action": "add"
}'
```

```http
PUT /api/v1/instances/assignGroupToMachines HTTP/1.1
```

```json
{
  "instanceId": [1, 2],
  "domainId": 1,
  "groupId": [1, 2, 3],
  "action": "add"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`PUT /api/v1/instances/assignGroupToMachines`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| domainId | The domainId is used to specify the ID of the domain to which the endpoint belongs. |
| instanceId | The instanceId is used to specify the ID of the instances that are part of the endpoint. |
| groupId | The groupId is used to specify the unique identifier of an endpoint group. |
| action | The action specifies the type of action to be performed: `add` or `remove`. |

### HTTP Response

```json
{
  "code": 200,
  "message": "Successfully Added"
}
```

<aside class="success">Group added to Machine.</aside>
