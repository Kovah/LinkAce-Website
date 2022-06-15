---
title: LinkAce Setup
menu:
  docs_v2:
    weight: 20
---

LinkAce itself does not require a high-performance server to run at. Indeed, there is just this PHP app that needs access to a database.

{{< alert type="danger" >}}
There will be **no** support for environments which do not meet the requirements!
{{</ alert >}}


## Continue with the setup

Depending on your personal preferences, you can run LinkAce either with or without Docker. Please notice that the browser-based setup only supports MySQL. For other databases follow the instructions further below.

* [Setup with Docker]({{< relref path="docs/v1/setup/setup-with-docker/_index.md" >}})
* [Setup without Docker]({{< relref path="docs/v1/setup/setup-without-docker.md" >}})


## Setup with SQLite or PostgreSQL

By default, LinkAce is using MySQL but you are free to use SQLite or PostgreSQL.

- To use **SQLite**, please follow the specific [SQLite instructions]({{< relref path="docs/v1/setup/setup-with-sqlite.md" >}}).
- To use **PostgreSQL**, please follow the specific [PostgreSQL instructions]({{< relref path="docs/v1/setup/setup-with-postgresql.md" >}}).
