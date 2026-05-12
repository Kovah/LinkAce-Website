---
title: Recover Account Access
---

Use this workflow when a user cannot log in because of a forgotten password, missing email setup, or lost 2FA device.

## Password Reset Email

Start with the normal **Password forgotten?** link on the login page.

This requires working mail configuration. If reset emails do not arrive, test mail from the command line:

```bash
# Docker
docker compose exec app php artisan mail:check

# PHP installation
php artisan mail:check
```

## Reset a Password From the CLI

If mail is not configured or the reset email cannot be delivered, use the CLI password reset command:

```bash
# Docker
docker compose exec app php artisan reset-password

# PHP installation
php artisan reset-password
```

The command guides you through choosing the user and setting a new password.

## Recover From Lost 2FA

If the user lost access to their 2FA device, first try a saved recovery code.

If recovery codes are not available, an administrator with server access can view recovery codes from the CLI:

```bash
# Docker
docker compose exec app php artisan 2fa:view-recovery-codes

# PHP installation
php artisan 2fa:view-recovery-codes
```

## Add a New User Instead

If the affected user should not be recovered, an admin can invite a new user from **User Management**. LinkAce must be able to send email for invitations.

If the built-in setup cannot be used, an admin user can also be created from the CLI:

```bash
# Docker
docker compose exec app php artisan registeruser --admin

# PHP installation
php artisan registeruser --admin
```

## Related Pages

- [CLI Commands]({{< relref path="docs/v2/cli/_index.md" >}})
- [User Management]({{< relref path="docs/v2/configuration/user-management.md" >}})
- [Troubleshooting Mail]({{< relref path="docs/v2/general/troubleshooting.md#password-reset-emails-do-not-arrive" >}})
- [User Settings: Two Factor Authentication]({{< relref path="docs/v2/configuration/user-settings.md#two-factor-authentication" >}})
