---
title: Setup with Docker
description: "There are two different ways to install LinkAce with Docker: one container that contains both the application and a web server, and LinkAce as a stand-alone container with a separate web server."
weight: 10
aliases:
- setup
---

Working with Docker is pretty straight forward, but you should be familiar with Docker. To make things easier, we provide Docker Compose files in the repository which contain all needed services, configured to just run the application right away.

{{< alert type="info" >}}
All images are available on the [**Docker Hub**](https://hub.docker.com/r/linkace/linkace) and on the [**GitHub Registry**](https://github.com/Kovah/LinkAce/pkgs/container/linkace) and support `amd64`, `arm64` and `amd/v7`.
{{</ alert >}}

## Base Requirements

* Command-line access to your server
* Docker version 19 or greater
* Docker Compose is recommended for the setup, must support at least compose version 3
* Please consider using `utf8mb4_bin` as the database collation. Other collations like `utf8mb4_general_ci` _may_ cause issues with different Unicode characters.

---

## 2-Minute Test Setup

You can run LinkAce within a couple of minutes, using a SQLite database to try out the application. Please note that this is not recommended for production use and migrating from this test setup to another database is not supported.

```
touch database.sqlite
chmod 0766 database.sqlite
docker run -p "8080:80" -v "./database.sqlite:/app/database/database.sqlite" linkace/linkace
```

Then open `http://localhost:8080` in your browser and follow the setup steps.

{{< alert type="warning" >}}
If the LinkAce container is not starting, this might be caused by OS-specific permissions for Docker. In that case, try to run LinkAce on another internal port:
```
docker run -p "8080:8080" -e "PORT=8080" -v "./database.sqlite:/app/database/database.sqlite" linkace/linkace
```
{{</ alert >}}

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

{{< alert type="info" >}}
#### Using environment variables instead of an .env file

You might move the configuration variables from the .env file into your docker-compose.yml file or Docker setup. If you do this, you **must** generate your own application key.

```
$ docker run --rm -it linkace/linkace php artisan key:generate --show
base64:Il/5KRDENz2TiCYjKweDAkI93Q4D5ZWmP3AORXgReNo=
```

Put this key into your environment variables. This is how it might look like in the provided docker-compose.yml file:

```yaml {hl_lines=6}
services:
  # --- LinkAce
  app:
    image: docker.io/linkace/linkace:latest
    environment:
      APP_KEY: base64:Il/5KRDENz2TiCYjKweDAkI93Q4D5ZWmP3AORXgReNo=
      DB_CONNECTION: mysql
      # ...
```
{{</ alert >}}

### 3. Start the application

After you completed the above steps, run the following command to start up the container setup:

```bash
docker compose up -d
```


### 4. Start the built-in setup

Open the URL which points to your Docker container in your browser now. If you started LinkAce on your local machine, for example, the URL should be `http://localhost` or your domain pointing to LinkAce.

You can configure the database and your user account in the following process.


### 5. Follow the post-installation steps

{{< alert type="warning" >}}
Please make sure to follow the [post-installation steps]({{< relref path="docs/v2/setup/post-setup.md" >}}) now to fully enable all features.
{{</ alert >}}


---


## Advanced Configuration

### Completing the installation without the built-in setup

If you run into issues with the built-in setup via the web, you may try to complete the installation via the command line.

Follow the instructions above until step 4. Then run the following commands. Please note that the database configuration must be done in the .env file BEFORE running the following commands.

```bash
docker exec -it linkace_app_1 php artisan migrate
docker exec -it linkace_app_1 php artisan setup:complete
docker exec -it linkace_app_1 php artisan registeruser --admin
```

The last command lets you create your first admin user. After all commands were successful, you can login right away at `http://localhost` or your domain pointing to LinkAce.

### Running Linkace behind a proxy / load balancer

If you are using a proxy / load balancer with HTTPS, please make sure it sends the `X-Forwarded-Proto` and `X-Forwarded-For` headers to LinkAce. Otherwise, LinkAce won't be able to correctly generate URLs.

Nginx configuration example:
```
proxy_set_header X-Forwarded-For $remote_addr;
proxy_set_header X-Forwarded-Proto $scheme; 
proxy_set_header Host $host; 
```

Apache configuration example:
```
ProxyPreserveHost on
RequestHeader set X-Forwarded-Port "443"
RequestHeader set X-Forwarded-Proto "https"
```

LinkAce 2 accepts a `$PORT` environment variable to listen on the specified port for incoming connections. This might be useful for restricted Docker hosting environments such as Heroku.


### Running LinkAce directly with SSL

If you want to run LinkAce without a proxy but still want to use HTTPS, you must configure the built-in web server accordingly.

1. First of all, stop your existing LinkAce setup. Make sure that your domain is properly configured to be accessible from the internet.

2. Download the [ssl.Caddyfile](https://github.com/Kovah/LinkAce/blob/2.x/resources/docker/ssl.Caddyfile) file, place it besides your `docker-compose.yml` file.

3. Then, open your `docker-compose.yml` file and do the following adjustments:

4. After `image: docker.io/linkace/linkace:latest`, add a new `env` like this and set your own domain:
   ```yaml
   services:
     # --- LinkAce
     app:
       image: docker.io/linkace/linkace:latest
       environment:
         LINKACE_DOMAIN: "your-linkace-domain.com"
         PORT: 443
   ```
5. Remove the hash in front of the `- "0.0.0.0:443:443"` line.
6. Remove the hash in front of the `- ./caddy-data:/home/www-data/.local/share/caddy` and `- ./ssl.Caddyfile:/etc/caddy/Caddyfile` lines.

Your docker-compose.yml file should now look like this:

```yaml {hl_lines=["6-7",14,"19-20"]}
---
services:
  # --- LinkAce
  app:
    image: docker.io/linkace/linkace:latest
    environment:
      LINKACE_DOMAIN: "demo.linkace.org"
    restart: unless-stopped
    depends_on:
      - db
    ports:
      - "0.0.0.0:80:80"
      # Remove the hash of the following line if you want to use HTTPS for this container
      - "0.0.0.0:443:443"
    volumes:
      - ./.env:/app/.env
      - ./backups:/app/storage/app/backups
      # Remove the hash of the following line if you want to use HTTPS for this container
      - ./caddy-data:/home/www-data/.local/share/caddy
      - ./ssl.Caddyfile:/etc/caddy/Caddyfile
...
```

After that, start the installation again with `docker compose up -d`.

The web server will now try to get the SSL certificate. After a short while you will be able to access LinkAce under your domain.

If that doesn't work, check the logs of the web server with `docker compose logs -f app`.

---

## Compatibility with other Tools

- **Watchtower**: Several users reported broken LinkAce installations after Watchtower ran updates. Please exclude LinkAce from Watchtower and only update manually to properly run all update steps.
