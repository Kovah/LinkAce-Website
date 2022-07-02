---
title: Advanced Docker configuration
---

## Running Linkace behind a proxy / load balancer

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

LinkAce currently does not accept a `$PORT` environment variable to listen on that port for incoming connections at the moment.


---


## Using Docker environment variables instead of the .env file

{{< alert type="warning" >}}
This setup method is not fully tested and thus not supported. Use at your own risk.
{{</ alert >}}

It is possible to set environment variables by using Docker, instead of using a .env file. Variables set in your Docker Compose file override values in the .env file.  
If you want to use Docker variables, please read the following requirements before starting any setup steps:

1. Remove `- ./.env:/app/.env` from the application configuration in your docker-compose file.
2. Add the following environment variables to the application container:
    - `DB_HOST=[your database host]`
    - `DB_DATABASE=[name of the database]`
    - `DB_USERNAME=[name of the user]`
    - `DB_PASSWORD=[password for the user]`
3. Next, an application key needs to be generated. There are two methods:
    - Start the Docker containers, run `docker exec linkace_app_1 php artisan key:generate --show`. Add the key that is shown as the output to your Docker variables as `APP_KEY`, like `APP_KEY=base64:y1f1BJ74...`.  
      Now restart the containers with `docker-compose up -d --force-recreate` to load the new application key.
    - Alternatively, add a random 32 characters long string to the docker-compose file as a Docker variable like `APP_KEY=40iN15LxpoQ8...`
4. If you would like to use MySQL which ships with the default configuration, start the LinkAce containers and proceed with the setup by opening the corresponding URL in your browser. In this example, it would be http://localhost.  
   However, if you want to use Postgres or SQLite, follow the Docker setup guides in the Docker setup section.

The docker-compose file should look _similar_ to this after completing all steps:

```yml
version: "3"
services:

  # --- MariaDB
  db:
    image: mariadb:10.7
    restart: unless-stopped
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_bin
    environment:
      - MYSQL_ROOT_PASSWORD=someDbPassword
      - MYSQL_USER=linkacedb
      - MYSQL_PASSWORD=dbuser
      - MYSQL_DATABASE=someDbPassword
    volumes:
      - db:/var/lib/mysql

  # --- LinkAce Image with PHP and nginx
  app:
    image: linkace/linkace:simple
    restart: unless-stopped
    depends_on:
      - db
    environment:
      - APP_KEY=base64:jpzRiL9ceL5...
      - DB_HOST=db
      - DB_DATABASE=linkacedb
      - DB_USERNAME=dbuser
      - DB_PASSWORD=someDbPassword
    ports:
      - "0.0.0.0:80:80"
      #- "0.0.0.0:443:443"
    volumes:
      - linkace_logs:/app/storage/logs
      # Remove the hash of the following line if you want to use HTTPS for this container
      #- ./nginx-ssl.conf:/etc/nginx/conf.d/default.conf:ro
      #- /path/to/your/ssl/certificates:/certs:ro
      # Remove the hash of the following line if you want to use local backups
      #- ./backups:/app/storage/app/backups

volumes:
  linkace_logs:
  db:
    driver: local
```

If you already completed the setup and want to migrate to Docker variables from your .env file, you can do so by moving all variables from the .env file into Docker variables and remove the .env file from the `volumes` section of the application container.

You may add more environment configuration variables, depending on what you want to configure. Please consult the [**.env configuration reference**]({{< relref path="docs/v1/configuration/env-settings.md" >}}) for more details.


---


## Enable HTTPS for LinkAce

Depending on your setup, you may want to run LinkAce without other web servers in front of it. In this case, I highly encourage you to enable support for HTTPS. Please note that, due to complexity reasons, I won't discuss generating SSL certificates here. Please check [Let's Encrypt](https://letsencrypt.org/) for that.

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

The first line tells the web server to actually enable SSL. The last two lines specify the location of the files. Please replace `[FULLCHAIN FILE NAME]` and `[CERTIFICATE KEY FILE NAME]` with the actual filenames.

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
