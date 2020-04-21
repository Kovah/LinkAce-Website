---
title: CLI Commands for LinkAce
type: docs
---

## Reset a user password

If you lost your password or the login is not working for some reason, you may want to reset your password.
This is usually done by using the *Password forgotten?* link on the login page. However, this method only works
correctly if mail is set up.

To work around this issue, you can use the CLI command to reset your password.

**Run via Docker**
```
docker exec -it linkace_php_1 php artisan reset-password
```

**Run without Docker**
```
php artisan reset-password
```

If you are stuck, you can cancel the command at any time by using `Ctl / Strg` + `C`.
