---
title: LinkAce Changelog
---

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
