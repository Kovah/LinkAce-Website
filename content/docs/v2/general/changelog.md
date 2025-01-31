---
title: LinkAce Changelog
---

## 2.0.0

_Released at 2025-01-31_

{{< alert type="warning" >}}
Please consult the [dedicated upgrade guide]({{< relref path="docs/v2/upgrade/from-v1.md" >}}) to update from LinkAce 1 to version 2.
{{</ alert >}}

### Support for multiple users

LinkAce now supports working with **multiple users**, which also includes a more advanced permission scheme as well as a new visibility setting for links, lists and tags ({{<issuelink 165>}})
  - Administrators can now control various system settings and invite new users.
  - Links, lists and tags can now be public, internal or private, which controls the visibility to the public as well as logged-in users.
  - Links, lists and tags are now displayed with the actual author so it's clear who added it.
  - Each user has its own API keys which can be used to work in the name of the user from third party applications. Additionally, admins can create system-wide API keys.
  - Link checks are now run for each user individually. Users only get notifications about broken oder unavailable links they own.

Additionally, LinkAce now supports **Single Sign On** with OAuth or OIDC. 12 providers are already built-in, including one generic OIDC provider. Please consult the [dedicated SSO setup guide]({{< relref path="docs/v2/configuration/sso-oauth-oidc.md" >}}) for more details.

### User Interface

- Overhaul of the user interface for a clearer structure, fewer inconsistencies and more readable lists. ({{<issuelink 553>}})
  - LinkAce now has three redesigned modes for displaying links: compact, detailed and as cards. This setting can be controlled directly from the interface, no settings are needed.
  - The main navigation bar was adjusted so users need fewer clicks.
  - Lists and tags are now loaded up-front when adding or editing links. This speeds up the process and allows near-instant searches. 
- Links, lists and tags can now be bulk-edited. ({{<issuelink 26>}})
- Meta information was added for all relevant pages so your browser now displays more information. Contributed by chrissawyerfan4. ({{<issuelink 494>}})
- The HTML templates now contain a lot of semantic and special CSS classes for easier customization. ({{<issuelink 437>}})
- Customize LinkAce with a custom logo text, additional footer link or a custom contact page. ({{<issuelink 862>}} {{<issuelink 863>}} {{<issuelink 864>}})

### Administration

- Audit logs were rewritten and now also log events on the system level. ({{<issuelink 467>}})
- There is a dedicated CLI command to test the email configuration. ({{<issuelink 500>}})
- Importing & Exporting
  - The import process was overhauled for better processing of large import files. Importing of links is now done in the background. ({{<issuelink 287>}}) 
  - A unique tag is added to all links processed during an import, to identify them later on. ({{<issuelink 757>}})
- Backups: you can now configure the hour when backups and cleaning tasks are started and disable any email notifications.

### Running LinkAce

- The Docker image for LinkAce was rewritten, is now based on the Caddy web server and runs rootless by default. ({{<issuelink 502>}})
- A Helm chart is available for easily deploying LinkAce to your Kubernetes cluster. ({{<issuelink 870>}})
- The setup was overhauled and now supports SQLite and PostgreSQL too. ({{<issuelink 831>}})
- The way settings are stored was completely rewritten and is now more solid for both system and user settings. ({{<issuelink 494>}})
- Lots of smaller corrections, adjustments and rewritten features to make LinkAce more stable.

### API

- Bulk editing for links, lists and tags is now available
- Bulk adding for links, lists and tags is now available

The complete API documentation can be found at [**api-docs.linkace.org**]({{< param "ApiDocs" >}}).

---

{{< alert type="info" >}}
Earlier releases can be found in the [changelog for version 1]({{< relref path="docs/v1/general/changelog.md" >}}).
{{</ alert >}}
