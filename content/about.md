---
title: About LinkAce
---

LinkAce is a self-hosted web application for managing a bookmark archive. I built this tool as I wasn't satisfied with the existing bookmarking solutions.

I created LinkAce to have a long-term solution to archive and organize my bookmarks. Browser bookmarks sadly lack a lot of features, like proper search, advanced categorization or even the backup of those sites. Therefore, I use browser bookmarks for regularly accessed sites and have a separate application that takes care of all those links I would like to "keep in mind" but don't want to pollute my browser bookmarks with.

The main feature of LinkAce is the archival and organization of links. Those links can be anything that has a valid URL: blog articles, Youtube videos, Reddit posts, github projects, and so on. Add new links, categorize them, edit them, search through them. That's the main point of LinkAce.


### Feature Highlights

**Automated link monitoring**  
Links are checked regularly after you saved them. If a link is either not available or was moved (HTTP status 301/302), you will get a notification with details.

**Automated backups of links**  
After saving a link the Wayback Machine of the Internet Archive is automatically notified about the website. Once notified, the archive will backup the site for you so it stays available whatever happens.

**Tags & lists**
Tags can be added to links to categorize them without any strict hierarchy. Lists are meant to bundle several links together for one broader meaning. For example, the `open-source` tag categorized all links of open source projects and the `macos` tag categorizes links for neat macOS apps. A `Open Source macOS Apps` list may contain links to your favourite, open source macOS applications, while both used tags are not directly related to each other.

**Guest mode & public access**  
You can enable public access of your LinkAce archive in the system settings. Public access, also called guest access, is an important setting regarding privacy and maybe also security. If turned on, guests will be able to 
* view all links that are not marked as private,
* view all tags that are not marked as private, and
* view all lists that are not marked as private.

**Browser bookmarklet**
Instead of installing the 20th browser extension, LinkAce offers a neat and simple bookmarklet. Once saved in your bookmarks, a click will open a special form to add the current open website of your browser to LinkAce.

**The REST API**  
LinkAce offers a dedicated REST API to access, create, update and delete links, tags, lists and notes. The API is accessible via an API key.

**Advanced search**  
The search allows you to search through all your links and filter them by various data points, as well as ordering them by URL, creation date, and so on.

**Light and dark theme**  
Dark mode is not only a trend, but a helpful and eye-protecting feature also available in LinkAce. You can switch between the light or dark theme or let the app set the theme automatically based on your operating system.

Want to know more? Check out the [feature overview]({{< relref path="features" >}}).


## Roadmap

Version 1.0 of LinkAce will be a first major version of the app containing all features I need and want to use. At the moment, there are no plans to release a new major version in the near future. If you need new features you may request them via the issue tracker or the Reddit or Spectrum community, but I do not guarantee that they will be built into LinkAce.

Please keep in mind that LinkAce is offered for free because I think that others might find the tool useful. I created this application entirely in my free time.
