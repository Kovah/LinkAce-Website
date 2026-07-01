---
title: CLI Commands for LinkAce
description: LinkAce provides a set of command line tools for maintenance tasks.
menu:
  docs_v2:
    weight: 60
---

## Show debug information

run this command to show essential information about your LinkAce installation, including your current configuration, the configured database connection, and the results of some checks for required host configurations.

The command only runs when `APP_DEBUG=true` is set in your `.env` file.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan debug

# Direct container name
docker exec -it linkace_app_1 php artisan debug
```

**Run without Docker**
```
php artisan debug
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Register a user

This is helpful if you are not able to run the built-in setup LinkAce provides. The command will guide you through the process and ask for a username, an email and a password.  
You may append `--admin` to create an admin user.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan registeruser

# Direct container name
docker exec -it linkace_app_1 php artisan registeruser
```

**Run without Docker**
```
php artisan registeruser
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Reset a user password

If you lost your password or the login is not working for some reason, you may want to reset your password.
This is usually done by using the *Password forgotten?* link on the login page. However, this method only works
correctly if mail is set up.

To work around this issue, you can use the CLI command to reset your password.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan reset-password

# Direct container name
docker exec -it linkace_app_1 php artisan reset-password
```

**Run without Docker**
```
php artisan reset-password
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Update the thumbnails for all links

_Since v1.6.0_

This command updates the thumbnail for all links with the status "ok". This can take a long time, depending on the amount of links you have saved. Helpful if you upgrade from a previous version to version 1.6.0 and want to set the correct thumbnails for all links.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan links:update-thumbnails

# Direct container name
docker exec -it linkace_app_1 php artisan links:update-thumbnails
```

**Run without Docker**
```
php artisan links:update-thumbnails
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Import Links from a HTML bookmarks file

If you have very large bookmark exports, you may want to import all links from the command line. Use this command after storing your file in the `/storage` directory.

Possible Options:
- `--skip-meta-generation` - Whether the automatic generation of titles should be skipped.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan links:import [file name]

# Direct container name
docker exec -it linkace_app_1 php artisan links:import [file name]
```

**Run without Docker**
```
php artisan links:import [file name]
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Check the Email Configuration

_Since v2.0.0_

This command sends a test email to a given email address to check if email is correctly configured for your LinkAce setup.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan mail:check

# Direct container name
docker exec -it linkace_app_1 php artisan mail:check
```

**Run without Docker**
```
php artisan mail:check
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Prepare the External Search Engine

_Since v2.6.0_

This command prepares the configured external search engine. For Meilisearch, it syncs the index settings used by LinkAce. If LinkAce uses the built-in database search, no external setup is needed and the command exits without changes.

Run this after configuring `APP_SEARCH_DRIVER=meilisearch` or another external search driver.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan search:setup

# Direct container name
docker exec -it linkace_app_1 php artisan search:setup
```

**Run without Docker**
```
php artisan search:setup
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Rebuild the Search Index

_Since v2.6.0_

This command flushes and rebuilds the external search indexes for links, tags, and lists. Use it after changing the search driver, restoring a backup, importing existing data, or fixing stale search results. External search engines may finish indexing asynchronously after the command exits.

If LinkAce uses the built-in database search, no external index rebuild is needed and the command exits without changes.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan search:rebuild

# Direct container name
docker exec -it linkace_app_1 php artisan search:rebuild
```

**Run without Docker**
```
php artisan search:rebuild
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## View 2FA Recovery Codes

This command allows you to view the 2FA recovery codes for any user and can be used if 2 Factor Authentication cannot or should be reset.

**Run via Docker**
```
# Docker Compose service name
docker compose exec app php artisan 2fa:view-recovery-codes

# Direct container name
docker exec -it linkace_app_1 php artisan 2fa:view-recovery-codes
```

**Run without Docker**
```
php artisan 2fa:view-recovery-codes
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.
