---
title: LinkAce v2 Changelog
---

## 2.3.0

_Released at 2025-09-07_

- Allow more configuration options for connecting to the database via SSL, see [.env Settings]({{< relref path="docs/v2/configuration/env-settings.md" >}} for details ({{issuelink 949}})
- Improvement for handling existing (even trashed)  links during adding or editing links ({{issuelink 1004}})
- Improve handling of non-existing links, lists or tags for Postgres databases ({{issuelink 1005}})
- Adding new tags or lists correctly takes default privacy settings into account ({{issuelink 1001}}))
- Link sharing button is removed when no sharing services are enabled ({{issuelink 991}}))
- New option for OIDC logins: SSO_OIDC_VERIFY_JWT which enables JWT verification and now defaults to true
- Dependencies were updated

## 2.2.0

_Released at 2025-08-31_

- Allow disabling TLS/SSL verification when using SMTP for sending mails ({{issuelink 986}}
- Selecting tags or lists now prefer existing entries instead of creating new ones ({{issuelink 992}}
- Allow users to search shared links by @KobyW in {{issuelink 976}}
- Fix markdown rendering in link lists by using formatted_description attribute in {{issuelink 994}}
- Add comprehensive GitHub Copilot instructions for LinkAce development in {{issuelink 996}}
- LinkAce now uses the official Redis docker image instead of the Bitnami one, as Bitnami deprecated their images.
- Dependencies were updated

## 2.1.9

_Released at 2025-07-14_

- Fixes a minor security issue where existing links could be updated with Javascript code.
- Dependencies were updated.

## 2.1.8

_Released at 2025-06-19_

- Tag and List relations are now properly removed for deleted Links. ({{issuelink 941}})
- Dependencies were updated.

## 2.1.7

_Released at 2025-03-27_

- Links can now properly be sorted on the details page of Lists. ({{issuelink 941}})
- Minor fixes and adjustments for the SQLite web setup.
- Dependencies were updated.

## 2.1.6

_Released at 2025-03-21_

- Fixes the search after it was not working correctly when searching with tags or lists

## 2.1.5

_Released at 2025-03-20_

- The SSO login is now correctly shown in when using the bookmarklet. Thanks to [@geoffholden](https://github.com/geoffholden) for his first contribution. {{issuelink 932}}
- Handling of tag and list selects was overhauled to fix ghost-tags being created during bulk-editing. ({{issuelink 936}})
- The setup now uses psql instead of pg_restore for Postgres databases for better compatibility.
- Minor design fixes.
- Dependencies were updated.


## 2.1.4

_Released at 2025-02-26_

- **The API now validates `content-type` and `accept` headers for POST, PATCH and DELETE requests.** Those headers were required for the API to work properly, so client should send them already. If you run into issues where LinkAce responds with `415` HTTP errors, please make sure that your client properly sets the required `content-type` and `accept` headers. Thanks to [@prplecake](https://github.com/prplecake) for his awesome debugging and contribution. {{issuelink 885}}
- Internal or private links are now properly displayed on tag and list pages. ({{issuelink 914}})
- The setup handles database passwords with special characters now. ({{issuelink 927}})
- Permissions for the `storage` directory were adjusted for Docker and PHP release packages. ({{issuelink 879}})
- Dependencies were updated.

## 2.1.3

_Released at 2025-02-16_

- Fixes the 2.1.2 release.


## 2.1.2

_Released at 2025-02-15_

- Adds Bluesky as a sharing option. ({{issuelink 909}})
- Fixes issue with sorting links on tag or list pages randomly.
- You can now configure some more advanced settings via the .env file. See [.env Settings]({{< relref path="docs/v2/configuration/env-settings.md" >}}) for more details.


## 2.1.1

_Released at 2025-02-11_

- Fixes critical issue where links were deleted when bulk-deleting tags. ({{issuelink 897}})
- Fixes and issue where bulk-editing tags or lists for links resulted in an unexpected behavior. ({{issuelink 905}})
- Links are now properly displayed when viewing lists of another user. ({{issuelink 902}})
- Adds missing `SSO_KEYCLOAK_BASE_URL` to the configuration ({{issuelink 904}})
- Dependencies were updated.


## 2.1.0

_Released at 2025-02-06_

- Adds a new unversioned API endpoint which returns the current supported API version. ({{issuelink 892}})
  Details can be found in the [API docs]({{< param "ApiDocsV2" >}})
- Backups should now run again properly, caused due to the handling of disabled notifications.
- Fixes issue with tags and lists in guest mode where the controller crashed due to incorrect URLs.
- Dependencies were updated.

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
