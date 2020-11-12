---
title: User Settings
weight: 10
---

LinkAce offers a lot of options to customize your bookmarking experience. Here is the overview for all user specific settings which are accessible from the user drop down menu in the menu bar.
 
## The Bookmarklet

{{< image type="screen" img="user_settings_bookmarklet.png" alt="Preview of the bookmarklet settings" >}}

The Bookmarklet is one of the most important features as it provides a simple way to add a random website to LinkAce as a link without leaving the website. To use the Bookmarklet, drag the button to your browser bookmarks bar.

While on a website you want to save to LinkAce, click the Bookmarklet. This will open a popup. This popup will show a login page if you are not logged in on LinkAce, or the pre-filled link form.


## The API Token

{{< image type="screen" img="user_settings_api_token.png" alt="Preview of the API token settings" >}}

The API token is needed to authorize your requests when working with the LinkAce API.

{{< alert type="info" >}}
You can find the complete API details in our [**dedicated API documentation**](https://linkace.stoplight.io/docs/api-docs/).
{{</ alert >}}


## Account Settings

{{< image type="screen" img="user_settings_account.png" alt="Preview of the user account settings" >}}

For sure LinkAce also lets you change your user details and your password. You can change both in the Account Settings panel, or the Change Password panel.


## User Settings

{{< image type="screen" img="user_settings_general.png" alt="Preview of general user settings" >}}

Last but not least, the user settings. The following table gives you an overview of the first few options.

{{< table >}}

| Option | Description |
|:------|:------------|
| Language | Change the primary language of LinkAce here. |
| Timezone | Set the correct timezone here to save and display the correct times for all entries. |
| Date format | You can choose the format of all displayed dates here. |
| Time format | You can choose the format of all displayed times here. |
| Number of entries in lists | This setting affects hoe many entries are displayed on the overview pages. Please note that displaying 50 or more entries may affect the loading times on low-powered systems. |
| Display links as... | Links can be displayed in two different formats. For more details, check the [links documentation]({{< relref path="docs/v1/application/links.md" >}}). |
| Open external links in new tabs | If enabled, external links will be opened in new tabs on click, instead of the current tab. |

{{< / table >}}


### Wayback Machine backups

{{< image type="screen" img="user_settings_wayback_machine.png" alt="Preview of the Wayback Machine settings" >}}

LinkAce supports backing up your links with the help of the Wayback Machine. Instead of storing data locally, the app relies on more of a decade of experience of the Internet Archive foundation to store websites and their contents.

Please notice, that some websites restrict access of the Wayback Machine. If that's the case, the website will not be archived. Please contact the site owner to get access for the Wayback Machine.

By default, LinkAce won't try to backup links that are marked as "private". This can be changed by enabling the corresponding setting.


### Privacy settings

{{< image type="screen" img="user_settings_privacy.png" alt="Preview of the privacy settings" >}}

Privacy is quite important if you enabled guest mode. Whether you enable or disable the default behavior for links, lists, tags or notes, you can make them private or public while creating or editing them.

{{< table >}}

| Option | Description |
|:------|:------------|
| Private Links by default | If enabled, all new links will be private by default. |
| Private Lists by default  | If enabled, all new Lists will be private by default. |
| Private Tags by default  | If enabled, all new Tags will be private by default. |
| Private Notes by default  | If enabled, all new notes will be private by default. |

{{< / table >}}


### Dark Mode

{{< image type="screen" img="user_settings_dark_mode.png" alt="Preview of the dark mode settings" >}}

Yes! LinkAce ships with a dark mode! You have three options available here:

{{< table >}}

| Option | Description |
|:------|:------------|
| Disabled | The light theme will always be displayed. (This is the default.) |
| Permanently Enabled | The dark theme will always be disabled. |
| Automatic | Caution, magic happening here! 😜 If this option is set, LinkAce will use the current setting of your operating system as a base. If you have the dark mode enabled in your operating system, LinkAce will also enable his one. |

{{< / table >}}


### Link Sharing

{{< image type="screen" img="user_settings_link_sharing.png" alt="Preview of the link sharing settings" >}}

LinkAce has a lot of options built in to share links. To make sharing easier for you, you can disable sharing methods here which you don't want to use. Simply click on the corresponding icon to enable or disable the option. An enabled option is displayed as green.

You can use the "Toggle all" button to disable or enable all options all together.
