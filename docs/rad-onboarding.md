---
title: Radius device onboarding
description: Radius onboarding is an installation workflow, not an API workflow. You install an agent on the Radius host, point your NPS, ISE or ClearPass server at it, then confirm the device appears through the device API.
---

Radius onboarding is an installation workflow, not an API workflow. You install an agent on the Radius host, point your NPS, ISE or ClearPass server at it, then confirm the device appears through the device API.

:::warning[Not a REST flow.]
There is no create-device endpoint. Devices register themselves once the agent is installed and the vendor server is configured. The API is used to verify and manage the result.
:::

## Steps

1. Download the Radius agent installation script onto the Radius host.
2. Make the script executable.
3. Run the installation script.
4. Download app.env and place it alongside the agent.
5. Configure Microsoft NPS, Cisco ISE or Aruba ClearPass to forward to the agent.
6. Confirm registration by calling /network_device/ListDevices.

## Install command

The console exposes this command on the onboarding screen. Run it as root on the Radius host.

```shell
sudo wget https://github.com/authnull0/windows-endpoint/raw/main/agent/radius-agent/install_agent.sh -O install_agent.sh
```

## Verify

After configuring the vendor server, list devices filtered by device type. A newly registered device appears with its IP address and NAS port type populated.

```shell
curl -X POST 'https://api.authnull.com/network_device/ListDevices' \
  -H 'Content-Type: application/json' \
  -H "X-Authorization: $AUTHNULL_TOKEN" \
  -d '{ "domainId": 1, "MachineType": "radius", "tenantId": 1, "orgId": 105 }'
```
