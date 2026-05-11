---
title: LinkAce Documentation
doc_version: docs_v2
hide_toc: true
cascade:
    doc_version: docs_v2
---

LinkAce is a self-hosted tool for archiving, organizing, and sharing your favorite web links.
If you are new to LinkAce, start with the setup guide, finish the post-setup checklist, then save your first links or import bookmarks from your browser.

## New to LinkAce

- [Choose an installation method]({{< relref path="docs/v2/setup/_index.md" >}}) if you are setting up LinkAce for the first time.
- [Install with Docker]({{< relref path="docs/v2/setup/setup-with-docker.md" >}}) for the recommended self-hosted setup.
- [Follow the post-setup checklist]({{< relref path="docs/v2/setup/post-setup.md" >}}) to enable email, cron, automated checks, and backups.
- [Add and manage links]({{< relref path="docs/v2/application/links.md" >}}) once your instance is running.
- [Import browser bookmarks]({{< relref path="docs/v2/configuration/import.md" >}}) if you already have a bookmark collection.
- [Install the Bookmarklet]({{< relref path="docs/v2/application/bookmarklet.md" >}}) to save pages from your browser quickly.

## Install or Upgrade

- [Setup overview]({{< relref path="docs/v2/setup/_index.md" >}}) explains the available installation options.
- [Setup with Docker]({{< relref path="docs/v2/setup/setup-with-docker.md" >}}) is the recommended setup path for most users.
- [Setup with Helm]({{< relref path="docs/v2/setup/setup-to-k8s.md" >}}) is available for Kubernetes environments.
- [One-click cloud deployment]({{< relref path="docs/v2/setup/one-click-deploy.md" >}}) is available through Deploystack.
- [Setup without Docker]({{< relref path="docs/v2/setup/setup-with-php.md" >}}) is available for manual PHP installations.
- [Upgrade LinkAce]({{< relref path="docs/v2/upgrade/_index.md" >}}) if you already run LinkAce v2.
- [Upgrade from LinkAce v1]({{< relref path="docs/v2/upgrade/from-v1.md" >}}) if you still use the old major version.

## Use LinkAce

- [Dashboard]({{< relref path="docs/v2/application/dashboard.md" >}}) explains the start page after login.
- [Links]({{< relref path="docs/v2/application/links.md" >}}) covers adding, editing, organizing, checking, and archiving links.
- [Lists]({{< relref path="docs/v2/application/lists.md" >}}) and [Tags]({{< relref path="docs/v2/application/tags.md" >}}) explain the two ways to organize links.
- [Advanced Search]({{< relref path="docs/v2/application/search.md" >}}) helps you find links with filters.
- [Bookmarklet]({{< relref path="docs/v2/application/bookmarklet.md" >}}) lets you save pages without leaving the site you are reading.
- [Trash]({{< relref path="docs/v2/application/trash.md" >}}) explains restore and permanent deletion behavior.
- [RSS Feeds]({{< relref path="docs/v2/application/rss-feeds.md" >}}) provide public and private feed URLs.

## Configure and Administer

- [User Settings]({{< relref path="docs/v2/configuration/user-settings.md" >}}) control personal defaults, privacy, display, sharing, and Wayback Machine behavior.
- [System Settings]({{< relref path="docs/v2/configuration/system-settings.md" >}}) control update checks, cron, guest access, and site-wide options.
- [User Management]({{< relref path="docs/v2/configuration/user-management.md" >}}) explains users, roles, invitations, and visibility.
- [Application Backups]({{< relref path="docs/v2/configuration/application-backups.md" >}}) explains local and S3-compatible backups.
- [User API Tokens]({{< relref path="docs/v2/configuration/user-api-tokens.md" >}}) and [System API Tokens]({{< relref path="docs/v2/configuration/system-api-tokens.md" >}}) explain API access.
- [SSO with OAuth or OIDC]({{< relref path="docs/v2/configuration/sso-oauth-oidc.md" >}}) explains single sign-on setup.
- [Advanced Settings]({{< relref path="docs/v2/configuration/env-settings.md" >}}) lists `.env` configuration options.
- [CLI Commands]({{< relref path="docs/v2/cli/_index.md" >}}) covers maintenance commands.

## Fix a Problem

- [Troubleshooting]({{< relref path="docs/v2/general/troubleshooting.md" >}}) explains how to collect logs, debug setup issues, and ask for help.
- [Post-Setup Steps]({{< relref path="docs/v2/setup/post-setup.md" >}}) is useful if cron, email, backups, or link checks do not work yet.
- [System Settings]({{< relref path="docs/v2/configuration/system-settings.md" >}}) explains cron and guest access settings.
- [Link Checks]({{< relref path="docs/v2/application/link-checks.md" >}}) explains automated checks for dead or moved links.

## Integrate with Other Tools

- [API Documentation]({{< param "ApiDocsV2" >}}) documents the REST API.
- [Third-Party Tools and Libraries]({{< relref path="docs/v2/general/third-party-tools.md" >}}) lists community tools and integrations.
- [RSS Feeds]({{< relref path="docs/v2/application/rss-feeds.md" >}}) can expose LinkAce data to feed readers.

## Core Concepts

This is a quick introduction to LinkAce and its core concepts.

### Links

LinkAce is a bookmark archive. You may store any URI inside the app, for example `https://cloudhiker.net`,
`ftp://homer:maggie@ftp.snpp.springfield.net/employee-handbook.pdf` or ` ms-excel:ofv|u|<https://contoso/Q4/budget.xls>`.

#### Link-specific Features

- While saving a link, title and description is automatically generated if you leave either of those blank.
- Links are monitored on a regular basis and checked if they are still available.
- Website links are sent to the Internet Archive to be archived by their Wayback Machine.

#### Available features for different Link protocols

{{< table >}}

| Feature                        | HTTP(S) | HTTP(S) for private IP ranges | other URIs |
|:-------------------------------|:--------|-------------------------------|:-----------|
| Store in LinkAce               | ✅      | ✅                            | ✅          |
| Meta generation                | ✅      | ⚠️ ([Details]({{< relref path="docs/v2/configuration/system-settings.md#advanced-system-settings" >}})) | ❌          |
| Backup to the Internet Archive | ✅      | ❌                            | ❌          |
| Automated uptime checks        | ✅      | ✅                            | ❌          |

{{< / table >}}

### Lists and Tags

Lists and Tags are two different ways to categorize your links.

- Lists may be used to group links into few broader or very specific categories, e.g. "Web Development Tools".
- Tags in contrast may be added to links en masse and usually categorize links for various aspects of it. E.g.
  "internet", "programming" or "farming"

However, you may use both Lists and Tags however you like.

### Users

In LinkAce v2, you may use the application with other people, like your family, friends, sports club or even at work with your coworkers.

The first user created for LinkAce becomes an administrator and can invite others from the user overview.

When saving Links, lists or tags, they can be `Public`, `Internal` or `Private`. This means:
- `Public` links can be viewed by anyone with access to your LinkAce, including Guests if the [Guest Mode]({{< relref path="docs/v2/configuration/system-settings.md#guest-access" >}}) is enabled.
- `Internal` links can only be viewed by logged-in users. They are not visible to Guests.
- `Private` links are only every visible to you.

#### Sharing of Lists and Tags between users

Lists and Tags which are either `Public` or `Internal` may be used by all users. There might be two Lists with the same name, because multiple users may create a List with the same name.
