---
title: Setup with Docker (Simple)
---

In this version, there is only one Docker container needed and one optional for the database. If you use a managed database outside of Docker, you only have to run one single container. This is useful for environments where access to Docker is limited, e.g. on Heroku or other cloud platforms. However, if you have full access to a VPS or root server, the advanced setup is recommended as it also improves the performance.

Docker images used in this setup are named `linkace/linkace:simple` or `linkace/linkace:1.5.2-simple`.


## Base Requirements

* Command-line access to your server
* Docker version 19 or greater
* docker-compose is recommended for the setup, must support compose version 3
* Please consider using `utf8mb4_bin` as the database collation. Other collations like `utf8mb4_general_ci` may cause issues with different Unicode characters.

{{< alert type="info" >}}
If you are using an ARM v7 operating system, please make sure that you have the latest version of `libseccomp2` (> 2.4.4) installed. Otherwise, you will run into issues with our Docker images. A guide can be found [on linuxserver.io](https://docs.linuxserver.io/faq#libseccomp).
{{</ alert >}}


## Setup with Docker

### 1. Copy the needed files

Download the Docker setup package from the LinkAce repository: [**linkace-docker.zip**](https://github.com/Kovah/LinkAce/releases/latest)

### 2. Edit the base configuration

You have to change the following settings in the .env file before starting the setup:

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
docker-compose up -d
```


### 4. Start the built-in setup

Open the URL which points to your Docker container in your browser now. You configure the database and your user account in the following process.


### 5. Follow the post-installation steps

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) now to fully enable all features.
{{</ alert >}}

---

The [advanced Docker configuration]({{< relref path="docs/v1/setup/setup-with-docker/advanced-configuration.md" >}}) page provides some guides for specific use cases for Docker, like setup with SSL or behind a proxy.
