---
title: Getting Started
menu:
  docs_v2:
    weight: 15
---

This guide gives you the shortest useful path from a fresh LinkAce installation to a working bookmark archive.
If you already installed LinkAce, continue with the [first steps after setup]({{< relref path="docs/v2/getting-started/first-steps.md" >}}).

## 1. Choose an installation method

For most self-hosted installations, use [Setup with Docker]({{< relref path="docs/v2/setup/setup-with-docker.md" >}}).
It provides the application, database, Redis, and Meilisearch in one Docker Compose setup.

Other installation options are available if they better match your environment:

- [Setup with Helm]({{< relref path="docs/v2/setup/setup-to-k8s.md" >}}) for Kubernetes clusters.
- [One-click deployment]({{< relref path="docs/v2/setup/one-click-deploy.md" >}}) for supported cloud platforms.
- [Setup without Docker]({{< relref path="docs/v2/setup/setup-with-php.md" >}}) for manual PHP installations.

## 2. Run the built-in setup

After starting LinkAce, open your LinkAce URL in the browser.
The setup guides you through the requirements check, database configuration, and first user account.

The first user becomes the administrator. Use a real email address if you want password reset emails, invitations, or notifications to work later.

## 3. Complete the post-setup checklist

Before you rely on LinkAce for daily use, go through the [Post-Setup Steps]({{< relref path="docs/v2/setup/post-setup.md" >}}).
The most important follow-up tasks are:

- configure email,
- configure the cron,
- verify search,
- choose basic user and privacy defaults,
- configure application backups if needed,
- install the Bookmarklet.

## 4. Add or import links

Start with one link from the dashboard to confirm that LinkAce can save entries.
Then use the full [Links]({{< relref path="docs/v2/application/links.md" >}}) form when you want to add title, description, lists, tags, notes, or visibility settings.

If you already have browser bookmarks, use the [Import]({{< relref path="docs/v2/configuration/import.md" >}}) page.
Imports are processed in the background, so the cron must be configured for the queue to finish.

## 5. Configure the Bookmarklet

The [Bookmarklet]({{< relref path="docs/v2/application/bookmarklet.md" >}}) lets you save the page you are currently viewing without opening LinkAce first.
Install it from your user settings by dragging the Bookmarklet button into your browser bookmarks bar.

## 6. Verify automation

If you want automated link checks, Wayback Machine backups, imports, or application backups, make sure the cron runs.
The [System Settings]({{< relref path="docs/v2/configuration/system-settings.md" >}}) page shows the cron token and the cron URL.

Email should also be configured if you want password resets, user invitations, backup notifications, or dead-link notifications.
