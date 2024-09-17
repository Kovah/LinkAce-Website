---
title: User Management
weight: 20
---

LinkAce supports multiple users working on the same application, sharing links, lists and tags with each other. There are two major user groups in LinkAce:

- **Admin** - Admins are meant to maintain LinkAce, configure several system-wide options and invite new users. Admins are by no means meant to act like "gods", i.e. they can't see private stuff from other users.
- **User** - Registered users are able to see anything created and shared by other users that are either `public` or `internal`.  

{{< table >}}

| Option | Description |
|:------|:------------|
| Private | Anything set to private can only be seen by the user itself. It cannot be viewed, edited or be used by either guests, other users or admins. |
| Internal | Anything set to `internal` can be viewed and used by other registered users or admins. Guests cannot see internal links, lists or tags. |
| Public | Public works the same way like internal. If guests are additionally able to view stuff set to public depends on the [Guest Mode]({{< relref path="docs/v2/configuration/system-settings.md#guest-settings" >}}). If Guest Mode is enabled, guests can view anything that is set to public. |

{{< / table >}}

## Inviting new Users

Admins can invite people to sign up for their LinkAce. Please note that LinkAce is not meant to be used as a social network, but only for dedicated user groups. You should know who uses LinkAce and what the users are primarily doing.

{{< alert type="info" >}}
LinkAce must be able to send emails to invite new users. Please refer to the [email configuration docs]({{< relref path="docs/v2/setup/post-setup.md" >}}) for more details.
{{</ alert >}}

To invite a user to LinkAce, click on your user name in the navigation, and then on `User Management`. The invitation form can be found at the bottom of your user list. Enter the email address of your user and send it. The user will receive an invitation to his email address with a registration link.

## Blocking or deleting Users

Admins can **block** or **delete** users. Both actions are available from the user information page, which can be accessed by clicking `Show` on a user on the User Management page.

Blocking is helpful in case the user account should remain available for later use, or as a reference. Blocked users will not be able to login, but other users can still use stuff they created and have set to either public or internal.

If a user is deleted, the user profile will be disabled. However, all content the user created and has set to public or internal can be used by other users.
A deleted user can be restored at any point.
