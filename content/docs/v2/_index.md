---
title: LinkAce Documentation
doc_version: docs_v2
hide_toc: true
cascade:
    doc_version: docs_v2
---

LinkAce is a self-hosted tool for effortlessly archiving, organizing, and sharing your favorite web links. With a clean interface, you can save articles, bookmark tools, and preserve important content long-term. Easily categorize and retrieve your links, or share your collection with others.

This is a quick introduction to LinkAce and its core concepts.

## Links

LinkAce is a bookmark archive. You may store any URI inside the app, for example `https://cloudhiker.net`,
`ftp://homer:maggie@ftp.snpp.springfield.net/employee-handbook.pdf` or ` ms-excel:ofv|u|<https://contoso/Q4/budget.xls>`.

### Link-specific Features

- While saving a link, title and description is automatically generated if you leave either of those blank.
- Links are monitored on a regular basis and checked if they are still available.
- Website links are sent to the Internet Archive to be archived by their Wayback Machine.

### Available features for different Link protocols

{{< table >}}

| Feature                        | HTTP(S) | other URIs |
|:-------------------------------|:--------|:-----------|
| Store in LinkAce               | ✅       | ✅          |
| Meta generation                | ✅       | ❌          |
| Backup to the Internet Archive | ✅       | ❌          |
| Automated uptime checks        | ✅       | ❌          |

{{< / table >}}

## Lists and Tags

Lists and Tags are two different ways to categorize your links.

- Lists may be used to group links into few broader or very specific categories, e.g. "Web Development Tools".
- Tags in contrast may be added to links en masse and usually categorize links for various aspects of it. E.g.
  "internet", "programming" or "farming"

However, you may use both Lists and Tags however you like.

## Users

In LinkAce v2, you may use the application with other people, like your family, friends, sports club or even at work with your coworkers.

The first user created for LinkAce becomes an administrator and can invite others from the user overview.

When saving Links, lists or tags, they can be `Public`, `Internal` or `Private`. This means:
- `Public` links can be viewed by anyone with access to your LinkAce, including Guests if the [Guest Mode]({{< relref path="docs/v2/configuration/system-settings.md#guest-access" >}}) is enabled.
- `Internal` links can only be viewed by logged-in users. They are not visible to Guests.
- `Private` links are only every visible to you.

### Sharing of Lists and Tags between users

Lists and Tags which are either `Public` or `Internal` may be used by all users. There might be two Lists with the same name, because multiple users may create a List with the same name.

