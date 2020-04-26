---
title: About LinkAce
---

LinkAce is a self-hosted web application for managing a bookmark archive. I built this tool to have something that fits
my actual needs which other bookmark managers couldn't solve.

The primary intention of the application is to provide a long-term solution to archive links and organize them. Links
may be added from the web application, the bookmarklet, or a third-party application via the API.  
LinkAce is not a management application for your browser bookmarks, therefore there is no synchronization feature
present. If you want to connect both, you can access all LinkAce data via the API.


## Features

### Highlights

**Automated link monitoring**  
Links are checked regularly after you saved them. If a link is either not available or was moved (HTTP status 301/302),
you will get a notification with details.

**Automated backups of links**  
After saving a link the Wayback Machine of the Internet Archive is automatically notified about the website. Once
notified, the archive will backup the site for you so it stays available whatever happens.

**Tags & lists**
Tags can be added to links to categorize them without any strict hierarchy. Lists are meant to bundle several links 
together for one broader meaning. For example, the `open-source` tag categorized all links of open source projects and 
the `macos` tag categorizes links for neat macOS apps. A `Open Source macOS Apps` list may contain links to your 
favourite, open source macOS applications, while both used tags are not directly related to each other.

**Guest mode & public access**  
You can enable public access of your LinkAce archive in the system settings. Public access, also called guest access,
is an important setting regarding privacy and maybe also security. If turned on, guests will be able to 
* view all links that are not marked as private,
* view all tags that are not marked as private, and
* view all lists that are not marked as private.

**Browser bookmarklet**
Instead of installing the 20th browser extension, LinkAce offers a neat and simple bookmarklet. Once saved in your
bookmarks, a click will open a special form to add the current open website of your browser to LinkAce.

**The REST API**  
LinkAce offers a dedicated REST API to access, create, update and delete links, tags, lists and notes. The API is 
accessible via an API key.

**Advanced search**  
The search allows you to search through all your links and filter them by various data points, as well as ordering
them by URL, creation date, and so on.

**Light and dark theme**  
Dark mode is not only a trend, but a helpful and eye-protecting feature also available in LinkAce. You can switch
between the light or dark theme or let the app set the theme automatically based on your operating system.


### Other Features

* Titles and descriptions are generated automatically once you saved a link in LinkAce.
* Add unlimited notes to links to add thoughts, details, to dos or whatever you don't want to put into the link 
  description.
* To make sharing as easy as possible, LinkAce prepares share links for a lot of different apps: email, Twitter,
  Whatsapp, Reddit,...
* You can import existing bookmarks from your browser based on a standard HTML file. Or export all links saved in
  LinkAce to this standard format to be consumed by browsers or other applications.
* The app can be backed up to Amazon AWS, including both the application files and the database.
* Links, tags, lists or notes are not permanently deleted. A trash holds all "deleted" entries so nothing gets lost
  accidentally. You can restore all entries from the trash.
* A lot of configuration options ensure that LinkAce fits your needs: timezone, time and date formats, defaults for
  link creation, and many more.


## Roadmap

Version 1.0 of LinkAce will be a first major version of the app containing all features I need and want to use. At the 
moment, there are no plans to release a new major version in the near future. If you need new features you may request
them via the issue tracker or the Reddit or Spectrum community, but do not expect them being developed within a week.

Please keep in mind that LinkAce is offered for free because I think that others might find the tool useful.
Act accordingly.
