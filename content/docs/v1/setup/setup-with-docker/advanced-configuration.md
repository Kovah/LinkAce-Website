---
title: Advanced Docker configuration
---

## Running Linkace behind a proxy / load balancer

If you are using a proxy / load balancer with HTTPS, please make sure it sends the `X-Forwarded-Proto` and `X-Forwarded-For` headers to LinkAce. Otherwise, LinkAce won't be able to correctly generate URLs.

Nginx configuration example:
```
proxy_set_header X-Forwarded-For $remote_addr;
proxy_set_header X-Forwarded-Proto $scheme; 
```

Apache configuration example:
```
ProxyPreserveHost on
RequestHeader set X-Forwarded-Port "443"
RequestHeader set X-Forwarded-Proto "https"
```

LinkAce currently does not accept a `$PORT` environment variable to listen on that port for incoming connections.


---


## Using Docker environment variables instead of the .env file

It is possible to set environment variables by using Docker, instead of using a .env file. Variables set in your Docker Compose file override values in the .env file.  
If you want to use Docker variables, please read the following requirements before starting any setup steps:

1. Remove `- ./.env:/app/.env` from the application configuration in your docker-compose file.
2. Add the following environment variables to the application container:
    - `DB_HOST=[your database host]`
    - `DB_DATABASE=[name of the database]`
    - `DB_USERNAME=[name of the user]`
    - `DB_PASSWORD=[password for the user]`
3. After starting the Docker containers, run `docker exec linkace_app_1 php artisan key:generate --show` instead of the command shown atop. Add the key that is shown as the output to your Docker variables as `APP_KEY`, like `APP_KEY=base64:y1f1BJ74...`.
4. Restart the containers with `docker-compose up -d --force-recreate` to load the new Application key.
5. Open LinkAce in your browser under the domain it is reachable at. You should be redirected to the setup.
6. Go through the setup. After creating an account in the setup and reaching the completed screen, add `SETUP_COMPLETED=true` as a new Docker variable and restart the containers with the same command as above. You should then be able to access LinkAce through the browser.

The docker-compose file should look similar to this after completing all steps:
```yml
version: "3"
services:
  # --- MariaDB
  db:
    image: mariadb:10.5
    restart: unless-stopped
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_bin
    environment:
      - MYSQL_ROOT_PASSWORD=dbpassword
      - MYSQL_USER=dbuser
      - MYSQL_PASSWORD=dbpassword
      - MYSQL_DATABASE=linkacedb
    volumes:
      - db:/bitnami
  # --- LinkAce Image with PHP 7.4 and nginx
  app:
    image: linkace/linkace:php-nginx
    restart: unless-stopped
    depends_on:
      - db
    ports:
      - "0.0.0.0:80:8080"
    environment:
      - APP_KEY=base64:jpzRiL9ceL5...
      - SETUP_COMPLETED=true
      - DB_HOST=db
      - DB_DATABASE=linkacedb
      - DB_USERNAME=dbuser
      - DB_PASSWORD=dbpassword
    volumes:
      - ./nginx-simple.conf:/opt/docker/etc/nginx/conf.d/linkace.conf:ro

volumes:
  linkace_logs:
  db:
    driver: local
```

If you already completed the setup and want to migrate to Docker variables from your .env file, you can do so by moving all variables from the .env file into Docker variables and remove the .env file from the `volumes` section of the application container.


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
