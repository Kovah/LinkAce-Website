---
title: LinkAce Changelog
---

## 2.0.0

_Released at TBD_

{{< alert type="warning" >}}
Please consult the [dedicated upgrade guide]({{< relref path="docs/v2/upgrade/from-v1.md" >}}) to update from LinkAce 1 to version 2.
{{</ alert >}}

- Support for multiple users, including a more advanced permission scheme as well as a new visibility setting for entities ({{<issuelink 165>}})
  - Administrators can now control various system settings and invite new users.
  - Links, lists and tags can now be public, internal or private, which controls the visibility to the public as well as logged-in users.
- Overhaul of the user interface for a clearer structure, fewer inconsistencies and more readable lists. ({{<issuelink 553>}})
- The Docker image for LinkAce was rewritten and is now based on Caddy. ({{<issuelink 502>}})
- Links, lists and tags can now be bulk-edited. ({{<issuelink 26>}})
- The setup was overhauled and now supports SQLite and PostgreSQL too. ({{<issuelink 831>}})
- Audit logs were rewritten and now also log events on the system level. ({{<issuelink 467>}})
- A unique tag is added to all links processed during an import, to identify them later on. ({{<issuelink 757>}})
- Meta information was added for all relevant pages so your browser now displays more information. Contributed by chrissawyerfan4. ({{<issuelink 494>}})
- The way settings are stored was completely rewritten and is now more solid for both system and user settings. ({{<issuelink 494>}})
- Lots of smaller corrections, adjustments and rewritten features to make LinkAce more stable.

---

{{< alert type="info" >}}
Earlier releases can be found in the [changelog for version 1]({{< relref path="docs/v1/general/changelog.md" >}}).
{{</ alert >}}
