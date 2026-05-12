---
title: Operations Guide
---

Use this checklist to keep a LinkAce instance healthy after setup.

## Daily or Weekly Checks

- Check whether a new LinkAce version is available.
- Confirm cron still runs.
- Check System Logs for new errors.
- Review Audit Log entries after administrative changes.
- Confirm backups are still created and stored where expected.
- Test email after changing SMTP settings or mail providers.
- Review system API tokens and revoke tokens that are no longer needed.

## Verify Cron

Cron must run every minute. It processes imports, link checks, Wayback Machine backups, and application backups.

In the application, open **System Settings** from the user menu and check the [System Cron]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}) section. It shows the cron token and the cron URL.

You can test one scheduler run manually:

```bash
# Docker
docker compose exec app php artisan schedule:run

# PHP installation
php artisan schedule:run
```

If imports remain queued or automated checks do not run, start with [Troubleshooting]({{< relref path="docs/v2/general/troubleshooting.md#imports-stay-in-the-queue" >}}).

## Test Email

Email is used for password resets, invitations, dead-link notifications, and backup notifications.

```bash
# Docker
docker compose exec app php artisan mail:check

# PHP installation
php artisan mail:check
```

If the test email fails, check the mail settings in [Advanced Settings]({{< relref path="docs/v2/configuration/env-settings.md#mail-configuration" >}}).

## Check Update Status

Open **System Settings** and review the [Update Checks]({{< relref path="docs/v2/configuration/system-settings.md#update-checks" >}}) section. LinkAce checks the latest release information and compares it with the installed version.

If the check fails, verify that the server running LinkAce can reach the internet and check System Logs for details.

## Read System Logs

Admin users can open **System Logs** from the user menu.

Use logs when:

- LinkAce shows a 500 error.
- setup, imports, mail, backups, or API requests fail.
- a cron-dependent task does not finish.
- metadata or thumbnails are missing for many links.

If the web interface is not available, read logs from `storage/logs` on the server or from `/app/storage/logs` inside the Docker container.

## Review Audit History

Admin users can open **Audit Log** from the user menu.

Use audit history to review:

- system events,
- settings changes,
- user changes,
- cron token regeneration,
- blocked, unblocked, deleted, or restored users.

Audit history helps explain what changed before a behavior change or support request.

## Confirm Backups

Use [Application Backups]({{< relref path="docs/v2/configuration/application-backups.md" >}}) for real recovery backups. A LinkAce export is useful for moving links to another tool, but it is not a complete backup of the application.

A useful backup plan includes:

- the database,
- uploaded and generated files in storage,
- the `.env` file or equivalent environment configuration,
- Docker Compose or web server configuration,
- backup encryption passwords, if configured.

You can run a manual backup to confirm the backup system works:

```bash
# Docker
docker compose exec app php artisan backup:run

# PHP installation
php artisan backup:run
```

Check that the backup file appears in the configured local folder or S3-compatible storage.
