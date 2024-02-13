---
title: Upgrade from LinkAce v2
---

## General upgrade guide

Please follow these instructions to upgrade LinkAce to the new version 2.


## Preparation

{{< alert type="danger" >}}
⚠️ **MAKE A BACKUP OF LINKACE, INCLUDING THE DATABASE!!!** ⚠️  
There will be absolutely no help to restore your old LinkAce installation and database in case of a failed migration!
{{</ alert >}}

## Notable changes

- LinkAce v2 now supports multiple users and comes with a more sophisticated system for the visibility of links, lists, tags and notes.
  - All entries that are currently marked as `private` will remain as such.
  - If you enable Guest Mode before the upgrade, links marked as `public` will stay public.  
    However, if you have Guest Mode disabled, public links will become `internal`. This means they are visible to all logged-in users, but not to guests.
- The way links are displayed changed a lot. The option to display Cards with more details is replaced with a generic card display. I deeply encourage you to check out the new styles and pick the one that ou like.


## Upgrade a Docker installation

1. Stop your current containers:
    ```
    docker compose down
    ```
2. LinkAce no longer provides the advanced Docker image. LinkAce is now available as a complete Docker container including a 
3. If you have a service called `nginx` in your docker-compose.yml file, remove this service completely.
   {{< alert type="warning" >}}
   Due to a change in the default web server, there is no upgrade guide if you are running LinkAce directly with SSL certificates to provide HTTPS. Please consult the [steps to configure HTTPS with Docker]({{< relref path="docs/v2/setup/setup-with-docker/advanced-configuration.md" >}}) for all needed changes.
   {{</ alert >}}
4. Pull the new image:
    ```
    docker pull linkace/linkace
    ```
5. Restart your container:
    ```
    docker compose up -d
    ```
6. Run the database migrations and delete the current cache:
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
