---
title: One-Click-Deploy to the Cloud
description: "Deploystack offers a standardized one-click installation of LinkAce to the Cloud"
weight: 30
---

[Deploystack](https://deploystack.io/) offers a standardized one-click installation of LinkAce to cloud providers like AWS, DigitalOcean or Render.

| Cloud Provider | Deploy Button |
|----------------|---------------|
| AWS | [Click to Deploy](https://deploystack.io/deploy/kovah-linkace?provider=aws&language=cfn) |
| DigitalOcean | [Click to Deploy](https://deploystack.io/deploy/kovah-linkace?provider=do&language=dop) |
| Render | [Click to Deploy](https://deploystack.io/deploy/kovah-linkace?provider=rnd&language=rnd) |


### Follow the post-installation steps

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v2/setup/post-setup.md" >}}) now to fully enable all features.
{{</ alert >}}

---

## Compatibility with other Tools

- **Watchtower**: Several users reported broken LinkAce installations after Watchtower ran updates. Please exclude LinkAce from Watchtower and only update manually to properly run all update steps.
