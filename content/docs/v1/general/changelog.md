---
title: LinkAce Changelog
---


### 1.7.0

_Released at 2021-10-06_

- You can now search for tags and lists directly on the overview pages. Many thanks to gavinr for his contribution! (#309)
- Users are now notified if a link already exists in the Bookmarklet form. The edit form was optimized too. (#318)
- Custom HTML can be added to the `<head>`. Useful for adding analytics scripts. (#280)
- New translations for Catalan, Spanish and Hungarian were added. Huge thanks to Patrick Mates, aladecom and Xorxe!
- Tags can be ordered correctly in the guest mode. (#306)
- Display of public/private links in guest mode were fixed. (#307)
- Dependencies were updated.


### 1.6.4

_Released at 2021-08-08_

- The setup process was improved and issues were fixed. (#288)
- Long list and tag names won't break the dashboard interface anymore. (#303)
- Private tags and lists have the lock indicator on their detail pages now. (#304)
- Translations and dependencies were updated.


### 1.6.3

_Released at 2021-06-06_

- Link tags are also shown in the search results now. (#279)
- Fixes issues with the search box on the dashboard. (#278)
- Dependencies were updated.


### 1.6.2

_Released at 2021-05-10_

- Fixes an issue where link thumbnail URLs caused links to not be saved. (#274)
- Dependencies were updated.
- Large internal code cleanup and optimization.


### 1.6.1

_Released at 2021-04-19_

- Youtube links with underscores now get the correct thumbnail. (#263)
- Update checks are cached for a day as intended by default.
- The Docker update script was corrected. (#259)
- LinkAce now provides basic social meta information for sharing and a social media image.
- Minor optimizations for internal SVG usage.


### 1.6.0

_Released at 2021-04-18_

- LinkAce now saves a thumbnail URl for a link if it is provided through `og:image` or `twitter:image` in the HTML meta tags. Thumbnails are shown on the detail page in and lists with many details. This is a "light" version of providing screenshots for links. (#18)
- A new command for updating the thumbnails of all links is now available.
- Restructuring of some internal components, as well as minor code quality improvements.
- Update checks were updates to use less traffic.
- Dependencies were updated.


### 1.5.0

_Released at 2021-04-09_

- LinkAce now provides RSS feeds for public links. Private feeds can be accessed by using the API token. [Read more]({{< relref path="docs/v1/configuration/user-settings.md" >}}). (#197)
- Links can manually be set to a "working" status. Helpful if LinkAce has issues correctly checking the status of the link. (#234)
- Users can now search for links which have no tags or lists assigned. (#257)
- The simple Docker image was fixed. (#258)
- Issues with incorrect search results while searching in title and description were fixed.
- Dependencies were updated.


### 1.4.1

_Released at 2021-03-27_

- Fix issues with empty HTML meta tags by using a hotfix version of the laravel-html-meta package. (#253)
- Corrects usage of the application backups package. (#251)


### 1.4.0

_Released at 2021-03-25_

**This release requires additional steps while upgrading. Please [read the upgrade guide]({{< relref path="docs/v1/upgrade#version-specific-upgrades" >}}).**

- LinkAce now supports the ARM platform (ARM64 and ARM v7). (#175)
- You can now use third-party S3 services for application backups, instead of AWS S3. (#198)
- Redis sockets can now be used instead of TCP-based connections. (#196)
- The dashboard was extended with a search box, the latest tags and latest lists. (#188 #192)
- French translation was added. Many thanks to [@secnum](https://github.com/secnum)!
- Dependencies were updated.


### 1.3.1

_Released at 2021-03-07_

- The cron token is now properly changed when you re-generate it. (#245)
- Fixes issue with failing update check in footer. (#244)
- HTML meta is now provided by the [kovah/laravel-html-meta](https://github.com/Kovah/laravel-html-meta) package to fix issues with encoding. (#238)


### 1.3.0

_Released at 2021-03-06_

- Markdown is now supported in link descriptions and notes, can be enabled in the user settings. (#217)
- Share links are now hidden if all services are disabled. (#233)
- Fixed issue with encoding of HTML meta while adding links. (#238)
- Link checks were improved: timeout was increased, status codes are now handled properly. (#236)
- Fixed issue with overflowing tag suggestions. (#242)
- The Linkace version and update check is now displayed in the footer. (#220)
- Link tables now contain tags.
- Dependencies were updated.


### 1.2.2

_Released at 2021-02-07_

- A link to a search for broken links was added to the dashboard.
- Fix of the current LinkAce version.
- Dependencies were updated.


### 1.2.1

_Released at 2021-02-04_

- LinkAce properly handles issues with character encoding now. (#225)
- Users can now search for broken links only.
- Dependencies were updated to fix some security vulnerabilities.


### 1.2.0

_Released at 2021-01-20_

- A new command to import bookmarks from a file from the filesystem. (#201)
- The bookmarklet now accepts a description from text selected on the current website. (#214)
- The simple Docker image is now capable of running application backups to Amazon AWS. (#216)
- LinkAce logo is now properly sized on the login page. (#212)
- `utf8mb4_bin` is now the default collation for databases in the example docker-compose files. (#206)
- A lot of security, performance and code maintainability issues were fixed. System settings are now properly cached.
- Dependencies were updated to fix some security vulnerabilities.


### 1.1.0

_Released at 2021-01-11_

- Title and description are now searched by default. (#211)
- Adds new command to view 2FA recovery codes. (#173)
- Improve accessibility of icons used in the UI. (#181)
- Optimize performance of link checks and the Wayback Machine handling.
- Updates for all dependencies.


### 1.0.1

_Released at 2020-12-21_

- Fixes an issue with the setup not working correctly because of a wrong redirect. (#186)
- The input field for the quick link adding is now checking for a valid URL. (#187)
- Favicons are now loaded correctly.
- Links are now added faster, because the Internet Archive backup was optimized.
- Security fix: history entries on the link detail page are now properly escaped.
- Styling of tag and list selects are corrected in dark mode.
- The URL is correctly validated for tag suggestions loading.
 
 
### 1.0.0

_Released at 2020-12-16_

First stable release of LinkAce. 
