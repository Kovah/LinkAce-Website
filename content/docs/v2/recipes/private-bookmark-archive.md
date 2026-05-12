---
title: Build a Private Bookmark Archive
---

Use this workflow when LinkAce should act as a private bookmark archive first, with sharing disabled or tightly limited.

## Steps

1. Open **User Settings**.
2. Set default visibility for links, lists, tags, and notes to **Private**.
3. Open **System Settings** and keep guest access disabled.
4. Review existing links, lists, tags, and notes and change anything public or internal to private if needed.
5. Configure cron if you want imports, link checks, and Wayback Machine backups.
6. Configure application backups for recovery.

## Private Notes and Organization

Notes have their own visibility. A private note remains private even if the link is public or internal.

Lists and tags also have their own visibility. For a private archive, keep lists and tags private unless you intentionally want other logged-in users to see them.

## Wayback Machine Caveat

By default, LinkAce does not send private links to the Wayback Machine. There is a user setting to allow Wayback Machine backups for private links.

Only enable that setting if you understand that the URL may be sent to an external service.

## Related Pages

- [User Settings: Privacy Settings]({{< relref path="docs/v2/configuration/user-settings.md#privacy-settings" >}})
- [User Settings: Wayback Machine Backups]({{< relref path="docs/v2/configuration/user-settings.md#wayback-machine-backups" >}})
- [System Settings: Guest Access]({{< relref path="docs/v2/configuration/system-settings.md#guest-access-and-settings" >}})
- [Application Backups]({{< relref path="docs/v2/configuration/application-backups.md" >}})
