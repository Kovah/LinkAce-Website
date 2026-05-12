---
title: RSS Feeds
since: v1.5.0
weight: 70
---

RSS feeds let feed readers subscribe to links saved in LinkAce. Feeds are available for all links, links in a list, and links with a tag.

Use public feeds for shared collections. Use private feeds when you want your own feed reader to access your saved links.

## Public Feeds

Public feeds are available only when guest access is enabled and the related content is public.

- All public links: `https://linkace-example.com/guest/links/feed`
- Public links for a list: `https://linkace-example.com/guest/lists/[list-id]/feed`
- Public links for a tag: `https://linkace-example.com/guest/tags/[tag-id]/feed`

Replace `[list-id]` or `[tag-id]` with the ID of the list or tag.

## Private Feeds

Private feeds can include your private data. They require a user API token.

- Your links: `https://linkace-example.com/links/feed?api_token=[token]`
- Your links for a list: `https://linkace-example.com/lists/[list-id]/feed?api_token=[token]`
- Your links for a tag: `https://linkace-example.com/tags/[tag-id]/feed?api_token=[token]`

Create a token in [User API Tokens]({{< relref path="docs/v2/configuration/user-api-tokens.md" >}}), then replace `[token]` with the generated token.

{{< alert type="warning" >}}
Anyone with a private feed URL and token can read the feed. Store feed URLs carefully and revoke the token if it was shared by mistake.
{{</ alert >}}

## Common Problems

- Public feed returns no links: confirm guest access is enabled and the links, list, or tag are public.
- Private feed does not work: confirm the `api_token` parameter is present and the token has not been revoked.
- A feed reader exposes the URL: create a dedicated token for feeds so it can be revoked without affecting other integrations.

## Related Pages

- [Links]({{< relref path="docs/v2/application/links.md" >}})
- [Lists]({{< relref path="docs/v2/application/lists.md" >}})
- [Tags]({{< relref path="docs/v2/application/tags.md" >}})
- [User API Tokens]({{< relref path="docs/v2/configuration/user-api-tokens.md" >}})
- [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#guest-access-and-settings" >}})
