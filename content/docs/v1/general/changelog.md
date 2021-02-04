---
title: LinkAce Changelog
---

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
