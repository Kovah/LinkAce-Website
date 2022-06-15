---
title: Links
weight: 20
---

Links are the heart of LinkAce. Links can be anything, from interesting articles, cool portfolios, helpful web tools. As long as it has a URL, you can add it to LinkAce. Additionally to informations like title and description, you may categorize links using tags or group them together with lists. Links are archived by the Wayback Machine and checked regularly to make sure you know about changes in availability of the links you saved.

## Link Overview

The link overview lists all available links together with some meta information like tags as well as the sharing options and links for editing and deleting them. You can sort the list by creation date, title and URL, both ascending and descending.

Links can be displayed in two different formats, which can be changed in the [user settings]({{< relref path="docs/v1/configuration/user-settings.md" >}}).

### Display links as rows with many details

{{< image type="screen" img="link_index_rows.png" alt="Preview of the Link overview: rows with many details" >}}

### Display links as rows with fewer details

{{< image type="screen" img="link_index_rows_small.png" alt="Preview of the Link overview: rows with less details" >}}

### Display links as cards

{{< image type="screen" img="link_index_cards.png" alt="Preview of the Link overview: cards" >}}


---


## Adding new Links

{{< image type="screen" img="link_create.png" alt="Preview of the Link form" >}}

New links can be added in two ways: directly from the dashboard by using the "Quick Add" form, or by using the more powerful form available via the "Add Link" link in the menu bar.

The primary form shows you a lot of different fields which will be described in the following overview:

{{< table >}}

| Field | Required | Description |
|:------|:---------|:------------|
| URL | Yes | Contains the URL of the link you want to add. |
| Title | No | You may set a custom title for the link here. If left blank, LinkAce will try to parse the title from the website. If no title was found, the URL will be used as the title. |
| Description | No | You may set a custom description for the link here. If left blank, LinkAce will try to parse the description from the website. |
| List | No | Used to add the link to lists. When you start typing, LinkAce will search for existing lists. If there are none you may add new lists by just entering them here. Lists can contain almost every character, except the comma. |
| Tags | No | Used to add tags for the link. When you start typing, LinkAce will search for existing tags. If there are none you may add new tags by just entering them here. Tags can contain almost every character, except the comma. |
| Is Private | No | Set the privacy mode of the link here. |

{{< / table >}}

If you would like to add several links in a row, check the "Continue Adding" box. If checked, you will not be redirected
to the link detail page, but will see the link form again.


### Suggestions for Tags

After adding the URL in the form, LinkAce will gather details from the specified site. If a valid site was found and it contains meta information, LinkAce will suggest them to be added as tags. Click on a suggestion to add it as a new tag.

{{< image type="screen" img="link_create_tag_suggestions.png" alt="Preview of some tag suggestions" >}}


---


## Link Details

{{< image type="screen" img="link_details.png" alt="Preview of Link Details" >}}

The link detail page shows all available information about the link, including title, description, lists and tags. From the details page you can directly hop into the edit form or delete the link. If a thumbnail was saved for a link it will be displayed.

The "Enable Check" / "Disable Check" button lets you enable / disable the [automated checks]({{< relref path="docs/v1/application/link-checks.md" >}}) performed by LinkAce. This might be helpful if a website is reachable but LinkAce has problems accessing it. This is mostly the case with visitor captcha checks seen with Cloudflare-hosted websites.

You will also be shown all share links if you enabled some in the user settings.

### Link Notes

Each link can have several notes. Those may be used to add more detailed information about the link or leaving hints to your guest viewers. Notes can like links be either private or not private. Private notes can only be read by yourself.

To add a new note, view existing ones or edit an existing note, go to the link detail page. The notes section is displayed below the regular link details.

### Change History

The change history at the bottom of the link details shows you your recent changes with the timestamp and the previous value. Changes are recorded for all link values and assigned lists and tags.


---


## Automatic Backups with the Wayback Machine

After you add a link to LinkAce, it will schedule an automatic "backup" with the help of the [Wayback Machine (archive.org)](https://archive.org/web/web.php).
This backup will help you access the contents of your saved link in case it goes offline. LinkAce will notify the Waback Machine about the link you safed, so the archiving can be scheduled. It may take a while until the first backup is finished.

Please notice, that some websites restrict access of the Wayback Machine. If that's the case, the website will not be archived. Please contact the site owner to get access for the Wayback Machine.

{{< alert type="warning" >}}
The [cron]({{< relref path="docs/v1/configuration/system-settings.md#cron-token" >}}) needs to be configured and working to enable automated backups.
{{</ alert >}}

## Notifications about dead or moved Links

Also, if you set up the cron correctly, LinkAce will regularly check all links if they are still available. More details about this can be found on the [Link Checks]({{< relref path="docs/v1/application/link-checks.md" >}}) page.
