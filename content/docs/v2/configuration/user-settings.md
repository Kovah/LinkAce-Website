---
title: User Settings
weight: 10
---

LinkAce offers a lot of options to customize your bookmarking experience. Here is the overview for all user specific settings which are accessible from the user drop down menu in the menu bar.
 
## The Bookmarklet

{{< image type="screen" img="user_settings_bookmarklet.png" alt="Preview of the bookmarklet settings" >}}

The Bookmarklet is one of the most important features as it provides a simple way to add a random website to LinkAce as a link without leaving the website. To use the Bookmarklet, drag the button to your browser bookmarks bar.

More details about the Bookmarklet can be found in the [Bookmarklet documentation]({{< relref path="docs/v1/application/bookmarklet.md" >}}).


## The API Token

{{< image type="screen" img="user_settings_api_token.png" alt="Preview of the API token settings" >}}

The API token is needed to authorize your requests when working with the LinkAce API.

{{< alert type="info" >}}
You can find the complete API details in our [**dedicated API documentation**](https://linkace.stoplight.io/docs/api-docs/).
{{</ alert >}}


## Account Settings

{{< image type="screen" img="user_settings_account.png" alt="Preview of the user account settings" >}}

For sure LinkAce also lets you change your user details and your password. You can change both in the Account Settings panel, or the Change Password panel.


## Two Factor Authentication

For additional security, you can enable Two Factor Authentication. You need an additional device that supports either scanning a QR code or entering a 2FA secret.

{{< image type="screen" img="user_settings_2fa_enable.png" alt="Preview of the option to enable Two Factor Authentication" >}}

Make sure your additional device is ready and click the "Enable Two Factor Authentication" button. You will be asked for your password to verify your intent. After the page reloads, you will be presented a QR code. Scan this QR code or click the "QR code not working" label to display the secret for manually adding LinkAce as your new authentication option. Once your device is correctly set up, you will be asked for the one-time-password while logging into LinkAce again.

{{< image type="screen" img="user_settings_2fa_qr_code.png" alt="Preview of the option to enable Two Factor Authentication" >}}


### Two Factor Recovery Codes

In case you have lost your Two Factor device, or it's inaccessible, you may use a recovery code to log into LinkAce.

{{< alert type="danger" >}}
**Please save these recovery codes** where they are save to access by yourself at any time. If you lose access to these codes, you will be locked out of LinkAce!
{{</ alert >}}

{{< image type="screen" img="user_settings_2fa_recovery_codes.png" alt="Preview of the option to enable Two Factor Authentication" >}}

Once you use a recovery code to log into LinkAce, it will be removed from the valid codes. Please make sure to regenerate codes once they are depleted. This can be done with a click on the "Generate new Recovery Codes" button.


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
| Enable Markdown for descriptions and notes  | If enabled, Markdown can be used to format link descriptions and notes.  |

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
| Permanently Enabled | The dark theme will always be enabled. |
| Automatic | Caution, magic happening here! 😜 If this option is set, LinkAce will use the current setting of your operating system as a base. If you have the dark mode enabled in your operating system, LinkAce will also enable his one. |

{{< / table >}}


### Link Sharing

{{< image type="screen" img="user_settings_link_sharing.png" alt="Preview of the link sharing settings" >}}

LinkAce has a lot of options built in to share links. To make sharing easier for you, you can disable sharing methods here which you don't want to use. Simply click on the corresponding icon to enable or disable the option. An enabled option is displayed as green.

You can use the "Toggle all" button to disable or enable all options all together.
