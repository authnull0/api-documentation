---
title: Authnull Agent
---

# Authnull Agent

Authnull Agent runs as a daemon on specific instances and synchronizes users, groups from each endpoint. It has the functionality to actively discover user groups, manage passwords, perform password rotations, and SSH key management asynchronously. The agent also discovers users/groups/passwords/keys, deletes user groups from the SAAS platform, and synchronizes back to the endpoint. The agent can be deployed using the Add Endpoint Section following the configuration file.

## Installation Steps

### Helm install Endpoint Agent chart

Helm helps you manage Kubernetes applications — Helm Charts help you define, install, and upgrade even the most complex Kubernetes application.

Install Helm with a package manager, or download a binary:

```shell
brew install helm
```

Once installed, unpack the helm binary and add it to your PATH and you are good to go! Check the docs for further installation and usage instructions.

## Configuration File

1. Generate API key from Authnull. After the generation of the API Key, save the config file and restart the Endpoint Agent.

2. Register API triggers from agent.

3. Send new Key API and periodically check new key from agent if there are any.

## Add Machine API

The Add Machine API is a software component that can be integrated into the Lums Agent to enable the addition of new machines to the system via an API call.

```shell
curl --location --request POST 'https://api.authnull.kloudlearn.com/api/v1/machine/add-machine'
```

```http
POST /api/v1/instances/add-instance HTTP/1.1
```

```json
{
  "domainId": 1,
  "instanceName": "abc-xyz",
  "osId": 1,
  "publicIp": "192.168.1.1",
  "privateIp": "172.64.32.1"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/machine/add-machine HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| machineKey | The machineKey is used to authenticate and uniquely identify a machine to be added to the Lums monitoring system. |
| osId | The osId is used to specify the operating system of the machine being added to the agent. |
| publicIpAddress | The publicIpAddress is used to specify the public IP address of the machine. |
| privateIpAddress | The privateIpAddress specifies the private IP address of the machine. |

### HTTP Response

```json
{
  "instanceId": "11",
  "code": "201",
  "message": "Success"
}
```

<aside class="success">Instance added to the list.</aside>

## Maintenance

Endpoint Agents are maintained by checking the Privilege Status API. This happens periodically to check whether the users/groups privileges are updated or not.
