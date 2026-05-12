---
title: Administration
menu:
  docs_v2:
    weight: 55
---

Administration pages help you keep a LinkAce instance usable after the initial setup. Most options are available from the user menu for admin users.

## Common Admin Tasks

### System settings

[System Settings]({{< relref path="docs/v2/configuration/system-settings.md" >}}) control update checks, cron, guest access, page text, footer links, and advanced instance-wide settings.

### User management and invitations

[User Management]({{< relref path="docs/v2/configuration/user-management.md" >}}) explains admin and user roles, invitations, blocking, deleting, and restoring users.

### Guest access

Guest access is configured in [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#guest-access-and-settings" >}}). It controls whether visitors can see public links, tags, and lists without logging in.

### Cron

Cron is required for imports, link checks, Wayback Machine backups, and application backups. The cron token and URL are shown in [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}).

### Application backups

[Application Backups]({{< relref path="docs/v2/configuration/application-backups.md" >}}) explains local and S3-compatible backups. Use backups for disaster recovery; regular exports do not contain the full application state.

### System logs

Admin users can open **System Logs** from the user menu. Logs are the first place to check for failed setup steps, mail errors, import failures, backup failures, and unexpected 500 errors.

### Audit history

Admin users can open **Audit Log** from the user menu. It shows system events, settings changes, and user history.

### Update checks

The update check on [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#update-checks" >}}) compares your installed LinkAce version with the latest available release.

### System API tokens

[System API Tokens]({{< relref path="docs/v2/configuration/system-api-tokens.md" >}}) allow external tools to access LinkAce without acting as a normal user. Treat these tokens like passwords because they can read, change, or delete data depending on their abilities.

## Operations Checklist

Use the [Operations Guide]({{< relref path="docs/v2/administration/operations.md" >}}) for recurring checks after LinkAce is installed.
