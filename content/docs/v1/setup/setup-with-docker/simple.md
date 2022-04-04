---
title: Setup with Docker (Simple)
---

In this version, there is only one Docker container needed and one optional for the database. If you use a managed database outside of Docker, you only have to run one single container. This is useful for environments where access to Docker is limited, e.g. on Heroku or other cloud platforms. However, if you have full access to a VPS or root server, the advanced setup is recommended as it also improves the performance.

Docker images used in this setup are named `linkace/linkace:simple` or `linkace/linkace:1.5.2-simple`.


## Base Requirements

* Shell access to your server.
* Docker version 19 or greater.
* docker-compose is recommended for the setup, must support compose version 3.
* Please consider using `utf8mb4_bin` as the database collation. Other collations like `utf8mb4_general_ci` may cause issues with different Unicode characters.

{{< alert type="info" >}}
If you are using an ARM v7 operating system, please make sure that you have the latest version of `libseccomp2` (> 2.4.4) installed. Otherwise, you will run into issues with our Docker images. A guide can be found [on linuxserver.io](https://docs.linuxserver.io/faq#option-2).
{{</ alert >}}


## Setup with Docker

### 1. Copy the needed files

Copy the following files [from the repository](https://github.com/Kovah/LinkAce) to the directory you want to use for the application. You don't need any other files to run LinkAce.

* `docker-compose.production-simple.yml`
* `.env.docker.production`

### 2. Modify the files

* Rename the `.env.docker.production` to `.env`.
* Rename the `docker-compose.production-simple.yml` to `docker-compose.yml`.

By default, you only have change two variables set in this file before starting the setup:

* DB_PASSWORD - Please set a secure password here
* REDIS_PASSWORD - Please set a secure password here

If you are unsure if the `.env` file is writable inside Docker, please make it writable for anybody (`-rw-rw-rw- or 666`). You can switch back to make it read only after the setup.

Your directory should look like this now:

```
/my-user-directory/linkace
├╴ .env
├╴ docker-compose.yml
```

### 3. Start the application

After you completed the above steps, run the following command to start up the container setup:

```bash
docker-compose up -d
```

### 4. Set a secure key

After you started the Docker containers, you are almost ready to run the setup. Before the setup, we have to generate a secret key.

{{< alert type="secondary" >}}
Please note that `linkace_app_1` is the name of your LinkAce container here. It may differ from your name. You will find the name of your container in the output of the previous command, but will most likely end with `_app_1`.
{{</ alert >}}

```bash
docker exec linkace_app_1 php artisan key:generate
```

### 5. Start the built-in setup

Open the URL which points to your Docker container in your browser now. You configure the database and your user account in the following process.

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) now to fully enable all features.
{{</ alert >}}

---

The [advanced Docker configuration]({{< relref path="docs/v1/setup/setup-with-docker/advanced-configuration.md" >}}) page provides some guides for specific use cases for Docker.
