---
title: Troubleshooting
description: If LinkAce does not work as expected, start here to collect useful diagnostics and fix common setup, cron, mail, import, proxy, and permission issues.
---

If LinkAce does not work as expected, start with the checks below. They help you find the exact error and make support requests much easier to answer.

## Start here

### 1. Check the application logs

If LinkAce is running, open **System Logs** from the user menu. If LinkAce is not reachable, read the same logs from `storage/logs` on the server.

For Docker setups:

```bash
# Show running containers and their names
docker compose ps

# Show the application container logs
docker compose logs app

# Open a shell in the application container
docker compose exec app ash

# Read LinkAce logs from inside the container
ls -lah /app/storage/logs
cat /app/storage/logs/laravel-YYYY-MM-DD.log
```

Container names may differ in Portainer, Unraid, Synology, or custom Compose files. If `docker compose exec app ash` does not work, run `docker ps` and use the actual LinkAce container name:

```bash
docker exec -it [your LinkAce container name] ash
```

### 2. Enable debug mode temporarily

Set this in your `.env` file, restart LinkAce, and try the failing action again:

```bash
APP_DEBUG=true
```

After troubleshooting, set it back to `false`.

{{< alert type="warning" >}}
Do not leave `APP_DEBUG=true` enabled on a public instance. Debug mode may expose internal details in error pages.
{{</ alert >}}

### 3. Run the LinkAce debug command

The debug command shows the LinkAce version, Laravel version, PHP version, trusted host configuration, trusted proxy configuration, database target, and writable paths.

```bash
# Docker
docker compose exec app php artisan debug

# PHP installation
php artisan debug
```

The command only runs when `APP_DEBUG=true`.

### 4. Check background tasks

Many features are processed by the scheduler: imports, link checks, Wayback Machine backups, and application backups. Confirm that the cron is configured as described in [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}).

For Docker setups, you can test one scheduler run manually:

```bash
docker compose exec app php artisan schedule:run
```

For PHP installations:

```bash
php artisan schedule:run
```

### 5. Test email separately

Password resets, backup notifications, and dead-link notifications need working mail settings. Test them with:

```bash
# Docker
docker compose exec app php artisan mail:check

# PHP installation
php artisan mail:check
```

See [Advanced Settings]({{< relref path="docs/v2/configuration/env-settings.md#mail-configuration" >}}) for the mail variables.

---

## Common issues

### LinkAce shows `400 Bad Request`

This is usually a host or proxy configuration issue.

First check:

```bash
docker compose exec app php artisan debug
```

Look at the **Trusted Hosts** and **Trusted Proxies** sections. Common causes are:

- `APP_URL` is still `http://localhost`.
- The URL scheme is wrong, for example `http://` in `.env` while users open LinkAce via `https://`.
- The reverse proxy forwards a host that does not match `APP_URL` or `TRUSTED_HOSTS`.
- A Docker or Portainer stack defines variables, but the LinkAce container does not actually receive them.

Relevant settings:

```bash
APP_URL=https://links.example.com
TRUSTED_HOSTS=links.example.com
TRUSTED_PROXIES=192.0.2.10
```

Set `TRUSTED_PROXIES` to the IP address or subnet of your reverse proxy. Only use `TRUSTED_PROXIES=*` when LinkAce is reachable only through a trusted proxy layer and you understand that all forwarded proxy headers will be accepted.

When using a reverse proxy, make sure it forwards the original host and protocol. See [running LinkAce behind a proxy]({{< relref path="docs/v2/setup/setup-with-docker.md#running-linkace-behind-a-proxy--load-balancer" >}}).

### LinkAce shows `419 Page Expired` or `CSRF token mismatch`

This usually means the browser session cookie does not match the URL used to access LinkAce.

Check:

- `APP_URL` matches the public URL exactly.
- Your reverse proxy sends the correct `Host` and `X-Forwarded-Proto` headers.
- You are not switching between different hostnames, IP addresses, or schemes in the same browser session.
- If LinkAce is intentionally served over plain HTTP, `SESSION_SECURE_COOKIE` is not set to `true`.

After changing `.env`, restart LinkAce and clear configuration caches if needed:

```bash
docker compose exec app php artisan config:clear
docker compose exec app php artisan cache:clear
```

### LinkAce does not start or only shows a blank page

Start with logs from Docker or your web server. Then run the debug command if possible.

Common causes:

