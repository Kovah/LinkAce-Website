---
title: Post-Setup Steps
weight: 60
---

After the setup wizard is finished, LinkAce can save links immediately. Use this checklist to enable the features most users expect: correct generated URLs, email, cron, backups, visibility defaults, imports, and the Bookmarklet.

If you want a guided first session after completing these checks, continue with [First Steps After Setup]({{< relref path="docs/v2/getting-started/first-steps.md" >}}).

## Post-Setup Checklist

### 1. Set `APP_URL`

Set `APP_URL` in your `.env` file or environment variables to the exact URL users open in the browser.

```bash
APP_URL=https://links.example.com
```

This value is used for generated links, emails, trusted host checks, and reverse-proxy setups. If LinkAce shows `400 Bad Request` or generates wrong URLs, start with [Troubleshooting]({{< relref path="docs/v2/general/troubleshooting.md#linkace-shows-400-bad-request" >}}).

### 2. Configure Mail

Email is needed for password resets, user invitations, dead-link notifications, and backup notifications.

Configure the mail variables in `.env` or your environment. The full list is available in [Advanced Settings]({{< relref path="docs/v2/configuration/env-settings.md#mail-configuration" >}}).

Common SMTP settings:

```bash
MAIL_FROM_ADDRESS=links@example.com
MAIL_FROM_NAME=LinkAce
MAIL_MAILER=smtp
MAIL_HOST=smtp.example.com
MAIL_PORT=587
MAIL_USERNAME=links@example.com
MAIL_PASSWORD=change-me
MAIL_ENCRYPTION=tls
```

### 3. Test Mail

Run the mail check command:

```bash
# Docker
docker compose exec app php artisan mail:check

# PHP installation
php artisan mail:check
```

If the test fails, see [Troubleshooting Mail]({{< relref path="docs/v2/general/troubleshooting.md#password-reset-emails-do-not-arrive" >}}).

### 4. Configure Cron

Cron is required for imports, automated link checks, Wayback Machine backups, and application backups.

Open **System Settings** from the user menu. The **System Cron** section shows the cron token and cron URL.

Your cron must run every minute. See [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}) for examples.

You can test one scheduler run manually:

```bash
# Docker
docker compose exec app php artisan schedule:run

# PHP installation
php artisan schedule:run
```

### 5. Configure Backups

Exports are not full backups. Configure application backups if you want a recovery path for the database and application data.

See [Application Backups]({{< relref path="docs/v2/configuration/application-backups.md" >}}) for local and S3-compatible backup setup.

### 6. Choose Guest Access

Open **System Settings** and decide whether guests should be able to browse public links, lists, and tags.

Leave guest access disabled if LinkAce should be private. If you enable it, review which links, lists, and tags are public.

See [Guest Access and Settings]({{< relref path="docs/v2/configuration/system-settings.md#guest-access-and-settings" >}}).

### 7. Choose Default Visibility

Open **User Settings** and choose default visibility for new links, lists, tags, and notes.

For a private archive, set defaults to **Private**. For a shared team instance, **Internal** may be more useful. You can still change visibility per item while creating or editing it.

See [User Settings: Privacy Settings]({{< relref path="docs/v2/configuration/user-settings.md#privacy-settings" >}}).

### 8. Import Links or Install the Bookmarklet

If you already have bookmarks, import an HTML bookmark export from your browser. See [Import Browser Bookmarks]({{< relref path="docs/v2/recipes/import-browser-bookmarks.md" >}}).

If you want to save pages while browsing, install the Bookmarklet from **User Settings**. See [Bookmarklet]({{< relref path="docs/v2/application/bookmarklet.md" >}}).

## Security Tips

- If you expose LinkAce to the internet, configure your reverse proxy or web server carefully and set `APP_URL` correctly.
- Metadata is not fetched for private IP ranges by default. Only enable `META_ALLOW_PRIVATE_IP_RANGES` for trusted private deployments. See [Troubleshooting Metadata]({{< relref path="docs/v2/general/troubleshooting.md#metadata-or-thumbnails-are-missing" >}}).
- Keep backups and `.env` secrets out of public directories and source control.
