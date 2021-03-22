---
title: Application Backups
weight: 50
---

LinkAce provides an easy way to back up the whole application including the database to any S3-compatible service, including Amazon AWS S3, Minio or Backblase B2. Under the hood LinkAce uses the [**Spatie Backup package**](https://spatie.be/docs/laravel-backup/v6/introduction). Please consult the documentation of the package for advanced configuration.

By default, the backup system will periodically purge old backups. For more details, [read the default configuration](https://spatie.be/docs/laravel-backup/v6/cleaning-up-old-backups/overview#determining-which-backups-should-be-deleted).


## Configure the backups

To back up LinkAce to S3, change `BACKUP_ENABLED=false` to `BACKUP_ENABLED=true` in your `.env` file. You can find other settings directly in your .env file.
Also, define the key ID, the access key, the region and your bucket name here if you want to use AWS S3 for backups.

```
AWS_ACCESS_KEY_ID=ZG25U...
AWS_SECRET_ACCESS_KEY=V8pu...
AWS_DEFAULT_REGION=eu-central-1
AWS_BUCKET=linkace
```


## Using a third-party S3-compatible service

Instead of Amazon AWS S3, you can use any S3-compatible service. To connect to the service instead of AWS, you have to set the correct endpoint in your `.env` file. Near your other AWS_ settings, add the following line and replace the URL with your own service URL:

```
AWS_ENDPOINT=https://minio.example.com
```
