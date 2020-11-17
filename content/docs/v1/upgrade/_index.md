---
title: LinkAce Upgrade guide
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
5. Run the database migrations:
    ```
    docker exec -it linkace_php_1 bash -c "php artisan migrate"
    ```

Make sure to check the version-specific upgrade guides to make sure you don't miss additional important steps.

### Upgrade a non-Docker installation

1. Get the latest files of LinkAce, depending on how your got them in the first place. Either by downloading them from the [releases page](https://github.com/Kovah/LinkAce/releases) or via Git.
2. Run updates for both Composer and NPM:
    ```
    composer install
    npm install
    ```
3. Generate the new JavaScript and CSS files by running this command:
    ```
    npm run production
    ```
4. Run the database migrations:
    ```
    php artisan migrate
    ```

Make sure to check the version-specific upgrade guides to make sure you don't miss additional important steps.


---


## Version-specific upgrades

#### from version v0.0.43 and below to higher

In your `.env` file: please rename `BACKUP_DISK=cloud` to `BACKUP_DISK=s3`. If you have backup notifications enabled, please make sure to set a `BACKUP_NOTIFICATION_EMAIL`.

#### from version v0.0.28 and below to higher

Please add `SETUP_COMPLETED=true` to your `.env` file to prevent the setup from starting automatically.
