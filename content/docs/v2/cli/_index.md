---
title: CLI Commands for LinkAce
description: LinkAce provides a set of command line tools for maintenance tasks.
menu:
  docs_v2:
    weight: 60
---

## Register a user

This is helpful if you are not able to run the built-in setup LinkAce provides. At least one admin user must be created. The command will guide you through the process and ask for a username, an email and a password.

**Run via Docker**
```
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
docker exec -it linkace_app_1 php artisan links:update-thumbnails
```

**Run without Docker**
```
php artisan links:update-thumbnails
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Cleanup history entries for Links

Removes all but the last 5 entries in the link histories. Useful if you changed your links a lot in the latest time and want to clean up the histories a bit.
If a field is provided, only history entries of that field are deleted. Possible values are:
- `url`
- `title`
- `description`
- `is_private`
- `deleted_at`
- `revtags` (Changes for assigned Tags)
- `revlists` (Changes for assigned Lists)

**Run via Docker**
```
docker exec -it linkace_app_1 php artisan links:cleanup-histories [field]
```

**Run without Docker**
```
php artisan links:cleanup-histories [field]
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## Import Links from a HTML bookmarks file

If you have very large bookmark exports, you may want to import all links from the command line. Use this command after storing your file in the `/storage` directory.

Possible Options:
- `--skip-meta-generation` - Whether the automatic generation of titles should be skipped.
- `--skip-check` - Whether the links checking should be skipped afterwards.

**Run via Docker**
```
docker exec -it linkace_app_1 php artisan links:import [file name]
```

**Run without Docker**
```
php artisan links:import [file name]
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.


## View 2FA Recovery Codes

This command allows you to view the 2FA recovery codes for any user and can be used if 2 Factor Authentication cannot or should be reset.

**Run via Docker**
```
docker exec -it linkace_app_1 php artisan 2fa:view-recovery-codes
```

**Run without Docker**
```
php artisan 2fa:view-recovery-codes
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.
