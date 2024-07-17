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

LinkAce 2 accepts a `$PORT` environment variable to listen on the specified port for incoming connections. This might be useful for restricted Docker hosting environments such as Heroku.


---


## Enable HTTPS for LinkAce

{{< alert type="danger" >}}
This guide is outdated and will be updated for the final release of LinkAce 2.
{{</ alert >}}

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
