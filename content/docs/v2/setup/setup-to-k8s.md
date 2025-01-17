---
title: Setup with Helm (Kubernetes)
description: "LinkAce can be deployed to a Kubernetes cluster with the help of a Helm chart."
weight: 20
---

This Helm chart can be used to deploy LinkAce to your Kubernetes cluster. Please note that this chart deploys the
full application stack by default, including a MariaDB database and Redis for caching. It is possible to use an existing
database or Redis. Please see the values.yml file for details.

{{< alert type="warning" >}}
This Helm Chart is currently a beta version. Please give feedback if you are using it.
{{</ alert >}}

### Helm Chart

Please visit the [**Helm Chart documentation**](https://github.com/Kovah/LinkAce/tree/2.x/deploy) in the repository for the
current version of the chart with usage instructions.

### Follow the post-installation steps

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v2/setup/post-setup.md" >}}) now to fully enable all features.
{{</ alert >}}

---

## Compatibility with other Tools

- **Watchtower**: Several users reported broken LinkAce installations after Watchtower ran updates. Please exclude LinkAce from Watchtower and only update manually to properly run all update steps.
