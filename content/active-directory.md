---
title: Active Directory
---

# Active Directory API Communications

The Active Directory API Communications involves the use of APIs to synchronize user and group information between a SaaS platform and an Active Directory (AD) server. In this process, the AD APIs in Authnull communicate with the agent to push the user and group information from the SaaS platform to the AD server.

## Import Users

The Import Users API enables the import of user data from external systems or sources into the Active Directory.

```shell
curl POST "https://api.authnull.kloudlearn.com/api/v1/importUsers"
```

```http
POST /api/v1/importUsers HTTP/1.1
```

```json
{
  "ldapHost": "ldap.forumsys.com",
  "ldapPort": "389",
  "baseDN": "dc=example,dc=com",
  "filter": "(ou=italians)",
  "bindDN": "BindDN",
  "domainID": "91"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/importUsers HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| ldapHost | The ldapHost specifies the LDAP server hostname or IP address. |
| ldapPort | The ldapPort specifies the port number used for LDAP communication. |
| baseDN | The baseDN specifies the base distinguished name for the search. |
| filter | The filter allows for specifying criteria to select specific user accounts for import. |
| bindDN | The bindDN specifies the distinguished name of the user account used to authenticate the API request. |
| domainID | The domainID specifies the identifier of the domain to which the users should be imported. |

### HTTP Response

<aside class="success">Successfully Imported Users.</aside>

## Get Import Status

The Get Import Status API retrieves import status information for user data imports.

```shell
curl POST "https://api.authnull.kloudlearn.com/api/v1/getImportStatus"
```

```http
POST /api/v1/getImportStatus HTTP/1.1
```

```json
{
  "DirectoryName": "ldap.forumsys.com"
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/getImportStatus HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| directoryName | Name of the Directory. |

### HTTP Response

<aside class="success">Imported status successfully.</aside>

## Reconfigure Active Directory

The Reconfigure Active Directory API updates the configuration settings for the Active Directory API Communications module.

```shell
curl POST "https://api.authnull.kloudlearn.com/api/v1/reConfigure"
```

```http
POST /api/v1/reConfigure HTTP/1.1
```

```json
{
  "FieldMappings": {
    "email": "john@kloudone.com",
    "slack": "JohnDoe",
    "username": "John",
    "department": "IT",
    "group": "groupA",
    "subgroup": "subgroupA",
    "roles": "admin",
    "location": "India",
    "region": "United States",
    "primaryApp": "kloudone",
    "fax": "1234567890"
  }
}
```

### Access Token
Authorization Key Required

### HTTP Request
`POST /api/v1/reConfigure HTTP/1.1`

### Query Parameters

| Parameter | Description |
| --------- | ----------- |
| groupID | GroupId is the id of group. |
| fieldMappings | FieldMappings is the mapping of the field. |

### HTTP Response

<aside class="success">Successfully reConfigured Active Directory.</aside>
