---
title: LinkAce 2.0 is here! 💙
---

{{< v2-celebrate >}}

I’m super excited to finally share LinkAce 2.0 with you! It’s been a wild ride since the first version launched four years ago, and this new release has taken me over 100 hours to put together. I’ve completely reworked a ton of features and polished everything to give you a faster, smoother, and overall better experience.

This update has been all about making it easier and more enjoyable to organize your bookmarks. I’ve listened to all the feedback, squashed some old bugs, and added new features that I think you’ll love.

I can’t wait for you to try out LinkAce 2.0 and see what’s new. Thanks for sticking with me through this journey—I hope you enjoy this version as much as I enjoyed building it!

## Feature Highlights

### Support for multiple users

LinkAce now supports multiple users, along with an improved permission system and new visibility settings for links, lists, and tags. Here’s what’s new:

- Administrators can manage system settings and invite new users.
- You can now set links, lists, and tags to be public, internal, or private, controlling who can see them—whether it’s the public or logged-in users.
- Links, lists, and tags now display the author’s name, so it’s clear who added them.
- Each user has their own API keys for third-party app integration, while admins can also create system-wide API keys.

LinkAce now also supports **Single Sign-On (SSO)** via OAuth or OIDC, with 12 providers already built-in, including a generic OIDC option. For setup instructions, check out the [SSO setup guide]({{< relref path="docs/v2/configuration/sso-oauth-oidc.md" >}}).

### User Interface

The user interface has been completely revamped for better structure, consistency, and readability.

- Three newly designed display modes for links: compact, detailed, and card view. You can easily switch between them directly from the interface, without needing to go to the settings.
- The main navigation has been streamlined, reducing the number of clicks needed to get around.
- Lists and tags are now preloaded when adding or editing links, making the process faster and allowing near-instant searches.
- Customize LinkAce with a custom logo text, additional footer link or a custom contact page.

{{< image type="screen" img="v2/dashboard.png" alt="Display links as a simple list" >}}

Also, you can now bulk-edit links, lists, and tags for quicker management.

### Administration

- Audit logs were rewritten and now also log events on the system level.
- A unique tag is added to all links processed during an import, to identify them later on.
- There is a dedicated CLI command to test the email configuration.

### Running LinkAce

- The Docker image for LinkAce was rewritten, is now based on the Caddy web server and runs rootless by default.
- The setup was overhauled and now supports SQLite and PostgreSQL too.

{{< alert type="info" >}}
The full list of changes with more details can be found in the [**changelog**]({{< relref path="docs/v2/general/changelog.md" >}}).
{{</ alert >}}

## How to upgrade from LinkAce 1

{{< card >}}
Ready to upgrade your LinkAce installation to the new version? Follow this upgrade guide:

👉 [**Upgrade from LinkAce v1**]({{< relref path="docs/v2/upgrade/from-v1.md" >}})

If you want to take a quick look at it without upgrading the existing setup, I suggest to try the [2-minute test setup]({{< relref path="docs/v2/setup/setup-with-docker#2-minute-test-setup" >}}).
{{</ card >}}

## Feedback and Issues

If you are having issues with your upgrade or find issues in the new version, please report them in the [Community Forum]({{< param "Community" >}}).

{{< alert type="success" >}}
If you like LinkAce, please consider supporting the project by **becoming a [Patreon](https://www.patreon.com/Kovah)
or [Github Sponsor](https://github.com/sponsors/Kovah)**. ⭐️
{{</ alert >}}
