---
title: AD Agent
---

# AD Agent

The AD agent is a software component that enables the import of user groups from a connected active directory. Once installed and configured, the AD agent runs as a daemon process that continuously retrieves and updates user group information from the active directory.

To install the AD agent, follow the instructions provided in the Configuration file, which can be downloaded from the Add Directory module.

Once the AD agent is installed and running, the imported user groups will be listed under the Directory Users section of the application.

### Daemon

The daemon is the program that runs continuously in the background to synchronize user and group information to the AD proxy. The daemon may be designed to run on a dedicated server or workstation and can be configured to perform periodic checks or real-time synchronization between the source system (such as Active Directory) and the target system (such as the AD proxy).

## Configuration File

1. The Windows server of 2012 and above is needed.

2. You need access to the Windows server to install the Active Directory agent.

3. The agent host server must be a member of the same Windows domain as your active directory.

4. The Windows server where the agent resides must be on at all times.

## Save ActiveDirectory Configuration

```shell
curl POST "https://api.authnull.kloudlearn.com/api/v1/saveActiveDirectoryConfig"
```

```http
POST /api/v1/saveActiveDirectoryConfig HTTP/1.1
```

```json
{
  "directoryName": "xyz-xyz-xyz",
  "accountName": "abc-abc-abc",
  "appUrl": "www.kloudlearn.com",
  "domainId": "1"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/saveActiveDirectoryConfig HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| directoryName | The directoryName specifies the name of the directory where the configuration data will be saved. |
| appUrl | The appUrl is used to specify the URL of the application that is integrated with the Active Directory. |
| accountName | The accountName specifies the name of the Active Directory account being configured. |
| domainId | This is the unique ID assigned by the registry to the domain. |

### HTTP Response

<aside class="success">ActiveDirectory Configure successfully saved.</aside>

## Restart the Agent

Restarting the agent will complete the installation, configure all APIs including the Active Directory, and import the groups and users to the Active Directory of the AuthNull.

## Import Users From LDIF

The Import Users API allows the import of user data from external systems via LDIF files.

```shell
curl --location 'https://api.authnull.kloudlearn.com/api/v1/integrations/activeDirectory/importLdif' \
--form 'file=@"/C:/Users/HP/Downloads/sample.ldif"' \
--form 'fileName="paul.txt"' \
--form 'domainId="1"'
```

```http
POST /api/v1/integrations/activeDirectory/importLdif HTTP/1.1
```

```
Multipart form data:
file:
filename:
domainId:
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/integrations/activeDirectory/importLdif HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| file | The file specifies the path and filename of the LDIF file containing the user data to be imported. |
| filename | The filename specifies the name of the LDIF file. |
| domainId | The domainId specifies the identifier of the Active Directory domain where the users are imported. |

### HTTP Response

<aside class="success">Import Job Added to Queue.</aside>
