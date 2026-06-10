---
title: Errors
---

# Errors

The AuthNull API uses standard HTTP status codes to indicate the success or failure of an API request.

<aside class="notice">
In general: codes in the <strong>2xx</strong> range indicate success, codes in the <strong>4xx</strong> range indicate an error that resulted from the provided information (e.g., a required parameter was missing, authentication failed, etc.), and codes in the <strong>5xx</strong> range indicate a server-side error.
</aside>

## Error Codes

| Error Code | Meaning |
| ---------- | ------- |
| 400 | **Bad Request** — Your request is invalid. |
| 401 | **Unauthorized** — Your API key is wrong. |
| 403 | **Forbidden** — The resource requested is hidden for administrators only. |
| 404 | **Not Found** — The specified resource could not be found. |
| 405 | **Method Not Allowed** — You tried to access a resource with an invalid method. |
| 406 | **Not Acceptable** — You requested a format that isn't JSON. |
| 410 | **Gone** — The resource requested has been removed from our servers. |
| 422 | **Unprocessable Entity** — The request was well-formed but contains invalid fields. |
| 429 | **Too Many Requests** — You're requesting too many resources. Slow down. |
| 500 | **Internal Server Error** — We had a problem with our server. Try again later. |
| 503 | **Service Unavailable** — We're temporarily offline for maintenance. Please try again later. |