- Required PHP extensions are missing on PHP installations.
- `.env`, `storage/`, `storage/logs/`, or `storage/framework/views/` are not writable by the user running LinkAce.
- The web server does not point to LinkAce's `public/` directory.
- LinkAce is installed in a subdirectory instead of its own virtual host or subdomain. Subdirectory setups are not supported.

For PHP installations, the web server user must be able to write to the storage directory:

```bash
cd /path/to/linkace
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R u+rwX,g+rwX storage bootstrap/cache
```

Adjust `www-data` if your web server uses another user.

### The setup cannot write `.env`

The setup writes database and application values to `.env`. The file must be writable during setup.

For PHP installations:

```bash
cd /path/to/linkace
sudo chown www-data:www-data .env
sudo chmod u+rw .env
```

For Docker setups with a mounted `.env` file, permissions on the host are shared into the container. Identify the user used by the container and make the mounted file writable for that user:

```bash
APP_UID="$(docker compose run --rm --entrypoint id app -u www-data)"
APP_GID="$(docker compose run --rm --entrypoint id app -g www-data)"
sudo chown "$APP_UID:$APP_GID" .env
chmod u+rw .env
```

After setup, you may make the file read-only for the container user again:

```bash
chmod u-w .env
```

### Database setup fails

Common error messages include `Access denied`, `Connection refused`, `Can't connect to server`, or `Database could not be configured`.

Check:

