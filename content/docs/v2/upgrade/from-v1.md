---
title: Upgrade from LinkAce v1
---

Please follow these instructions to upgrade LinkAce to the new version 2.

## Preparation

{{< alert type="danger" >}}
⚠️ **MAKE A BACKUP OF YOUR LINKACE, INCLUDING THE DATABASE!!!** ⚠️  
There will be absolutely **no help to restore** your old LinkAce installation and database if you have no backup!
{{</ alert >}}

## Breaking changes

- The LinkAce Docker image was renamed `linkace/linkace:simple` or `linkace/linkace:php-nginx` to `linkace/linkace`. There is no advanced image anymore.
- LinkAce v2 now supports multiple users and comes with a more sophisticated system for the visibility of links, lists, tags and notes.
  - All entries that are currently marked as `private` will remain as such.
  - If you enable Guest Mode before the upgrade, links marked as `public` will stay public.  
    However, if you have Guest Mode disabled, public links will become `internal`. This means they are visible to all logged-in users, but not to guests.
  - Your current user will become the primary administrator who can now control advanced system settings, as well as inviting new users to LinkAce.
- The API was updated to version `v2`. Any existing integrations must be checked and adjusted if needed. The documentation can be found [here]({{< param "ApiDocsV2" >}}).
- `MAIL_DRIVER` needs to be replaced with `MAIL_MAILER`, but the values stays the same. Example: `MAIL_DRIVER=smtp` becomes `MAIL_MAILER=smtp`.

## Select your current installation method

{{< v2-upgrade/method-select >}}

{{< v2-upgrade/block-start id="docker-simple" >}}
## Upgrade a simple Docker installation

LinkAce no longer has a dedicated "simple" image. Thus, the Docker image was renamed from `linkace/linkace:simple` or `linkace/linkace:php-nginx` to `linkace/linkace`.

### 1. Prepare your current installation

After taking a backup, stop your current containers:
```
docker compose down
```

### 2. Adjust the docker-compose.yml file

In your `docker-compose.yml` file, rename the Docker image of LinkAce from `linkace/linkace:simple` or `linkace/linkace:php-nginx` to `linkace/linkace`. The port used inside the container stays at `80` and must not be changed.

You can take a look at the [docker-compose.yml](https://github.com/Kovah/LinkAce/blob/2.x/docker-compose.production.yml) and [.env](https://github.com/Kovah/LinkAce/blob/2.x/.env.docker.production) files directly and adopt it to your own setup if needed.

{{< alert type="warning" >}}
If you used LinkAce directly with SSL certificates: a migration of existing certificates is not possible. Please consult the [steps to configure HTTPS with Docker]({{< relref path="docs/v2/setup/setup-with-docker#advanced-configuration" >}}) for all needed changes after finishing the upgrade.
{{</ alert >}}

### 3. Running the data migration

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
{{< v2-upgrade/block-end >}}


{{< v2-upgrade/block-start id="docker-manual" >}}
## Upgrade a manual Docker installation

As there was no specific guide for installing LinkAce v1 via `docker run` or any other non-Compose environment, we can't give general advice on upgrading your installation.

### 1. The Docker image was renamed

Whatever your Docker setup looks like, you have to rename your used LinkAce image from `linkace/linkace:simple` or `linkace/linkace:php-nginx` to `linkace/linkace`.

If you used `linkace/linkace` before, there is no longer an advanced installation method. LinkAce ships in a single Docker image containing a web server ready for production use. You likely have to change the deployment and adopt the new structure and used ports.

You can take a look at the [docker-compose.yml](https://github.com/Kovah/LinkAce/blob/2.x/docker-compose.production.yml) and [.env](https://github.com/Kovah/LinkAce/blob/2.x/.env.docker.production) files directly to check how LinkAce is now supposed to be used.

{{< alert type="warning" >}}
If you used LinkAce directly with SSL certificates: a migration of existing certificates is not possible. Please consult the [steps to configure HTTPS with Docker]({{< relref path="docs/v2/setup/setup-with-docker.md#advanced-configuration" >}}) for all needed changes after finishing the upgrade.
{{</ alert >}}

### 2. Running the data migration

After you upgraded your LinkAce Docker setup, the following commands must be run inside the LinkAce container:

- `php artisan migrate`
- `php artisan cache:clear`

This could be done by running `docker run -it linkace php artisan migrate`, for example, but depends on your environment.

{{< v2-upgrade/block-end >}}


{{< v2-upgrade/block-start id="docker-advanced" >}}
## Upgrade an advanced Docker installation

There is no longer an advanced installation method. LinkAce ships in a single Docker image containing a web server ready for production use.

### 1. Prepare your current installation

After taking a backup, stop your current containers:
```
docker compose down
```

### 2. Adjust the docker-compose.yml file

Please download the Docker setup package and replace your existing `docker-compose.yml` file. Do NOT overwrite your .env file!

👉 [**linkace-docker.zip**](https://github.com/Kovah/LinkAce/releases/latest)

Alternatively, you can take a look at the [docker-compose.yml](https://github.com/Kovah/LinkAce/blob/2.x/docker-compose.production.yml) and [.env](https://github.com/Kovah/LinkAce/blob/2.x/.env.docker.production) files directly and adopt it to your own setup.

{{< alert type="warning" >}}
If you used LinkAce directly with SSL certificates: a migration of existing certificates is not possible. Please consult the [steps to configure HTTPS with Docker]({{< relref path="docs/v2/setup/setup-with-docker.md#advanced-configuration" >}}) for all needed changes after finishing the upgrade.
{{</ alert >}}

### 3. Running the data migration

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
{{< v2-upgrade/block-end >}}


{{< v2-upgrade/block-start id="php" >}}
## Upgrade a non-Docker installation

1. Get the latest version of LinkAce by downloading the package from the [releases page](https://github.com/Kovah/LinkAce/releases).
2. Place those files into a **new directory**! It is not sufficient to just overwrite the existing files!
3. Copy the .env file from your previous installation to the new directory.
4. Run the database migrations which are needed after all updates and delete the current cache:
    ```
    php artisan migrate
    php artisan cache:clear
    ```
   You may get a warning about running the migration in production mode. You should confirm the migration by answering with `yes`.
   This process will take a while.
{{< v2-upgrade/block-end >}}
