# CPEx Package: Settings
This module takes paths from `window.cpexPackageConfig`, loads setting files from CDN and merges them into one complete internal configuration.

## Example
This folder contains an example of setting files that should live at cdn.cpex.cz/settings

#### There are two kinds:
- Publisher settings ― in root folder
- Website settings ― in subfolders named after publisher tags

*Note: Use new website settings for subdomains. Set them the same way as a new website.*

#### Folder structure:
```
📂 settings
 ┣ 📜 cpex.js
 ┣ 📜 vlm.js
 ┣ 📂 cpex
 ┃ ┗ 📜 cpex.cz.js
 ┃ ┗ 📜 playground.cpex.cz.js
 ┗ 📂 vlm
   ┗ 📜 slunecnice.cz.js
   ┗ 📜 lupa.cz.js
```
