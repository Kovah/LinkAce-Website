---
title: Setup with Docker (Advanced)
---

The advanced setup is not that different from the simple setup, but may not be suitable for certain environments. Specifically, it uses different containers for the application running with PHP, and the web server. The docker-compose file also includes configuration for Redis, which increases performance.

Docker images used in this setup are named `linkace/linkace:latest` or `linkace/linkace:1.5.2`.

This setup is recommended when having full access to Docker, e.g. on a VPS or root server.


## Base Requirements

* Command-line access to your server
* Docker version 19 or greater
* docker-compose is recommended for the setup, must support compose version 3
* Please consider using `utf8mb4_bin` as the database collation. Other collations like `utf8mb4_general_ci` may cause issues with different Unicode characters.

{{< alert type="info" >}}
If you are using an ARM v7 operating system, please make sure that you have the latest version of `libseccomp2` (> 2.4.4) installed. Otherwise, you will run into issues with our Docker images. A guide can be found [on linuxserver.io](https://docs.linuxserver.io/faq#libseccomp).
{{</ alert >}}


## Setup with Docker

### 1. Copy all needed files

Download the Docker setup package from the LinkAce repository and unpack it: [**linkace-docker-advanced.zip**](https://github.com/Kovah/LinkAce/releases/latest)

### 2. Edit the base configuration

You have to change the following settings in the .env file before starting the setup:

* DB_PASSWORD - Please set a secure password here
* REDIS_PASSWORD - Please set a secure password here
* Add `SESSION_DRIVER=redis` and `CACHE_DRIVER=redis` as separate lines to the file

If you are unsure if the `.env` file is writable inside Docker, please make it writable for anybody (`-rw-rw-rw- or 666`). You can switch back to make it read only after the setup.

Your directory should look like this now:

```
/my-user-directory/linkace
├╴ .env
├╴ docker-compose.yml
├╴ nginx.conf
├╴ nginx-ssl.conf
├╴ LICENSE.md
└╴ README.md
```

### 3. Start the application

After you completed the above steps, run the following command to begin the container setup:

```bash
docker-compose up -d
```


### 4. Start the built-in setup

Open the URL which points to your Docker container in your browser now. You configure the database and your user account in this process.


### 5. Follow the post-installation steps

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) now to fully enable all features.
{{</ alert >}}

---

The [advanced Docker configuration]({{< relref path="docs/v1/setup/setup-with-docker/advanced-configuration.md" >}}) page provides some guides for specific use cases for Docker, like setup with SSL or behind a proxy.