- `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` in `.env`.
- In the standard Docker Compose setup, `DB_HOST` should be the Compose service name, usually `db`.
- In a PHP setup where the database runs on the same host, `DB_HOST` is often `127.0.0.1` or `localhost`.
- If the database password contains characters like `$`, `'`, `"`, `\`, or `?`, wrap it in double quotes in `.env`.
- If you use Docker or Portainer environment variables instead of a mounted `.env` file, confirm the LinkAce container receives those variables.

Example:

```bash
DB_PASSWORD="my$superSecret'DBPassword'"
```

If the error mentions TLS or SSL, check your database server version and the database SSL settings in [Advanced Settings]({{< relref path="docs/v2/configuration/env-settings.md#advanced-database-configuration" >}}). Some MariaDB/MySQL client and server combinations require explicitly configuring SSL mode.

{{< alert type="warning" >}}
Do not remove Docker database volumes on an existing installation unless you have a verified backup and understand that this deletes the database. For a brand-new failed test setup, deleting the database volume can be a valid reset, but it is a destructive operation.
{{</ alert >}}

### Password reset emails do not arrive

Run the mail check command first:

```bash
docker compose exec app php artisan mail:check
```

Check:

- `MAIL_MAILER`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, and `MAIL_ENCRYPTION`.
- `MAIL_FROM_ADDRESS` is accepted by your mail provider.
- Your provider allows SMTP from the server running LinkAce.
- `MAIL_VERIFY_TLS=false` is only used for trusted internal test environments with self-signed certificates.

{{< alert type="warning" >}}
Disabling TLS verification weakens mail transport security. Prefer a valid certificate or trusted CA. Only use `MAIL_VERIFY_TLS=false` when you understand the risk and control the SMTP server.
{{</ alert >}}

If password reset emails are not available, use the CLI password reset command from [CLI Commands]({{< relref path="docs/v2/cli/_index.md#reset-a-user-password" >}}).

### Imports stay in the queue

Imports are queued and processed by the scheduler. If the import queue does not move, cron is usually not running.

Check:

```bash
docker compose exec app php artisan schedule:run
```

Then reload the Import Queue in LinkAce. Also check `storage/logs` for failed import jobs.

For large imports:

- Keep the browser open until LinkAce confirms that links were queued.
- Give the scheduler time to process all jobs.
- Use the CLI import command for large bookmark files.
- Use `--skip-meta-generation` if many imported URLs are slow or unreachable and you only need the saved URLs first.

See [Import and Export]({{< relref path="docs/v2/configuration/import.md" >}}) and [CLI Commands]({{< relref path="docs/v2/cli/_index.md#import-links-from-a-html-bookmarks-file" >}}).

### Search returns stale or no results

If LinkAce uses the built-in database search, no external search service or index setup is needed. If LinkAce uses Meilisearch or another external search engine, stale or missing results usually mean the search service is unreachable or the index needs to be rebuilt.

For the standard Docker setup, check:

```bash
docker compose ps
docker compose logs meilisearch
docker compose exec app php artisan search:setup
docker compose exec app php artisan search:rebuild
```

Also verify these `.env` values for the standard Docker setup:

```bash
APP_SEARCH_DRIVER=meilisearch
MEILISEARCH_HOST=http://meilisearch:7700
MEILISEARCH_KEY=ChangeThisToASecurePassword!
```

`MEILISEARCH_KEY` must match the key used by the Meilisearch container as `MEILI_MASTER_KEY`. If you use Docker or Portainer environment variables instead of a mounted `.env` file, confirm that both the LinkAce and Meilisearch containers receive the matching values.

For PHP installations, run the same Artisan commands without Docker:

```bash
php artisan search:setup
php artisan search:rebuild
```

After changing `.env`, restart LinkAce and clear cached configuration if needed.

### Link checks or Wayback Machine backups do not run

Both features depend on the scheduler. Confirm the cron runs every minute as described in [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#setting-up-the-cron" >}}).

Also check:

- Link checks only run periodically and process links in batches.
- Wayback Machine backups are scheduled after links are added and may take time to appear on archive.org.
- Private links are not sent to the Wayback Machine by default. Check your [User Settings]({{< relref path="docs/v2/configuration/user-settings.md#wayback-machine-backups" >}}).

### Metadata or thumbnails are missing

LinkAce fetches metadata from the saved URL. If the remote site blocks requests, responds slowly, has no Open Graph image, or resolves to a private IP range, LinkAce falls back to basic link data.

Check:

- `storage/logs` for warnings from metadata generation.
- Whether the target website is reachable from the server running LinkAce.
- `APP_USER_AGENT`, `META_GENERATION_TIMEOUT`, and `META_GENERATION_CUSTOM_HEADERS` in [Advanced Settings]({{< relref path="docs/v2/configuration/env-settings.md#meta-generation" >}}).
- `META_ALLOW_PRIVATE_IP_RANGES=true` only if you intentionally save internal services.

{{< alert type="warning" >}}
Allowing metadata requests to private IP ranges can expose internal services to server-side requests. Only enable it for trusted private deployments.
{{</ alert >}}

### Guest users see too much or too little

Guest access has two parts:

- The system-wide guest access setting controls whether guests can browse public content.
- Each link, tag, and list has its own visibility.

Guest users can only see items that are not private or internal. If a public list is missing links, check the visibility of the links and tags inside it.

See [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#guest-access-and-settings" >}}) and [User Settings]({{< relref path="docs/v2/configuration/user-settings.md" >}}).

### SSO login fails

Check the application logs first. Then verify:

- The SSO provider URL is reachable from the LinkAce server.
- The client ID and secret match the provider.
- Redirect URLs in the provider match the public `APP_URL`.
- Reverse proxy headers preserve the correct scheme and host.

If you ask for help, include the SSO provider name, the public LinkAce URL, the relevant `.env` variable names without secrets, and the log error.

### Backups fail

Run a manual backup and read the full error:

```bash
docker compose exec app php artisan backup:run
```

Common causes:

- `/app/storage/app/backups` is mounted from the host but owned by `root` or another user the container cannot write as.
- Mail notifications are enabled, but mail is not configured.
- S3-compatible storage settings are incomplete.
- Database dump fails because of database SSL/client compatibility.
- The scheduler is not running, so automated backups never start.

For local Docker backups, make the host backup directory writable by the LinkAce container user. Prefer fixing ownership over giving the directory broad permissions:

```bash
mkdir -p backups
APP_UID="$(docker compose run --rm --entrypoint id app -u www-data)"
APP_GID="$(docker compose run --rm --entrypoint id app -g www-data)"
sudo chown -R "$APP_UID:$APP_GID" backups
chmod u+rwx backups
```

If your setup does not use Docker Compose, inspect the running container directly:

```bash
docker exec -it [your LinkAce container name] id www-data
```

See [Application Backups]({{< relref path="docs/v2/configuration/application-backups.md" >}}).

---

## Asking for help

If the steps above do not solve the issue, search the [community forum]({{< relref path="community.md" >}}) for the exact error message. If you open a new discussion, include:

- LinkAce version and setup method: Docker, PHP, Portainer, Unraid, Synology, or another platform.
- The public URL format you use, without private tokens.
- Whether LinkAce is behind a reverse proxy, load balancer, Cloudflare, or an SSO provider.
- The relevant `.env` variable names and values, with secrets removed.
- The output of `php artisan debug` if debug mode can run.
- The related LinkAce logs from `storage/logs`.
- Docker Compose snippets or web server configuration when the issue involves startup, proxying, HTTPS, or containers.

Use a paste service for long logs and remove passwords, API keys, SSO secrets, cron tokens, and backup credentials before posting.

LinkAce is a community project. Clear diagnostics, exact error messages, and a short explanation of what you already tried make it much easier for others to help.
