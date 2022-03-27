---
title: Setup with Docker (Advanced)
---

The advanced setup is not that different from the simple setup, but may not be suitable for certain environments. Specifically, it uses different containers for the application running with PHP, and the web server. The docker-compose file also includes configuration for Redis, which increases performance.

Docker images used in this setup are named `linkace/linkace:latest` or `linkace/linkace:1.5.2`.

This setup is recommended when having full access to Docker, e.g. on a VPS or root server.


## Base Requirements

* Full access to the command line.
* Docker version 19 or greater.
* docker-compose is recommended for the setup, must support compose version 3.
* Please consider using `utf8mb4_bin` as the database collation. Other collations like `utf8mb4_general_ci` may cause issues with different Unicode characters.

{{< alert type="info" >}}
If you are using an ARM v7 operating system, please make sure that you have the latest version of `libseccomp2` (> 2.4.4) installed. Otherwise, you will run into issues with our Docker images. A guide can be found [on linuxserver.io](https://docs.linuxserver.io/faq#option-2).
{{</ alert >}}


## Setup with Docker

### 1. Copy all needed files

Copy the following files [from the repository](https://github.com/Kovah/LinkAce) to the directory you want to use for the application. You don't need any other files to run LinkAce.

* `docker-compose.production.yml`
* `.env.docker.production`
* `nginx.conf`

### 2. Modify the files

* Rename the `.env.docker.production` to `.env`.
* Rename the `docker-compose.production.yml` to `docker-compose.yml`.

By default, you have to change the following variables before starting the setup:

* DB_PASSWORD - Please set a secure password here
* REDIS_PASSWORD - Please set a secure password here
* SESSION_DRIVER - Change the setting from `file` to `redis` (like `SESSION_DRIVER=redis`)
* CACHE_DRIVER - Change the setting from `file` to `redis`

If you are unsure if the `.env` file is writable inside Docker, please make it writable for anybody (`-rw-rw-rw- or 666`). You can switch back to make it read only after the setup.

Your directory should look like this now:

```
/my-user-directory/linkace
├╴ .env
├╴ docker-compose.yml
└╴ nginx.conf
```

### 3. Start the application

After you completed the above steps, run the following command to begin the container setup:

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

Open the URL which points to your Docker container in your browser now. You configure the database and your user account in this process.

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v1/setup/post-setup.md" >}}) to fully enable all features, including automated backups and link checks.
{{</ alert >}}

---

The [advanced Docker configuration]({{< relref path="docs/v1/setup/setup-with-docker/advanced-configuration.md" >}}) page provides some guides for specific use cases for Docker.
