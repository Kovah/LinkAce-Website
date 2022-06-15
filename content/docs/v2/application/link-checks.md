---
title: Link Checks
weight: 30
---

LinkAce has a nice feature called Link Checks. If you [set up your cron]({{< relref path="docs/v1/configuration/system-settings.md" >}}) correctly, LinkAce will regularly take a chunk of links from your collection and check if the links are still accessible.

## Requirements

* Email sending must be configured in the `.env` file.
* The cron must be configured to run properly.

## How does this work?

With the help of the cron, LinkAce will perform the Link Check every hour. When started, LinkAce pulls 100 links from the database and then run the check on each link.

* If the link returns any HTTP status code in the `200` range within a timespan of 20 seconds, the link is considered fine.
* If the link takes longer than 20 seconds to load, it is considered broken.
* If the link returns an HTTP status code `301` or `302`, the page was moved.

If LinkAce found at least one moved link *or* one broken link, it will email the user containing details about the moved or broken links. The user can then react to this and check what happened to the link.

Moved or broken links are highlighted in the user interface.

## Disable link checks

There can be several reasons why a link is or becomes unavailable, or broken in terms of LinkAce. if you receive  multiple notifications that a link is broken, you can also disable the checks for this particular link. To do so, go to the corresponding link details page. On the right-hand side you will notice a button "Disable check" and the current status. Clicking the button will disable any further checks.  
If you want to enable checks again, just click the button again.
