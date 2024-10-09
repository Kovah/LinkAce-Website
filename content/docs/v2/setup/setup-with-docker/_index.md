---
title: Setup with Docker
description: "There are two different ways to install LinkAce with Docker: one container that contains both the application and a web server, and LinkAce as a stand-alone container with a separate web server."
weight: 10
aliases:
- setup
---

Working with Docker is pretty straight forward, but you should be familiar with Docker. To make things easier, we provide Docker Compose files in the repository which contain all needed services, configured to just run the application right away.

{{< alert type="secondary" >}}
All images are available on the [**Docker Hub**](https://hub.docker.com/r/linkace/linkace) and on the [**GitHub Registry**](https://github.com/Kovah/LinkAce/pkgs/container/linkace) and support `amd64`, `arm64` and `amd/v7`.
{{</ alert >}}

## Base Requirements

* Command-line access to your server
* Docker version 19 or greater
* Docker Compose is recommended for the setup, must support compose version 3
* Please consider using `utf8mb4_bin` as the database collation. Other collations like `utf8mb4_general_ci` may cause issues with different Unicode characters.

---

## 2-Minute Testing Setup

You can run LinkAce within a couple of minutes, using a SQLite database to get started quickly. Please notice that switching between databases is not supported if you decide to run LinkAce with MySQL or Postgres later on.

```
docker run -p "8080:80" -v "./database.sqlite:/app/database/database.sqlite" linkace/linkace
```

Then open `http://localhost:8080` in your browser and follow the few setup steps.

---

## Stable Setup

It is recommended to follow these setup steps to ensure that LinkAce is running smoothly. This setup method is the only supported one for Docker. 

### 1. Copy the needed files

Download the Docker setup package from the LinkAce repository: [**linkace-docker.zip**](https://github.com/Kovah/LinkAce/releases/latest)

Alternatively, you can take a look at the [docker-compose.yml](https://github.com/Kovah/LinkAce/blob/2.x/docker-compose.production.yml) and [.env](https://github.com/Kovah/LinkAce/blob/2.x/.env.docker.production) files directly and adopt it to your own setup. 

### 2. Edit the base configuration

You should change the following settings in the .env file before starting the setup:

* DB_PASSWORD - Please set a secure password here
* REDIS_PASSWORD - Please set a secure password here

If you are unsure if the `.env` file is writable inside Docker, please make it writable for anybody (`-rw-rw-rw- or 666`). You can switch back to read only after the setup.

Your directory should look like this now:

```
/my-user-directory/linkace
├╴ .env
├╴ docker-compose.yml
├╴ LICENSE.md
└╴ README.md
```

### 3. Start the application

After you completed the above steps, run the following command to start up the container setup:

```bash
docker compose up -d
```


### 4. Start the built-in setup

Open the URL which points to your Docker container in your browser now. If you started LinkAce on your local machine, for example, the URL should be `http://localhost`.

You can configure the database and your user account in the following process.


### 5. Follow the post-installation steps

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v2/setup/post-setup.md" >}}) now to fully enable all features.
{{</ alert >}}


---


## Advanced Configuration

The [advanced Docker configuration]({{< relref path="docs/v2/setup/setup-with-docker/advanced-configuration.md" >}}) page provides some guides for specific use cases for Docker.

- Running Linkace behind a proxy / load balancer
- Enable HTTPS for LinkAce without a proxy / load balancer


## Compatibility with other Tools

- **Watchtower**: Several users reported broken LinkAce installations after Watchtower ran updates. Please exclude LinkAce from Watchtower and only update manually to properly run all update steps.
