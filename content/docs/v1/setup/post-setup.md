---
title: Post-Setup Steps
weight: 40
---

Theoretically you can use LinkAce after finishing the setup. I recommend checking the following short steps to make sure you unlock the full potential of LinkAce, including automated backups to the Internet Archive and regular automated link checks.

## 1. Update the .env file with advanced settings

The `.env` file in your LinkAce directory contains some advanced settings which can be enabled if you want to use them. Two configurations are quite important: email settings and application backups.

All other possible settings can be found in the [.env file reference]({{< relref path="docs/v1/configuration/env-settings.md" >}}).

### Email Configuration

Please add the following block to your .env file and change the values according to your 

| .env setting | Possible values | Default value | Description |
|:--|:--|:--|:--|
| `MAIL_FROM_ADDRESS` | any email address | `hello@example.com` | The email address you are sending from |
| `MAIL_FROM_NAME` | any string | `LinkAce` | The name you are sending from |
| `MAIL_DRIVER` | `log`, `smtp`, `sendmail`, `mailgun`, `ses`, `postmark` | `smtp` | The method of sending email, more details see [the Mail configuration docs](https://laravel.com/docs/9.x/mail) |
| MAIL_HOST | any string | `smtp.mailgun.org` | SMTP only: the host sending email from |
| MAIL_PORT | any number | `587` | SMTP only: the post for connecting to the host |
| MAIL_USERNAME | any string | none | SMTP only: the username for connecting to the host |
| MAIL_PASSWORD | any string | none | SMTP only: the password for connecting to the host |
| MAIL_ENCRYPTION | `ssl`, `tls`, none | `tls` | SMTP only: the sending encryption |

### Application backups to Amazon AWS

Application backups have a dedicated documentation: [Application backups]({{< relref path="docs/v1/configuration/application-backups.md" >}})


## 2. Setup the cron

**The cron is necessary to enable automated backups via the Waybackmachine, enabling regular link checks and application backups.** You will be presented a cron token, and a pre-built cron URL on the system settings page, available from the username dropdown. More information about how to configure a cron can be found in the [System Settings]({{< relref path="docs/v1/configuration/system-settings.md" >}}).

## 3. Configure basic app settings

On the same page as your Bookmarklet you can find basic app settings like the timezone, date and time format, and some privacy defaults. I recommend setting the correct timezone and the date and time formats too. You may also set which share buttons should be available when viewing your links.

## 4. Install the Bookmarklet

Visit the user settings, available from the dropdown menu beneath your username. To install the bookmarklet, simply drag the Bookmarklet button into your bookmarks bar.
