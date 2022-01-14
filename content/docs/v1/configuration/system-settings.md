---
title: System Settings
weight: 20
---

The system settings allow the user to configure the whole application, affecting all users - even if this is a  single-user application for now.


## Update Checks

{{< image type="screen" img="system_settings_update_check.png" alt="Preview of the update check" >}}

LinkAce will automatically check for updates on the system settings page. To get this to work, the app pulls information about the latest releases from Github and compares it to your currently installed version.


## Cron Token

{{< image type="screen" img="system_settings_cron_token.png" alt="Preview of th cron token settings" >}}

A [cron](https://en.wikipedia.org/wiki/Cron) is needed to move certain functionality out of the user actions and schedule certain tasks. The cron is kind of a script that runs tasks on predefined times through day. 

The cron token you can access or re-generate in the system settings is needed to properly authenticate your cron script against LinkAce, so no third party can trigger the scheduled tasks.

Currently, the following tasks will be run:

* LinkAce runs the [link check]({{< relref path="docs/v1/application/link-checks.md" >}}) and sends a notification if moved or dead links were found.
* LinkAce sends requests to the Wayback Machine with all newly added links, so they are backed up later.

### Setting up the cron

If you are unsure about setting up a cron, either use a web service like [cron-job.org](https://cron-job.org/en/), or search the web for help.

Your cron must run **every minute** and must open the URL provided in the system settings. A basic unix cron entry may look like this:

```
*   *   *   *   *   wget -qO- https://linkace-example.com/cron/WPvv4mxM6nr22Aq4rVf1qEKutsXLTgyw > /dev/null
```

### Re-generate the cron token

If you have problems with your current token or think that someone else knows the token, you should generate a new one in the system settings. Click the "Generate Token" button right to the token field and LinkAce will generate a new one.


## General Settings

{{< image type="screen" img="system_settings_general.png" alt="Preview of the general system settings" >}}

### Page Title

The page title setting allows you to specify the title that is displayed in the browser tab. If left blank, LinkAce will use the default title.

### Guest Access

Guest access is an important setting regarding privacy and maybe also security. If turned on, guests will be able to 
* view all links that are **not marked as private**,
* view all tags that are **not marked as private**, and
* view all categories that are **not marked as private**.

Regardless of this setting, LinkAce will always show you the option to make links, tags or categories private. This ensures that you can easily switch the guest access on and off without having to update any links.

If you don't want anyone to view your bookmark collection, leave the guest access disabled.

### Custom Header Content

Content entered here will be placed before the </head> tag on all LinkAce sites. Useful to place analytics or customization scripts. **Caution:** contents are not escaped and may break the site! Use at your own risk.


## Guest Settings

These settings apply to all guests visiting your site, if you have guest access enabled.

{{< image type="screen" img="system_settings_guest_settings.png" alt="Preview of the system guest settings" >}}

Please check the [user settings documentation]({{< relref path="docs/v1/configuration/user-settings.md" lang="" >}}) for more details about all available options, as they are exactly the same.


---


## Advanced System Settings

The following settings can be changed only in the `.env` file.

### `APP_TIMEZONE`

Change the timezone of the core application here. It does not affect the timezone set in the user settings but changes how LinkAce saves dates and times in the database. Be very careful when using this setting as it can have unintended site effects! There won't be any support for broken applications due to a changed timezone.

* Possible Value(s): a valid timezone according to [PHP](https://www.php.net/manual/en/timezones.php)
* Default value: `UTC`
* Example: `APP_TIMEZONE=Europe/Berlin`

### `APP_USER_AGENT`

Change the User Agent that is used in LinkAce to make requests to website. Can be helpful if LinkAce is blocked often by sites when it tries to gather metadata.  
Please note that it's important to wrap the User Agent in quotes (`"`) in your .env file.

* Possible Value(s): a valid User Agent string
* Default value: `LinkAce/1 (https://github.com/Kovah/LinkAce)`
* Example: `APP_USER_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"`
