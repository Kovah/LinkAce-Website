---
title: LinkAce Changelog
---

## 1.11.1

_Released at 2023-01-22_

- The password reset no longer exposes if user accounts exist.
- Adds a new command to complete the setup if installing with PostgreSQL or SQLite.
- Add hint about special characters in passwords. ({{<issuelink 596>}})
- Tags are set to private during the import if the user setting is configured to do so. ({{<issuelink 588>}})
- Updated dependencies


## 1.11.0

_Released at 2022-12-15_

**Support for PHP 7.4 was dropped. LinkAce only supports PHP 8.0, 8.1 and 8.2.**

- Added the Italian translation provided by Alessandro Del Prete
- Added the Polish translation provided by Mateusz Hajder and Zimmy
- QR Codes for 2-Factor-Authentication (2FA) can be scanned when dark mode is activated. ({{<issuelink 501>}})
- Toggles for active share services are now properly handled. ({{<issuelink 581>}})
- The "Links are private by default" setting is taken into account when importing bookmarks. ({{<issuelink 577>}})
- Updated dependencies: Laravel 9, Spatie Backup and many more
- LinkAce now offers a bug bounty program for critical security vulnerabilities. Details can be found in the [Security Policy](https://github.com/Kovah/LinkAce/security/policy).


## 1.10.5

_Released at 2022-11-17_

Please note that the LinkAce Docker image will be renamed with the release of LinkAce 2! [Read more](https://github.com/Kovah/LinkAce/issues/502)

- Fixed an issue where not only time zone options were available in the user settings. ({{<issuelink 568>}})
- Adjusted the notices about APP_KEYs in the .env files ({{<issuelink 540>}})
- Fix issue with all links being public despite setting is set to private ({{<issuelink 504>}})
- Updated dependencies


## 1.10.4

_Released at 2022-09-04_

- The docker-compose files for setting up LinkAce with Docker were changed and backups are now **enabled by default**. Please [read the upgrade guide]({{< relref path="docs/v1/upgrade#version-specific-upgrades" >}}).
- A new command for listing all active users was added: [`users:list`]({{< relref path="docs/v1/upgrade#version-specific-upgrades" >}})
- Updated dependencies


## 1.10.3

_Released at 2022-08-16_

Big thanks to [Dzung Do](https://github.com/saosangmo) and [Ahmad Khalili](https://github.com/Ahmad-kh) for their first contribution to LinkAce! 🥳

- Added the Vietnamese translation provided by Dzung Do
- Typo fix in SearchTrait by Ahmad Khalili
- Updated dependencies
- Updates to Readme, contribution and issue templates

## 1.10.2

_Released at 2022-06-10_

Big thanks to [Yasin Baran](https://github.com/brnysn) for his first contribution to LinkAce! 🥳

- Some websites are now properly checked for meta information ({{<issuelink 465>}})
- Automatic app backups should now run properly without permission changes ({{<issuelink 475>}})
- Timeouts for saving links to the Wayback Machine are now ignored ({{<issuelink 472>}})
- Added new configuration options for S3 for third-party services, see [advanced .env settings]({{< relref path="docs/v1/configuration/env-settings.md" >}}) for more details. ({{<issuelink 476>}})
- LinkAce skips the link check in the import command if email is not configured ({{<issuelink 445>}})
- Remove the typed characters from tag and list select once item is selected ({{<issuelink 378>}})
- Some websites are now properly checked for meta information ({{<issuelink 465>}})
- Updated dependencies


## 1.10.1

_Released at 2022-05-02_

- Alex Tu fixed an issue with the input styling in dark mode ({{<issuelink 448>}})
- Minor design changes and small fixes
- Added translation for Norwegian
- Updated dependencies


## 1.10.0

_Released at 2022-04-04_

- LinkAce is way less dependent on the .env file. It is still needed, but it was reduced to the bare minimum. However, existing LinkAce installations do not have to change anything. ({{<issuelink 398>}})  
  **Attention**: if you upgraded LinkAce and the setup starts, abort immediately and report this in the [discussion forum](https://github.com/Kovah/LinkAce/discussions)!
- There are now dedicated packages for Docker setups that contain all needed files. ({{<issuelink 426>}})
- Added a new display option for links: cards with many details. ({{<issuelink 305>}})
- The "list with many details" display option was extended to also display the link description. ({{<issuelink 352>}})
- When ordering/sorting links, lists or tags, the order is now saved through the session. ({{<issuelink 349>}})
- Services used in the Docker setups were updated to the latest versions.
- Translations were updated.
- Dependencies were updated.


## 1.9.2

_Released at 2022-03-11_

- Corrected the documentation for local backups: `BACKUP_DISK` must be set to `local_backups` instead of `local`. ({{<issuelink 381>}})
- Added backup-temp directory to the storage to prevent possible permission issues inside Docker. ({{<issuelink 412>}})
- LinkAce now supports PHP 8.1 and the Docker images are using PHP 8.1 and Node 16.
- Dependencies were updated to mitigate security vulnerabilities.


## 1.9.1

_Released at 2022-01-20_

- Users are redirected back after links are deleted from lists and tags. ({{<issuelink 355>}})
- New tags and lists can be added inside the bookmarklet again. ({{<issuelink 356>}})


## 1.9.0

_Released at 2022-01-14_

- LinkAce now uses Bootstrap 5 and comes with a slightly updated design. ({{<issuelink 345>}})
- The old Selectize library was replaced and jQuery removed, resulting in 30% smaller assets. ({{<issuelink 343>}})
- You can now set a custom core timezone using `APP_TIMEZONE`. Please read the [documentation]({{< relref path="docs/v1/configuration/system-settings.md#advanced-system-settings" >}}) before using this setting! ({{<issuelink 348>}})
- You can now set a custom User Agent to prevent being blocked by websites. [Read more]({{< relref path="docs/v1/configuration/system-settings.md#advanced-system-settings" >}}) ({{<issuelink 334>}})
- Tags and lists are now properly preserved when logging in while using the bookmarklet. ({{<issuelink 350>}})
- Dependencies were updated.


## 1.8.1

_Released at 2022-01-08_

- Contains a fix for properly handling link deletion. ({{<issuelink 346>}})


## 1.8.0

_Released at 2022-01-06_

- **LinkAce now requires PHP 7.4 and uses Node 16 by default.**
- The API now accepts a `per_page` query parameter to define the amount of items in paged results. Use `0` to return unlimited results. ({{<issuelink 294>}})
- The bookmarklet now accepts additional tags and lists as query parameters. ({{<issuelink 308>}})
- When deleting links, lists or tags, you are redirected to the previous page instead to the overview. ({{<issuelink 341>}})
- The welcome screen / splash screen was removed. ({{<issuelink 325>}})
- Duplicate error messages were removed. ({{<issuelink 329>}})
- Links are opened in a new tab on the simple list, if activated in the settings. ({{<issuelink 339>}}) 
- Dependencies were updated.


## 1.7.0

_Released at 2021-10-06_

- You can now search for tags and lists directly on the overview pages. Many thanks to gavinr for his contribution! ({{<issuelink 309>}})
- Users are now notified if a link already exists in the Bookmarklet form. The edit form was optimized too. ({{<issuelink 318>}})
- Custom HTML can be added to the `<head>`. Useful for adding analytics scripts. ({{<issuelink 280>}})
- New translations for Catalan, Spanish and Hungarian were added. Huge thanks to Patrick Mates, aladecom and Xorxe!
- Tags can be ordered correctly in the guest mode. ({{<issuelink 306>}})
- Display of public/private links in guest mode were fixed. ({{<issuelink 307>}})
- Dependencies were updated.


## 1.6.4

_Released at 2021-08-08_

- The setup process was improved and issues were fixed. ({{<issuelink 288>}})
- Long list and tag names won't break the dashboard interface anymore. ({{<issuelink 303>}})
- Private tags and lists have the lock indicator on their detail pages now. ({{<issuelink 304>}})
- Translations and dependencies were updated.


## 1.6.3

_Released at 2021-06-06_

- Link tags are also shown in the search results now. ({{<issuelink 279>}})
- Fixes issues with the search box on the dashboard. ({{<issuelink 278>}})
- Dependencies were updated.


## 1.6.2

_Released at 2021-05-10_

- Fixes an issue where link thumbnail URLs caused links to not be saved. ({{<issuelink 274>}})
- Dependencies were updated.
- Large internal code cleanup and optimization.


## 1.6.1

_Released at 2021-04-19_

- Youtube links with underscores now get the correct thumbnail. ({{<issuelink 263>}})
- Update checks are cached for a day as intended by default.
- The Docker update script was corrected. ({{<issuelink 259>}})
- LinkAce now provides basic social meta information for sharing and a social media image.
- Minor optimizations for internal SVG usage.


## 1.6.0

_Released at 2021-04-18_

- LinkAce now saves a thumbnail URl for a link if it is provided through `og:image` or `twitter:image` in the HTML meta tags. Thumbnails are shown on the detail page in and lists with many details. This is a "light" version of providing screenshots for links. ({{<issuelink 18>}})
- A new command for updating the thumbnails of all links is now available.
- Restructuring of some internal components, as well as minor code quality improvements.
- Update checks were updates to use less traffic.
- Dependencies were updated.


## 1.5.0

_Released at 2021-04-09_

- LinkAce now provides RSS feeds for public links. Private feeds can be accessed by using the API token. [Read more]({{< relref path="docs/v1/configuration/user-settings.md" >}}). ({{<issuelink 197>}})
- Links can manually be set to a "working" status. Helpful if LinkAce has issues correctly checking the status of the link. ({{<issuelink 234>}})
- Users can now search for links which have no tags or lists assigned. ({{<issuelink 257>}})
- The simple Docker image was fixed. ({{<issuelink 258>}})
- Issues with incorrect search results while searching in title and description were fixed.
- Dependencies were updated.


## 1.4.1

_Released at 2021-03-27_

- Fix issues with empty HTML meta tags by using a hotfix version of the laravel-html-meta package. ({{<issuelink 253>}})
- Corrects usage of the application backups package. ({{<issuelink 251>}})


## 1.4.0

_Released at 2021-03-25_

**This release requires additional steps while upgrading. Please [read the upgrade guide]({{< relref path="docs/v1/upgrade#version-specific-upgrades" >}}).**

- LinkAce now supports the ARM platform (ARM64 and ARM v7). ({{<issuelink 175>}})
- You can now use third-party S3 services for application backups, instead of AWS S3. ({{<issuelink 198>}})
- Redis sockets can now be used instead of TCP-based connections. ({{<issuelink 196>}})
- The dashboard was extended with a search box, the latest tags and latest lists. (#188 #192)
- French translation was added. Many thanks to [@secnum](https://github.com/secnum)!
- Dependencies were updated.


## 1.3.1

_Released at 2021-03-07_

- The cron token is now properly changed when you re-generate it. ({{<issuelink 245>}})
- Fixes issue with failing update check in footer. ({{<issuelink 244>}})
- HTML meta is now provided by the [kovah/laravel-html-meta](https://github.com/Kovah/laravel-html-meta) package to fix issues with encoding. ({{<issuelink 238>}})


## 1.3.0

_Released at 2021-03-06_

- Markdown is now supported in link descriptions and notes, can be enabled in the user settings. ({{<issuelink 217>}})
- Share links are now hidden if all services are disabled. ({{<issuelink 233>}})
- Fixed issue with encoding of HTML meta while adding links. ({{<issuelink 238>}})
- Link checks were improved: timeout was increased, status codes are now handled properly. ({{<issuelink 236>}})
- Fixed issue with overflowing tag suggestions. ({{<issuelink 242>}})
- The Linkace version and update check is now displayed in the footer. ({{<issuelink 220>}})
- Link tables now contain tags.
- Dependencies were updated.


## 1.2.2

_Released at 2021-02-07_

- A link to a search for broken links was added to the dashboard.
- Fix of the current LinkAce version.
- Dependencies were updated.


## 1.2.1

_Released at 2021-02-04_

- LinkAce properly handles issues with character encoding now. ({{<issuelink 225>}})
- Users can now search for broken links only.
- Dependencies were updated to fix some security vulnerabilities.


## 1.2.0

_Released at 2021-01-20_

- A new command to import bookmarks from a file from the filesystem. ({{<issuelink 201>}})
- The bookmarklet now accepts a description from text selected on the current website. ({{<issuelink 214>}})
- The simple Docker image is now capable of running application backups to Amazon AWS. ({{<issuelink 216>}})
- LinkAce logo is now properly sized on the login page. ({{<issuelink 212>}})
- `utf8mb4_bin` is now the default collation for databases in the example docker-compose files. ({{<issuelink 206>}})
- A lot of security, performance and code maintainability issues were fixed. System settings are now properly cached.
- Dependencies were updated to fix some security vulnerabilities.


## 1.1.0

_Released at 2021-01-11_

- Title and description are now searched by default. ({{<issuelink 211>}})
- Adds new command to view 2FA recovery codes. ({{<issuelink 173>}})
- Improve accessibility of icons used in the UI. ({{<issuelink 181>}})
- Optimize performance of link checks and the Wayback Machine handling.
- Updates for all dependencies.


## 1.0.1

_Released at 2020-12-21_

- Fixes an issue with the setup not working correctly because of a wrong redirect. ({{<issuelink 186>}})
- The input field for the quick link adding is now checking for a valid URL. ({{<issuelink 187>}})
- Favicons are now loaded correctly.
- Links are now added faster, because the Internet Archive backup was optimized.
- Security fix: history entries on the link detail page are now properly escaped.
- Styling of tag and list selects are corrected in dark mode.
- The URL is correctly validated for tag suggestions loading.
 
 
## 1.0.0

_Released at 2020-12-16_

First stable release of LinkAce. 
