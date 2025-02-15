---
title: System Settings
weight: 100
---

The system settings allow the user to configure the whole application, affecting all users - even if this is a  single-user application for now.


## Update Checks

{{< image type="screen" img="system_settings_update_check.png" alt="Preview of the update check" >}}

LinkAce will automatically check for updates on the system settings page. To get this to work, the app pulls information about the latest releases from Github and compares it to your currently installed version.


## System Cron

{{< image type="screen" img="system_settings_cron_token.png" alt="Preview of th cron token settings" >}}

A [cron](https://en.wikipedia.org/wiki/Cron) is needed to move certain functionality out of the user actions and schedule certain tasks. The cron is kind of a script that runs tasks on predefined times through day. 

The cron token you can access or re-generate in the system settings is needed to properly authenticate your cron script against LinkAce, so no third party can trigger the scheduled tasks.

Currently, the following tasks will be run:

* LinkAce runs the [link check]({{< relref path="docs/v2/application/link-checks.md" >}}) and sends a notification if moved or dead links were found.
* LinkAce sends requests to the Wayback Machine with all newly added links, so they are backed up later.

### Setting up the cron

If you are unsure about setting up a cron, either use a web service like [cron-job.org](https://cron-job.org/en/), or search the web for help.

Your cron must run **every minute** and must open the URL provided in the system settings. A basic unix cron entry may look like this:

```
*   *   *   *   *   wget -qO- https://linkace-example.com/cron/WPvv4mxM6nr22Aq4rVf1qEKutsXLTgyw > /dev/null
```

#### Cron Setup for Docker

```
*   *   *   *   *   docker exec linkace-app-1 php artisan schedule:run > /dev/null
```

#### Cron Setup for a PHP installation

```
*   *   *   *   *   cd /path/to/your/linkace && php artisan schedule:run > /dev/null
```

### Re-generate the cron token

If you have problems with your current token or think that someone else knows the token, you should generate a new one in the system settings. Click the "Generate Token" button right to the token field and LinkAce will generate a new one.

---

## General Settings

{{< image type="screen" img="v2/system_settings_general.png" alt="Preview of the general system settings" >}}

### Page Title

The page title setting allows you to specify the title that is displayed in the browser tab. If left blank, LinkAce will use the default title.

### Custom Logo Text

You can replace the LinkAce logo in the navigation bar at the top with a short custom text. This text is limited to 20 characters.

### Additional Link in the Footer

If you want to display an additional link in the footer besides `LinkAce is a project by Kovah.de`, you can do this here. Both an URL and a text are required. The link text is limited to 20 characters.

### Contact/About Page

You have the option to enable a contact page whose content can be edited.

Enable the page and add some content in the system settings. The content can contain Markdown to support additional formatting. Content is limited to 10 000 characters.

### Custom Header Content

Content entered here will be placed before the </head> tag on all LinkAce sites. Useful to place analytics or customization scripts. **Caution:** contents are not escaped and may break the site! Use at your own risk.

---

## Guest Access and Settings

Guest access is an important setting regarding privacy and maybe also security. If turned on, guests will be able to
* view all links that are **not marked as private or internal**,
* view all tags that are **not marked as private or internal**, and
* view all lists that are **not marked as private or internal**.

Regardless of this setting, LinkAce will always show you the option to make links, tags or categories private. This ensures that you can easily switch the guest access on and off without having to update any links.

If you don't want anyone to view your bookmark collection, leave the guest access disabled.

### Guest Settings

These settings apply to all guests visiting your site, if you have guest access enabled.

{{< image type="screen" img="v2/system_settings_guest_settings.png" alt="Preview of the system guest settings" >}}

Please check the [user settings documentation]({{< relref path="docs/v2/configuration/user-settings.md" lang="" >}}) for more details about all available options, as they are exactly the same.


---


## Advanced System Settings

LinkAce offers some more configuration options that are not available from the user or system settings. They are considered advanced settings because users may only change those options in edge cases or other very specific situations.

A complete list of all available settings can be found in the [.env file reference]({{< relref path="docs/v2/configuration/env-settings.md" >}}).
