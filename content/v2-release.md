---
title: LinkAce 2 is here! 💙
---

LinkAce 2 is finally here. Whew. It took almost 2 years and over 100 hours of coding to get here.

{{< v2-celebrate >}}

## Feature Highlights

### Support for multiple users

LinkAce now supports working with **multiple users**, which also includes a more advanced permission scheme as well as a new visibility setting for links, lists and tags ({{<issuelink 165>}})
- Administrators can now control various system settings and invite new users.
- Links, lists and tags can now be public, internal or private, which controls the visibility to the public as well as logged-in users.
- Links, lists and tags are now displayed with the actual author so it's clear who added it.
- Each user has its own API keys which can be used to work in the name of the user from third party applications. Additionally, admins can create system-wide API keys.

Additionally, LinkAce now supports **Single Sign On** with OAuth or OIDC. 12 providers are already built-in, including one generic OIDC provider. Please consult the [dedicated SSO setup guide]({{< relref path="docs/v2/configuration/sso-oauth-oidc.md" >}}) for more details.

### User Interface

- Overhaul of the user interface for a clearer structure, fewer inconsistencies and more readable lists.
    - LinkAce now has three redesigned modes for displaying links: compact, detailed and as cards. This setting can be controlled directly from the interface, no settings are needed.
    - The main navigation bar was adjusted so users need fewer clicks.
    - Lists and tags are now loaded up-front when adding or editing links. This speeds up the process and allows near-instant searches.
- Links, lists and tags can now be bulk-edited.

### Administration

- Audit logs were rewritten and now also log events on the system level.
- A unique tag is added to all links processed during an import, to identify them later on.
- There is a dedicated CLI command to test the email configuration.

### Running LinkAce

- The Docker image for LinkAce was rewritten, is now based on the Caddy web server and runs rootless by default.
- The setup was overhauled and now supports SQLite and PostgreSQL too.
