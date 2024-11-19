---
title: Application Backups
weight: 150
---

LinkAce provides an easy way to back up the whole application including the database to the local filesystem, or any S3-compatible service, including Amazon AWS S3, Minio or Backblaze B2. Under the hood LinkAce uses the [**Spatie Backup package**](https://spatie.be/docs/laravel-backup/v8/introduction). Please consult the documentation of the package for advanced configuration.

By default, the backup system will periodically purge old backups. For more details, [read the default configuration](https://spatie.be/docs/laravel-backup/v6/cleaning-up-old-backups/overview#determining-which-backups-should-be-deleted).


## Configure the backups

{{< alert type="warning" >}}
Please note that the [system cron]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}) should be configured for automatic backups to work correctly. However, you may also create backups manually, see below.
{{</ alert >}}

### Edit your .env file / environment variable

Add the following line to your .env file or environment variables:

```
BACKUP_ENABLED=true
```

### Edit your docker-compose.yml

First, create a backup folder to store the backups. The folder must be writable for other users, otherwise LinkAce won't be able to properly store the resulting files.

```bash
$ mkdir ./backups
$ chmod 0766 ./backups
```

Now, open the `docker-compose.yml` file and remove the `#` in front of the `- ./backups:/app/storage/app/backups` line like this:

```yaml {hl_lines=7}
services:
  # --- LinkAce
  app:
    image: docker.io/linkace/linkace:latest
    volumes:
      - ./.env:/app/.env
      - ./backups:/app/storage/app/backups
```

If you run a custom Docker-based setup (e.g. via Portainer), please adjust your container to mount a writable directory into `/app/storage/app/backups`.

That's it. LinkAce will now create backups every night at 2am.

---

## Configuration for an S3-compatible service

To back up LinkAce to S3, add the following settings to your .env file:

| .env setting | Possible values | Default value | Description |
|:--|:--|:--|:--|
| `BACKUP_ENABLED` | `true`, `false` | `false` | Set to true to enable the application backups |
| `BACKUP_DISK` | `local_backups`, `s3` | `local_backups` | The storage for backups: `local_backups` saves the files to `/storage/app/backups`, `s3` saves to your configured S3 storage |
| `BACKUP_NOTIFICATION_EMAIL` | any email address | `your@email.com` | Set a valid email address to receive notification about backups. |
| `BACKUP_MAX_SIZE` | any number | `265` | The maximum size of all backups in MB. Once reached the oldest backups will be deleted. |
| `BACKUP_ARCHIVE_PASSWORD` | any string | none | Protect your backups with a password. |

if you want to use AWS S3 for backups, define the key ID, the access key, the region and your bucket name here. any S3

```
AWS_ACCESS_KEY_ID=ZG25U...
AWS_SECRET_ACCESS_KEY=V8pu...
AWS_DEFAULT_REGION=eu-central-1
AWS_BUCKET=linkace
```

### Using a third-party S3-compatible service

Instead of Amazon AWS S3, you can use any S3-compatible service. To connect to the service instead of AWS, you have to set the correct endpoint in your `.env` file. Near your other AWS_ settings, add the following line and replace the URL with your own service URL:

```
AWS_ENDPOINT=https://minio.example.com
```

---

## Manually creating backups

Instead of relying on the automated backup process, you may run backups manually:

**Run a backup via Docker**

```
$ docker exec linkace-app-1 php artisan backup:run
```

**Run a backup via PHP**

```
$ cd /path/to/your/linkace
$ php artisan backup:run
```
