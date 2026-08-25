---
title: Troubleshooting
description: The failures integrators hit most often, and what causes them.
---

The failures integrators hit most often, and what causes them.

## 401 on every request

Check the header name. Authnull reads X-Authorization, not Authorization. A client library that sets bearer auth automatically will populate the wrong header and every call will fail identically.

## 403 with a valid token

The token, orgId and tenantId must agree. Confirm the orgId in your body matches the organization the token was issued for, then confirm domainId belongs to that tenant by listing domains.

## Empty list where records exist

Check filter and search. filterBy accepts a fixed set of column keys per endpoint; an unrecognized key silently narrows to nothing on some services. Clear the filter and re-run before assuming a data problem.

## Filters ignored

Filters must be in the JSON body. Appending them as query parameters produces a valid but unfiltered response, which reads as the filter being broken.

## A Radius device reappears after deletion

DeleteDevice removes the inventory record only. If the agent is still installed and the vendor server still forwards to it, the device re-registers on the next authentication. Uninstall the agent or reconfigure the server first.

## Pagination returns duplicates

pageId is 1-based. Starting at 0 returns the first page twice on services that clamp the value.
