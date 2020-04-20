---
title: System Settings
type: docs
---

The system settings allow the user to configure the whole application, affecting all users - even if this is a 
single-user application for now.

![System settings preview](/images/screens/v1/linkace_systemsettings.png)

## Update Checks

LinkAce will automatically check for updates on the system settings page. To get this to work, the app pulls information
about the latest releases from Github and compares it to your currently installed version.

## Cron Token

A [cron](https://en.wikipedia.org/wiki/Cron) is needed to move certain functionality out of the user actions and
schedule certain tasks. The cron is kind of a script that runs tasks on predefined times across the day. 

The cron token you can access or re-generate in the system settings is needed to properly authenticate your cron
script against LinkAce, so no third party can trigger the scheduled tasks.

Currently, the following tasks will be run:

* LinkAce runs the [link check](/docs/v1/application/link-checks) and sends a notification if moved or dead links 
were found.
* LinkAce sends requests to the Wayback Machine with all queued links, so they are backed up for later.

### Setting up the cron

If oyu are unsure about setting up a cron, either use a web service like [cron-job.org](https://cron-job.org/en/) or 
[mywebcron.com](http://www.mywebcron.com/), or search the web for help.

Your cron must run **every minute** and must open the URL provided in the system settings. A basic unix cron entry may
look like this:

```
*   *   *   *   *   wget -qO- https://linkace.example.com/cron/WPvv4mxM6nr22Aq4rVf1qEKutsXLTgyw > /dev/null
```

### Re-generate the cron token

If you have problems with your current token or think that someone else knows the token, you should generate a new
one in the system settings. Click the "Generate Token" button right to the token field and LinkAce will generate
a new one.


## General Settings

### Page Title

The page title setting allows you to specify the title that is displayed in the browser tab. If left blank, LinkAce
will use the default title.

### Guest Access

Guest access is an important setting regarding privacy and maybe also security. If turned on, guests will be able
to 
* view all links that are **not marked as private**,
* view all tags that are **not marked as private**, and
* view all categories that are **not marked as private**.

Regardless of this setting, LinkAce will always show you the option to make links, tags or categories private. This
ensures that you can easily switch the guest access on and off without having to update any links.

If you don't want anyone to view your bookmark collection, just leave the guest access disabled.
