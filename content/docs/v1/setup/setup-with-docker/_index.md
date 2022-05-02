---
title: Setup with Docker
description: "There are two different ways to install LinkAce with Docker: one container that contains both the application and a web server, and LinkAce as a stand-alone container with a separate web server."
weight: 10
aliases:
- setup
---

Working with Docker is pretty straight forward, but you should be familiar with Docker. To make things easier, we provide Docker Compose files in the repository which contain all needed services, configured to just run the application right away.

There are two different ways to install LinkAce with Docker:

* one container that contains both the application and a web server (tagged as `linkace/linkace:simple`)
* LinkAce as a stand-alone container with a separate web server (tagged as `linkace/linkace:latest`)

If you are unsure about which one to use, please pick the simple setup. 

{{< alert type="info" >}}
All images are available on the [**Docker Hub**](https://hub.docker.com/r/linkace/linkace).
{{</ alert >}}


---


## Setup with Docker: Simple

In this version, there is only one Docker container needed and one optional for the database. If you use a managed database outside of Docker, you only have to run one single container. This is useful for environments where access to Docker is limited, e.g. on Heroku or other cloud platforms. However, if you have full access to a VPS or root server, the advanced setup is recommended as it also improves the performance.

👉  [**Continue with the simple Setup**]({{< relref path="docs/v1/setup/setup-with-docker/simple.md" >}})


---


## Setup with Docker: Advanced

The advanced setup is not that different from the simple setup, but may not be suitable for certain environments. Specifically, it uses different containers for the application and the web server. The docker-compose file also includes configuration for Redis, which increases performance.

👉  [**Continue with the advanced Setup**]({{< relref path="docs/v1/setup/setup-with-docker/advanced.md" >}})


---


## Advanced Configuration

The [advanced Docker configuration]({{< relref path="docs/v1/setup/setup-with-docker/advanced-configuration.md" >}}) page provides some guides for specific use cases for Docker.

- Running Linkace behind a proxy / load balancer
- Using Docker environment variables instead of the .env file
- Enable HTTPS for LinkAce without a proxy / load balancer


## Compatibility with other Tools

- **Watchtower**: Several users reported broken LinkAce installations after Watchtower ran updates. Please exclude LinkAce from Watchtower and only update manually to properly run all update steps.
