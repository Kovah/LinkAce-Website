---
title: Upgrade from LinkAce v1
---

Please follow these instructions to upgrade LinkAce to the new version 2.

## Preparation

{{< alert type="danger" >}}
⚠️ **MAKE A BACKUP OF YOUR LINKACE, INCLUDING THE DATABASE!!!** ⚠️  
There will be absolutely no help to restore your old LinkAce installation and database if you have no backup!
{{</ alert >}}

## Breaking changes

- LinkAce v2 now supports multiple users and comes with a more sophisticated system for the visibility of links, lists, tags and notes.
  - All entries that are currently marked as `private` will remain as such.
  - If you enable Guest Mode before the upgrade, links marked as `public` will stay public.  
    However, if you have Guest Mode disabled, public links will become `internal`. This means they are visible to all logged-in users, but not to guests.
- Your current user will become the primary administrator who can now control some system settings, as well as inviting users to LinkAce.
- The API was updated to version `v2`. Any existing integrations must be checked and adjusted if needed. The documentation can be found [here]({{< param "ApiDocsV2" >}}).


## Upgrade a Docker installation

### 1. Prepare your current installation

After taking a backup, stop your current containers:
```
docker compose down
```

### 2. Adjust the docker-compose.yml file

LinkAce no longer provides the advanced Docker image. LinkAce is now available as a complete Docker container including a webserver.
If you are using `linkace/linkace:simple` or `linkace/linkace:php-nginx`, replace the image name with `linkace/linkace:2.x`.

#### Migrating an advanced installation

If you have a service called `nginx` in your docker-compose.yml file, please download the Docker setup package and replace your existing `docker-compose.yml` file. Do NOT overwrite your .env file!

👉 [**linkace-docker.zip**](https://github.com/Kovah/LinkAce/releases/latest)

Alternatively, you can take a look at the [docker-compose.yml](https://github.com/Kovah/LinkAce/blob/2.x/docker-compose.production.yml) and [.env](https://github.com/Kovah/LinkAce/blob/2.x/.env.docker.production) files directly and adopt it to your own setup.

{{< alert type="warning" >}}
If you used LinkAce directly with SSL certificates: a migration of existing certificates is not possible. Please consult the [steps to configure HTTPS with Docker]({{< relref path="docs/v2/setup/setup-with-docker.md#advanced-configuration" >}}) for all needed changes after finishing the upgrade.
{{</ alert >}}

### 3. Running the migration

After adjusting the docker-compose.yml file or your personal setup, restart your container:
```
docker compose up -d
```

Now, run the database migrations and delete the current cache. The migration can take quite a while depending on your amount of links, lists and tags saved.
```
docker compose exec app php artisan migrate
docker compose exec app php artisan cache:clear
```
You may get a warning about running the migration in production mode. You should confirm the migration by answering with `yes`.


## Upgrade a non-Docker installation

1. Get the latest version of LinkAce by downloading the package from the [releases page](https://github.com/Kovah/LinkAce/releases).
   Overwrite all existing files with the new ones. If you want to keep your log files, skip the `storage/logs` folder.
2. Run the database migrations which are needed after all updates and delete the current cache:
    ```
    php artisan migrate
    php artisan cache:clear
    ```
   You may get a warning about running the migration in production mode. You should confirm the migration by answering with `yes`.
   This process will take a while.
