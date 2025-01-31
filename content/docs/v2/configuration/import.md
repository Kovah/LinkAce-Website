---
title: Import
weight: 10
---

LinkAce provides a way to import existing bookmarks from your browser. Please notice, that you have to export your bookmarks in the HTML format. Other formats are not supported.

{{< image type="screen" img="import.png" alt="Preview of the import page" >}}

After submitting your import file, LinkAce will check the given links against the database. All links which do not exist yet will be queued for import.

## Import Queue

To allow large imports to be handled properly, LinkAce queues the given URLs to be processed later. The more links should be imported, the longer the processing will take.

{{< alert type="danger" >}}
The [cron]({{< relref path="docs/v2/configuration/system-settings.md#setting-up-the-cron" >}}) must be configured for the import to work.
{{</ alert >}}

Every time the cron runs, LinkAce processes the queued links. You can view all outstanding links in the Import Queue which is accessible through the menu.

{{< image type="screen" img="v2/import_queue.png" alt="Preview of failed import in the queue" >}}

## Failed Imports

It might be possible that the import of a link fails due to various issues. The reason for the failed import will be shown directly under the queue.

{{< image type="screen" img="v2/import_queue_failed.png" alt="Preview of failed import jobs" >}}
