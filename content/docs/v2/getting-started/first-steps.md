---
title: First Steps After Setup
weight: 10
---

Use this page after LinkAce is installed and you can log in.
It walks through a short first session that verifies the most important user-facing features.

## 1. Log in

Open your LinkAce URL and log in with the account created during setup.
After login, you should see the dashboard with a quick-add form, quick search, recent links, and basic statistics.

## 2. Add one link from the dashboard

Paste a URL into the dashboard quick-add field and submit it.
This confirms that LinkAce can create links and that your database is writable.

If title or description stay empty, LinkAce may not be able to fetch metadata from the target website.
You can still edit those fields manually.

## 3. Add a link with details

Use the main [Add Link]({{< relref path="docs/v2/application/links.md#adding-new-links" >}}) form when you want more control.
There you can set:

- title,
- description,
- lists,
- tags,
- visibility,
- whether to continue adding more links.

Use `Private` visibility for links that only you should see.
Use `Internal` for links visible to logged-in users.
Use `Public` only for links that may be visible through guest access if guest mode is enabled.

## 4. Import existing bookmarks

If you already have browser bookmarks, export them from your browser as an HTML bookmarks file and import it through [Import]({{< relref path="docs/v2/configuration/import.md" >}}).

Large imports are queued. If the import queue does not continue, check that the cron is configured in [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}).

## 5. Install the Bookmarklet

Open [User Settings]({{< relref path="docs/v2/configuration/user-settings.md" >}}) and drag the Bookmarklet button into your browser bookmarks bar.
When you are on a page you want to save, click the Bookmarklet to open a pre-filled LinkAce form.

## 6. Try search

Use the dashboard search field for a quick search, or open [Advanced Search]({{< relref path="docs/v2/application/search.md" >}}) to filter by text, list, tag, visibility, missing tags, missing lists, or broken links.

Docker installations use Meilisearch by default, so newly added or imported links may need a short moment to appear in search. If search results stay empty or stale, rebuild the search index as described in [Post-Setup Steps]({{< relref path="docs/v2/setup/post-setup.md#verify-search" >}}) or [Troubleshooting]({{< relref path="docs/v2/general/troubleshooting.md#search-returns-stale-or-no-results" >}}).

## 7. Set your defaults

Open [User Settings]({{< relref path="docs/v2/configuration/user-settings.md" >}}) and review:

- language and timezone,
- date and time format,
- number of items shown in lists,
- default visibility for links, notes, lists, and tags,
- Wayback Machine backup preferences,
- link sharing buttons.

These defaults make new links behave the way you expect without changing every link manually.

## 8. Confirm cron and email

Cron is required for imports, automated link checks, Wayback Machine backups, and application backups.
Email is required for password resets, invitations, and notifications.

Use the [Post-Setup Steps]({{< relref path="docs/v2/setup/post-setup.md" >}}) to finish both before relying on LinkAce for regular use.
