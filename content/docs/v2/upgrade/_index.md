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
    ```
   You may get a warning about running the migration in production mode. You should confirm the migration by answering with `yes`.

Make sure to check the version-specific upgrade guides to make sure you don't miss additional important steps.


### Upgrade a non-Docker installation

1. Get the latest version of LinkAce by downloading the package from the [releases page](https://github.com/Kovah/LinkAce/releases).
   Overwrite all existing files with the new ones. If you want to keep your log files, skip the `storage/logs` folder.
4. Run the database migrations which are needed after all updates and delete the current cache:
    ```
    php artisan migrate
    php artisan cache:clear
    ```
   You may get a warning about running the migration in production mode. You should confirm the migration by answering with `yes`.
Make sure to check the version-specific upgrade guides to make sure you don't miss additional important steps.


---


## Version-specific upgrades

### to version 1.10.0

There should be no reason to change something specific when upgrading to version 1.10.  
However, if you upgraded LinkAce and the setup starts, stop immediately and report this in the [discussion forum](https://github.com/Kovah/LinkAce/discussions)!

### to version 1.6.0

- The command for cleaning link histories changed from `link:cleanup-histories` to `links:cleanup-histories`.
- You may want to run the [links:update-thumbnails]({{< relref path="docs/v1/cli" >}}) command to generate thumbnails for all existing links.

### to version 1.4.1

Please add the following two settings to your .env file and fill them with your desired values:
- `MAIL_FROM_ADDRESS` (Address which is used to send emails from.)
- `MAIL_FROM_NAME` (Name that should be displayed as the sender.)

### to version 1.4.0

The Docker image for the simple setup was renamed from `linkace/linkace:php-nginx` to `linkace/linkace:simple`. Please change this image name in your `docker-compose.yml` file.

##### Required change for simple Docker setup
- You have to change the destination port from 8080 to 80 in your docker-compose file:
  `"0.0.0.0:80:8080"` to `"0.0.0.0:80:80"`
- Remove the following line from the docker-compose file before pulling the new image and starting LinkAce:
   `./nginx.conf:/opt/docker/etc/nginx/conf.d/linkace.conf:ro`

### from version v0.0.43 and below to higher

In your `.env` file: please rename `BACKUP_DISK=cloud` to `BACKUP_DISK=s3`. If you have backup notifications enabled, please make sure to set a `BACKUP_NOTIFICATION_EMAIL`.

### from version v0.0.28 and below to higher

Please add `SETUP_COMPLETED=true` to your `.env` file to prevent the setup from starting automatically.
