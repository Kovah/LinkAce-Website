---
title: LinkAce Setup
menu:
  docs_v2:
    weight: 20
---

LinkAce itself does not require a high-performance server. It can run with database search, while the recommended Docker setup also includes Redis and Meilisearch for caching and search.

{{< setup-panel docker="docs/v2/setup/setup-with-docker/_index.md" k8s="docs/v2/setup/setup-to-k8s.md" cloud="docs/v2/setup/one-click-deploy.md" nodocker="docs/v2/setup/setup-with-php.md" >}}
