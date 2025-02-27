---
title: Troubleshooting
description: If you have issues with LinkAce or run into any errors, please follow these steps before creating a discussion or an issue on Github.
---

If you have issues with LinkAce or run into any errors, please follow these steps before creating a discussion or an issue on Github. You can find some common issues [below the troubleshooting guide](#common-issues).

## Disclaimer

As written in the Readme of the project and on the website: I built LinkAce to solve my problem, and I now share my solution and code to your without charging anything. I spent a lot of my free time building this application already, so I won't offer any *free* personal support, customization or installation help. If you need help please visit the [community forum]({{< relref path="community.md" >}}) and post your issue there.

### Help other to help you

Generally speaking: if you have a problem, help other to understand your problem.

It is not helpful, if you just post an error message like "There was an error". Post details about your setup, what you did to make it work already, and what you expected. After following the troubleshooting guide, you will be able to post much more information about your LinkAce instance, which in turn might help other understand your problem and help you fix it.

The golden rule is above everything else is: be nice and patient.

---

## 1. Enable the debug mode

The absolutely very first step you can try to understand what's wrong is to enable the _Debug Mode_. Error messages might be more detailed then and help find the root cause.

Add this to your .env file:

```
APP_DEBUG=true
```

## 2. Get more logs

Logs are information collected by various components of LinkAce and might help understand the root cause better.

- If LinkAce is running, you can find the general system logs under `System Logs` in the menu.
- If LinkAce is not running or not accessible, you find the same logs under `./storage/logs`.

### Getting logs from within Docker

If you run LinkAce via Docker, you may use the following commands to access your container.

{{< alert type="info" >}}
Docker setups may vary. The container names can be different depending on where and how you set up LinkAce. In a regular setup, the container for LinkAce itself should be called `linkace-app-1`. You can find the name of your container by running `docker ps`.
{{</ alert >}}

```bash
# For single Docker containers
docker exec -it [your LinkAce container name] ash

# For Docker Compose
docker compose exec -it app ash
```

Once you are inside the container, find the logs directory and view the latest logs file.

```bash
# View all log files
cd /app/storage/logs

# Open the latest log file
cat laravel-2025-02-26.log
```

## 3. Search the community forum for similar error messages

If you aren't able to solve the issue with the help of the debug mode or logs, you might search the [community forum]({{< relref path="community.md" >}}) for your error message. There are tons of threads about all kinds of issues already and yours might already be solved.

## 4. Did you try turning it off and on again?

The bland it sounds, please try to restart LinkAce. If that didn't help, try to restart your sever.

## 6. Post your issue to the forum

If you aren't able to solve the issue with the detailed information or threads from the community, you might post a new one.

{{< alert type="warning" >}}
If you want to share tons of log files and additional info, please for the sake of god use [Pastebin](https://pastebin.com/) to drop of all the files and logs there. It is not helpful for others to encounter threads with 1000+ lines of logs all in the thread itself.
{{</ alert >}}

### What does your tech stack look like?

- If you run LinkAce behind a proxy or load balancer, please share details about it, and logs from it if necessary.
- Do you run Cloudflare or another provider in front of LinkAce?
- Are you using an SSO provider? If yes, share details about the setup and post logs if necessary.

### Gather additional system information

The instructions are written for Linux systems. If you use something else, please look up how do find details about it.

```bash
# General details about your server
uname -a

# Details about your docker system
docker system info

# Details about your LinkAce container setup
cat docker-compose.yml
docker container inspect [your LinkAce container name]
```

---

## Common Issues

There are a few common issues that might occur when you run LinkAce based on it's architecture and the technology it uses.

### Permission issues

The most common issue is permissions. There are two major parts of LinkAce which require 

#### .env file

The .env file needs to be writable for the setup. You can change it back to non-writable permissions afterward. This also applies for the outside of the Docker container, as permissions are shared through the container!

```bash
# make it writable
chmod 0666 .env

# make it non-writable
chmod 0655 .env
```

#### Storage directory

The storage directory contains various files for caches, sessions and logs, as well as the application backups. Please make sure that the folders in it are writable by the user running LinkAce. In the official LinkAce docker container, the user will always be `www-data`.

```bash
# Inside a Docker container (if applicable)
docker exec -it [your LinkAce container name] chmod -R 0766 ./storage

# For a general PHP setup
cd [Path to your LinkAce folder]
chmod -R 0766 ./storage
```

#### Special case: SQLite Database

If you run LinkAce with an SQLite database, make sure that the folder containing the database is writable! This is a requirement from SQLite itself.

### Database is not reachable / credentials are incorrect

If you start the LinkAce Docker setup and change the database password later, you will have a mismatch between the actual password of your database and the password LinkAce knows.

Please note that there will be no help for changing the password inside your database. Please refer to the official documentation of your database server.

{{< alert type="warning" >}}
If you use special characters such as `?\/$'"` in your password, either change those to other characters or surround your database password with `"` quotes like this in your .env file:
```
DB_PASSWORD="my$superSecret'DBPassword'"
```
{{</ alert >}}

If you haven't set up LinkAce yet, you can delete your database and start from scratch. The following steps assume the standard LinkAce Docker setup. If you are using another database, please adopt the changes.

```bash
# Stop the whole setup
docker compose down

# Find the Docker volume of the LinkAce database, it should end with `linkace-db`
docker volume ls 

# ====== !CAUTION! ======
# THIS WILL REMOVE YOUR DATABASE VOLUME AND EVERYTHING INSIDE IT!
# MAKE SURE THAT THE NAME IS CORRECT!
docker volume rm linkace_linkace-db

# Start LinkAce again
docker compose up -d
```

{{< alert type="info" >}}
The default password shipping with LinkAce is `ChangeThisToASecurePassword!`
{{</ alert >}}
