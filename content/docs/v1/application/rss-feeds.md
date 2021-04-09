---
title: RSS Feeds
since: v1.5.0
weight: 70
---

LinkAce provides RSS feeds for public and private links. Please notice that 

## Feed Overview

### Public feeds

Public feeds are only available if you enabled the **Guest Mode**. The feeds can be accessed via the feed button on the corresponding overview page inside the guest mode.

  - Links: `https://linkace-example.com/guest/links/feed`
  - Links for a List: `https://linkace-example.com/guest/lists/[list-id]/feed`  
    `[list-id]` must be replaced with the List ID
  - Links for a Tag: `https://linkace-example.com/guest/tags/[tag-id]/feed`  
    `[tag-id]` must be replaced with the Tag ID

### Private feeds
  - Links: `https://linkace-example.com/links/feed`
  - Links for a List: `https://linkace-example.com/lists/[list-id]/feed`  
    `[list-id]` must be replaced with the List ID
  - Links for a Tag: `https://linkace-example.com/tags/[tag-id]/feed`  
    `[tag-id]` must be replaced with the Tag ID


## Accessing private data

You can also access your private links, lists and tags. To be able to access private data, you have to append the [API token]({{< relref path="docs/v1/configuration/user-settings.md" >}}) to the corresponding URL like this:

`https://linkace-example.com/links/feed?api_token=knCz[...]vzhy`
