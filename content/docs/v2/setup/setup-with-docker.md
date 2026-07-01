---
title: Setup with Docker
description: "There are two different ways to install LinkAce with Docker: one container that contains both the application and a web server, and LinkAce as a stand-alone container with a separate web server."
weight: 10
aliases:
- setup
---

Docker is the recommended setup method for most self-hosted LinkAce installations. The stable Docker setup uses Docker Compose and includes the application, database, Meilisearch, and cache services.

{{< alert type="info" >}}
All images are available on the [**Docker Hub**](https://hub.docker.com/r/linkace/linkace) and on the [**GitHub Registry**](https://github.com/Kovah/LinkAce/pkgs/container/linkace) and support `amd64`, `arm64` and `amd/v7`.
{{</ alert >}}

## Before You Start

- Decide which URL you will use: a local URL such as `http://localhost:8080` or a domain such as `https://links.example.com`.
- Make sure you have command-line access to the server.
- Install Docker 19 or newer.
- Install Docker Compose with support for Compose file version 3 or newer.
- Decide which database you will use. The provided stable setup uses MariaDB.
- If this is an existing LinkAce installation, make a verified backup before changing containers, volumes, or database settings.

---

## 2-Minute Test Setup

Use this only to evaluate LinkAce locally. It uses a single container and SQLite.

{{< alert type="warning" >}}
This test setup is not recommended for production use. Migrating from this test setup to another database is not supported.
{{</ alert >}}

```
touch database.sqlite
APP_UID="$(docker run --rm --entrypoint id linkace/linkace -u www-data)"
APP_GID="$(docker run --rm --entrypoint id linkace/linkace -g www-data)"
sudo chown "$APP_UID:$APP_GID" database.sqlite
chmod u+rw database.sqlite
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

Use this setup for a real Docker installation. It is the supported Docker path and uses Docker Compose with separate services for LinkAce, the database, Meilisearch, and Redis.


### 1. Copy the needed files

Download the Docker setup package from the LinkAce repository: [**linkace-docker.zip**](https://github.com/Kovah/LinkAce/releases/latest)

Alternatively, you can take a look at the [docker-compose.yml](https://github.com/Kovah/LinkAce/blob/2.x/docker-compose.production.yml) and [.env](https://github.com/Kovah/LinkAce/blob/2.x/.env.docker.production) files directly and adopt it to your own setup. 


### 2. Edit the base configuration

You should change the following settings in the .env file before starting the setup:

* DB_PASSWORD - Please set a secure password here
* REDIS_PASSWORD - Please set a secure password here
* MEILISEARCH_KEY - Please set a secure key here

The provided Docker Compose setup starts the database, Meilisearch, and Redis together with LinkAce. The default `.env` file uses `APP_SEARCH_DRIVER=meilisearch` and connects LinkAce to the bundled Meilisearch container.

{{< alert type="info" >}}
If you don't want to use Meilisearch for advanced searches in LinkAce, remove the `meilisearch` service from the docker-compose.yaml file and set the search driver to `APP_SEARCH_DRIVER=database` in the .env file.
{{</ alert >}}

Your directory should look like this now:

```
/my-user-directory/linkace
├╴ .env
├╴ docker-compose.yml
├╴ LICENSE.md
└╴ README.md
```

The setup writes to the mounted `.env` file. Prefer fixing ownership instead of making the file writable for everyone:

```bash
APP_UID="$(docker compose run --rm --entrypoint id app -u www-data)"
APP_GID="$(docker compose run --rm --entrypoint id app -g www-data)"
sudo chown "$APP_UID:$APP_GID" .env
chmod u+rw .env
```

After setup, you may make `.env` read-only for the container user:

```bash
chmod u-w .env
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

The post-setup checklist covers `APP_URL`, mail, cron, search indexing, backups, guest access, default visibility, imports, and the Bookmarklet.


---


## Advanced Configuration

### Completing the installation without the built-in setup

If you run into issues with the built-in setup via the web, you may try to complete the installation via the command line.

Follow the instructions above until step 4. Then run the following commands. Please note that the database configuration must be done in the .env file BEFORE running the following commands.

```bash
docker compose exec app php artisan migrate
docker compose exec app php artisan search:setup
docker compose exec app php artisan setup:complete
docker compose exec app php artisan registeruser --admin
```

`search:setup` prepares the configured external search engine. It is required for the default Docker setup because it uses Meilisearch.

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
      - meilisearch
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
