---
title: LinkAce Upgrade guide
menu:
  docs_v2:
    weight: 30
---

## General upgrade guide

Please follow these instructions to upgrade LinkAce to a newer version.

### Upgrade a Docker installation

LinkAce has its own update script which will guide you trough the update process. You can download the script from the repository: [update-docker.sh](https://github.com/Kovah/LinkAce/blob/master/update-docker.sh)

Alternatively, you can run all actions on your own. This might be helpful if you have a non-standard environment.

1. Stop your current containers:
    ```
    docker-compose down
    ```
2. This step only applies to the advanced setup method. Delete the current app volume, where `linkace_linkace_app`  is the name of your volume. You may find the exact name by running `docker volume ls`, the volume must end  with `linkace_app`.
    ```
    docker volume rm linkace_linkace_app
    ```
3. Pull the new image:
    ```
    docker pull linkace/linkace
    ```
4. Restart your container:
    ```
    docker-compose up -d
    ```
5. Run the database migrations and delete the current cache:
    ```
    docker exec -it linkace_app_1 php artisan migrate
    docker exec -it linkace_app_1 php artisan cache:clear
    docker exec -it linkace_app_1 php artisan settings:clear-cache
    ```
   You may get a warning about running the migration in production mode. You should confirm the migration by answering with `yes`.

Make sure to check the version-specific upgrade guides to make sure you don't miss additional important steps.


### Upgrade a non-Docker installation

1. Get the latest version of LinkAce by downloading the package from the [releases page](https://github.com/Kovah/LinkAce/releases).
   Overwrite all existing files with the new ones. If you want to keep your log files, skip the `storage/logs` folder.
2. Run the database migrations which are needed after all updates and delete the current cache:
    ```
    php artisan migrate
    php artisan cache:clear
    php artisan settings:clear-cache
    ```
   You may get a warning about running the migration in production mode. You should confirm the migration by answering with `yes`.
   Make sure to check the version-specific upgrade guides to make sure you don't miss additional important steps.


---


## Version-specific upgrades

### to version 2.6.0

The default Docker setup now includes Meilisearch and configures LinkAce to use it for search.

If you use the provided Docker Compose setup, compare your local `docker-compose.yml` and `.env` with the current files from the release package before upgrading. Make a verified backup before changing containers, volumes, or search settings.

To use the new default Meilisearch setup, add the `meilisearch` service and volume from the current Compose file, add `meilisearch` to the application `depends_on` list, and add these variables to `.env`:

```bash
APP_SEARCH_DRIVER=meilisearch
MEILISEARCH_HOST=http://meilisearch:7700
MEILISEARCH_KEY=ChangeThisToASecurePassword!
```

Use a secure value for `MEILISEARCH_KEY`. The same value must be passed to the Meilisearch container as `MEILI_MASTER_KEY`.

After starting the upgraded containers, prepare and rebuild the search index:

```bash
docker compose exec app php artisan search:setup
docker compose exec app php artisan search:rebuild
```

If you do not want to add Meilisearch, keep or set `APP_SEARCH_DRIVER=database`. Database search does not need an external service or index rebuild.

### to version 2.5.4

{{< alert type="danger" >}}
**LinkAce now requires you to add `APP_URL=https://my-linkace-domain.com` to your .env file or alternatively to your docker compose file.** Replace `https://my-linkace-domain.com` with the actual URL of your LinkAce instance.
{{</ alert >}}

This is needed to mitigate a possible security issue if you don't have trusted proxies configured, which is the default for LinkAce. Not adding this setting will break some features such as password reset emails.
