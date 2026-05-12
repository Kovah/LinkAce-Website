---
title: Links
weight: 20
---

Links are the main records in LinkAce. A link stores a URL, title, description, visibility, optional lists and tags, optional notes, and status information from automated checks.

Use links to save pages you want to find again, organize them with lists and tags, share them with other users or guests, and keep track of moved or broken URLs.

## Link Overview

The link overview lists your saved links and provides display, sorting, bulk editing, edit, delete, and sharing actions.

You can switch between three display formats:

### Simple list

{{< image type="screen" img="v2/links_index_simple.png" alt="Display links as a simple list" >}}

### Detailed list

{{< image type="screen" img="v2/links_index_detailed.png" alt="Display links as a detailed list" >}}

### Cards

{{< image type="screen" img="v2/links_index_cards.png" alt="Display links as cards" >}}

## Add a Link Quickly

Use the **Quick Add** form on the dashboard when you only need to save a URL.

1. Paste the URL into the Quick Add form.
2. Submit the form.
3. LinkAce saves the link using your default link visibility.
4. LinkAce tries to fetch title, description, and thumbnail metadata automatically.

Quick Add is best for fast capture. Use the full form when you want to choose lists, tags, visibility, or a custom title immediately.

## Add a Link With Details

Open **Add Link** from the menu to use the full link form.

{{< image type="screen" img="v2/link_create.png" alt="Preview of the Link form" >}}

{{< table >}}

| Field | Required | Description |
|:------|:---------|:------------|
| URL | Yes | The URL you want to save. |
| Title | No | Custom title. If left blank, LinkAce tries to fetch the title from the website. |
| Description | No | Custom description. If left blank, LinkAce tries to fetch the description from the website. |
| Lists | No | Add the link to one or more lists. Existing lists are suggested while typing. New lists can be created from the field. |
| Tags | No | Add one or more tags. Existing tags are suggested while typing. New tags can be created from the field. |
| Visibility | No | Choose whether the link is public, internal, or private. |

{{< / table >}}

List and tag names cannot contain commas.

### Tag Suggestions

After you enter a URL, LinkAce checks the website metadata and may suggest tags. Click a suggestion to add it to the link.

{{< image type="screen" img="v2/link_create_tag_suggestions.png" alt="Preview of some tag suggestions" >}}

## Add Several Links in a Row

Use **Continue Adding** on the full link form when you are entering several links manually.

If enabled, LinkAce saves the current link and returns to the add form instead of opening the new link detail page.

## Edit Links in Bulk

Use bulk editing when several links need the same tags, lists, visibility, or deletion action.

1. Open the link overview.
2. Select individual links with their checkboxes, or use **Select all** for all currently displayed links.
3. Click **Edit**.
4. Choose what should change.
5. Submit the bulk edit form.

{{< image type="screen" img="v2/links_bulk_select.png" alt="Bulk-selecting Links from the overview page" >}}

{{< image type="screen" img="v2/links_bulk_form.png" alt="Bulk edit form for Links" >}}

For tags and lists, choose whether the entered values should be appended to the existing values or replace them. Values you leave unchanged stay as they are.

## Disable Checks for a Single Link

Open the link detail page and use the **Disable Check** button if LinkAce cannot reliably check a specific URL.

This is useful for websites that work in your browser but block automated requests, require visitor checks, or sit behind services such as Cloudflare. You can enable checks again from the same page.

Automated checks require cron. See [Link Checks]({{< relref path="docs/v2/application/link-checks.md" >}}).

## Add Notes to a Link

Open the link detail page and use the notes section below the link details.

Notes are useful for context, follow-up tasks, quotes, or reminders about why a link was saved. Notes have their own visibility, so a private note can stay private even when the link itself is public or internal.

## Link Details and History

{{< image type="screen" img="v2/link_details.png" alt="Preview of Link Details" >}}

The detail page shows the saved URL, title, description, thumbnail, lists, tags, notes, share links, link-check controls, and change history.

The change history records recent changes to link fields and assigned lists or tags.

## Automatic Wayback Machine Backups

After a link is added, LinkAce can schedule a Wayback Machine request for that URL. This helps preserve access if the page later goes offline.

Some websites block the Wayback Machine, so not every URL can be archived. Wayback Machine backups also require cron to be configured. See [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}).

## Common Problems

- Metadata or thumbnails are missing: the website may block requests, respond slowly, or provide no metadata. See [Troubleshooting]({{< relref path="docs/v2/general/troubleshooting.md#metadata-or-thumbnails-are-missing" >}}).
- Link checks do not run: verify cron in [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#system-cron" >}}).
- A public link is not visible to guests: check the link visibility and guest access in [System Settings]({{< relref path="docs/v2/configuration/system-settings.md#guest-access-and-settings" >}}).
- Opening many links from a list or tag may require allowing popups for your LinkAce domain in the browser.

## Related Pages

- [Lists]({{< relref path="docs/v2/application/lists.md" >}})
- [Tags]({{< relref path="docs/v2/application/tags.md" >}})
- [Link Checks]({{< relref path="docs/v2/application/link-checks.md" >}})
- [Search]({{< relref path="docs/v2/application/search.md" >}})
- [User Settings]({{< relref path="docs/v2/configuration/user-settings.md" >}})
