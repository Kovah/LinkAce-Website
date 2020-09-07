---
title: Setup with Docker
weight: 10
aliases:
- setup
---

## Setup with Docker

Working with Docker is pretty straight forward, but you should be somewhat familiar with Docker.

There are two different ways to install LinkAce with Docker:

* one container with PHP and nginx (simple)
* different containers for PHP and nginx (advanced)

If you are unsure about which one to use, pick the simple setup.


---


## Setup with Docker: Simple

To make things easier, we provide a Docker Compose file (docker-compose.production.yml) in the repository which
contains all needed services, perfectly configured to just run the application right away.  
In this version, there is only one Docker container needed and one optional for the database. If you use a managed
database outside of Docker, you only have to run one single container. This is useful for environments, where access
to Docker is limited, e.g. on Heroku or other cloud platforms. However, if you have full access to a VPS or root
server, the advanced setup is recommended as it also improves the performance.

Let's get started.

### 1. Copy all needed files

All files you need are `docker-compose.production-simple.yml`, `.env.docker.production` and `nginx-simple.conf`.
Copy all of them to the directory you want to use for the application.

### 2. Modify the files

* Rename the `.env.docker.production` to `.env`.
* Rename the `docker-compose.production-simple.yml` to `docker-compose.yml`.

By default, you only have change two variables set in this file before starting the setup:

* DB_PASSWORD - Please set a secure password here
* REDIS_PASSWORD - Please set a secure password here

### 3. Run the application

After you completed the above steps, run the following command to start up the container setup:

```bash
docker-compose up -d
```

### 4. Set a secure key

After you started the Docker containers, you are almost ready to run the setup. Before the setup, we have to generate
a secret key.
Please note that `linkace_app_1` is the name of your LinkAce container here. It may differ from your name. You will find
the name of your container in the output of the previous command, but will most likely end with `_app_1`.

```bash
docker exec -it linkace_app_1 php artisan key:generate
```

### 5. Start the built-in setup

Open the URL which points to your Docker container in your browser now. You have to configure the database and your 
user account in the following process.

**Please make sure to follow the post-installation tasks to fully enable all features.**


---


## Setup with Docker: Advanced

The advanced setup is not that different from the simple setup, but may not be suitable for certain environments.
Specifically, it uses different containers for the application running with PHP, and the web server. The docker-compose
file also includes configuration for Redis, which increases performance.

This setup is recommended when having full access to Docker, e.g. on a VPS or root server.

### 1. Copy all needed files

All files you need are `docker-compose.production.yml`, `.env.docker.production` and `nginx.conf`.
Copy all files to the directory you want to use for the application.

### 2. Modify the files

* Rename the `.env.docker.production` to `.env`.
* Rename the `docker-compose.production.yml` to `docker-compose.yml`.

By default, you only have change two variables set in this file before starting the setup:

* DB_PASSWORD - Please set a secure password here
* REDIS_PASSWORD - Please set a secure password here
* SESSION_DRIVER - Change the setting from `file` to `redis` (`SESSION_DRIVER=redis`)
* CACHE_DRIVER - Change the setting from `file` to `redis`

### 3. Run the application

After you completed the above steps, run the following command to start up the container setup:

```bash
docker-compose up -d
```

### 4. Prepare the database

After you started the Docker containers, you are almost ready to run the setup. Before the setup, we have to generate
a secret key.
Please note that `linkace_app_1` is the name of your PHP container here. It may differ from your name. You will find
the name of your container in the output of the previous command, but will most likely end with `_app_1`.

```bash
docker exec -it linkace_app_1 php artisan key:generate
```

### 5. Start the built-in setup

Open the URL which points to your Docker container in your browser now. You have to configure the database and your 
user account in this process.

**Please make sure to follow the post-installation tasks to fully enable all features.**


---


## Enable HTTPS for LinkAce

Depending on your setup, you may want to run LinkAce without other web servers in front of it. In this case, I highly
encourage you to enable support for HTTPS. Please note that, due to complexity reasons, I won't discuss generating
SSL certificates here. Please check [Let's Encrypt](https://letsencrypt.org/) for that.

### 1. Stop your containers

Before editing any configuration, please 

```
docker-compose down
```

### 2. Generate and copy SSL certificates

Generate SSL certificates for your domain and copy them to a location on your filesystem.

### 3. Edit the docker-compose file

Open your docker-compose file and change the webserver settings.  
Remove the hash (#) in front of these two configurations:
    * `- "0.0.0.0:443:8443"`
    * `- /path/to/your/ssl/certificates:...`
    
Replace `/path/to/your/ssl/certificates` with the actual path to your SSL certificate files location.

### 4. Edit the nginx.conf file

Open the nginx.conf file and remove the hash in front of the following lines:

```
listen 0.0.0.0:8443 ssl;

# Provide SSL certificates
ssl_certificate      /certs/[FULLCHAIN FILE NAME];
ssl_certificate_key  /certs/[CERTIFICATE KEY FILE NAME];
```

The first line tells the web server to actually enable SSL. The last two lines specify the location of the files.
Please replace `[FULLCHAIN FILE NAME]` and `[CERTIFICATE KEY FILE NAME]` with the actual filenames.

### 5. Redirect to HTTPS automatically (optional)

If you want to be redirected to HTTPS automatically, you have to edit the nginx.conf file again.

First, remove `listen 0.0.0.0:8080;` from the configuration.  
Next, place the following configuration block at the very top of the file before anything else:

```
server {
    listen 0.0.0.0:8080;
    server_name _;
    return 301 https://$host$request_uri;
}
```

### 6. Start Docker again

Start LinkAce again by using `docker-compose up -d`.


---


## Running Linkace behind a proxy / load balancer

* If you are using a proxy / load balancer with HTTPS, please make sure it sends the `X-Forwarded-Proto` header
  to LinkAce. Otherwise, LinkAce won't be able to correctly generate URLs, or end up in redirection loops.
* LinkAce currently does not accept a `$PORT` environment variable to listen on that port for incoming connections.

---


Next Step: [Post-Setup Steps](/docs/v1/setup/post-setup)
