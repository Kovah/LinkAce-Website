---
title: Import Browser Bookmarks
---

Use this workflow when you want to move bookmarks from a browser or another bookmark manager into LinkAce.

## Steps

1. Export your bookmarks as an HTML bookmarks file from your browser or bookmark manager.
2. In LinkAce, open **Import** from the user menu.
3. Upload the HTML file and start the import.
4. Open **Import Queue** from the user menu to verify that links were queued.
5. Make sure cron is configured, because queued imports are processed by the scheduler.

See the full [Import]({{< relref path="docs/v2/configuration/import.md" >}}) reference for queue behavior and failed imports.

## Large Imports

For very large bookmark files, use the CLI import command:

```bash
# Docker
docker compose exec app php artisan links:import [file name]

# PHP installation
php artisan links:import [file name]
```

Use `--skip-meta-generation` if many imported links are slow, unreachable, or blocked and you want to import URLs first.

## Check Before You Start

- The file must be in HTML bookmark format.
- Cron must run every minute. See [System Cron]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}).
- Large imports may take time to finish.
- Failed entries are shown in the Import Queue.

## Related Pages

- [Import]({{< relref path="docs/v2/configuration/import.md" >}})
- [CLI Commands]({{< relref path="docs/v2/cli/_index.md#import-links-from-a-html-bookmarks-file" >}})
- [Troubleshooting Imports]({{< relref path="docs/v2/general/troubleshooting.md#imports-stay-in-the-queue" >}})
