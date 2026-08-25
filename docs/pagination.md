---
title: Pagination and filtering
description: List endpoints share one pagination contract and one filter contract. Learn them once and they apply across all three modes.
---

List endpoints share one pagination contract and one filter contract. Learn them once and they apply across all three modes.

## Pagination

Send pageId and pageSize in the body. Pages are 1-based.

| Field | Type | Description |
|---|---|---|
| `pageId` | integer | 1-based page number. Defaults to 1. |
| `pageSize` | integer | Records per page. Defaults to 10, maximum 100. |

```json
{
  "orgId": 105,
  "tenantId": 1,
  "pageId": 1,
  "pageSize": 10
}
```

## Filtering

Filters are objects, not query strings. filterBy names the column and value is matched against it.

```json
{
  "search": "",
  "filter": {
    "filterBy": "DEVICE_NAME",
    "value": "Microsoft NPS"
  }
}
```

| Field | Type | Description |
|---|---|---|
| `search` | string | Free-text search across the primary display columns. Empty string means no search. |
| `filter.filterBy` | string | Column key to filter on. Valid keys vary by endpoint. |
| `filter.value` | string | Exact value to match against the named column. |

## Combining the two

search and filter apply together and narrow the result set. Pagination is applied after filtering, so totalCount reflects the filtered set.
