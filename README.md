
# CPEx Package: Settings
Settings are files saved into the [package-settings git repository](https://git.cpex.cz/frontend/package-settings) and then published to our cdn.cpex.cz. Paths to them are added into the page with `window.cpexPackageConfig`.
The main package object loads the setting files and merges them into one complete internal configuration.

**Note: Website always overrides publisher setting**
If there is a different value for the same attribute, the rule is that the more specific setting (website) overrides the more generic setting (publisher).

## Example
Example of setting files is in `playground/assets/settings` folder, used for the actual testing page.

#### Two types
  - Publisher settings ― in root folder
  - Website settings ― in subfolders named after publisher tags

*Note: Use new website settings for subdomains. Set them the same way as a new website.*

#### Environments
There are multiple environment folders, for testing purposes. They use the same general scheme.

#### Browser testing
You can use URL attributes to toggle different versions. It's possible to combine them.

| Attribute       | Values                                                             |
|-----------------|--------------------------------------------------------------------|
| `debug`         | Loads unminified library, enables debug mode (for pbjs too)        |
| `stagePackage`  | Loads library from stage folder                                    |
| `stageSetPub`   | Loads publisher settings from stage folder                         |
| `stageSetWeb`   | Loads website settings from stage folder                           |

#### Folder structure:
```
📂 settings
 ┣ 📂 production
 ┃ ┗ 📜 cpex.js
 ┃ ┗ 📜 vlm.js
 ┃ ┣ 📂 cpex
 ┃ ┃ ┗ 📜 cpex.cz.js
 ┃ ┃ ┗ 📜 playground.cpex.cz.js
 ┃ ┗ 📂 vlm
 ┃   ┗ 📜 slunecnice.cz.js
 ┃   ┗ 📜 lupa.cz.js
 ┗ 📂 stage
   ┗ 📜 vlm.js
   ┗ 📂 vlm
     ┗ 📜 slunecnice.cz.js
     ┗ 📜 lupa.cz.js
```

## GIT Repository
The settings should be saved and versioned in a git repository, here: [https://git.cpex.cz/frontend/package-settings](https://git.cpex.cz/frontend/package-settings). This is done automatically by the Settings Editor.

## Settings Editor
We have a Settings Editor which handles loading, saving, integration with production sheets and publishing of all settings.
It can be found here: [https://editor.cpex.cz](https://editor.cpex.cz)

## Queue
If you need to set settings per page, or from some other source, you can use a queue. It's an array of functions which is run when the library loads and loads its settings.

Example:
```js
window.cpexPackageQueue = window.cpexPackageQueue || []
window.cpexPackageQueue.push(() => {
  window.cpexPackage.settings.headerbidding.enabled = false
})
```

## LocalStorage Override
In case you need to test same change only on your machine, you can replicate your desired settings into a `cpexPackage` key in localStorage of the tested website.
It will be merged into previously loaded settings.

## DOM element references
There are settings for some ad formats that require DOM references, for proper placement and styling.
These are done with a simple javascript code but they have to be wrapped in brackets (), for correct parsing in Settings Editor. Use only single quotes.

## Complete reference

### General
Common package configuration, mainly handling of events and scripts.

**Note:** JS function can be either named function (any name) or lambda (arrow) function.
Has to have trailing comas, as line breaks may be lost. Only single quotes are allowed.

`general: {}`
| Attribute      | Type: Values                                              | Default    |
|----------------|-----------------------------------------------------------|------------|
| `autoRun`      | Bool: true starts package once loaded                     | true       |
| `customRun`    | Function: fired when autoRun is disabled                  |            |
| `beforeLoad`   | Function: fired before run, only settings are loaded      |            |
| `onLoad`       | Function: fired once package is fully loaded              |            |
| `errorPath`    | String: enables error logging. Added to cpexPackageConfig |            |

### Publisher info
`publisher: {}`
*Only used for publisher settings*
| Attribute      | Type: Values                                      | Default    |
|----------------|---------------------------------------------------|------------|
| `code`         | String: Required, short standard publisher id     |            |
| `name`         | String: optional, legal name of the publisher     |            |
| `note`         | String: optional, useful note for production      |            |
| `sellerId`     | Number: required, from cpex.cz/sellers.json       | 0          |

### Website info
`website: {}`
*Only used for website settings*
| Attribute      | Type: Values                                      | Default    |
|----------------|---------------------------------------------------|------------|
| `name`         | String: optional, name of the website             |            |
| `note`         | String: optional, useful note for production      |            |

### AB
`ab: {}`
*To test multiple settings against each other*
| Attribute          | Type: Values                                                  | Default    |
|--------------------|---------------------------------------------------------------|------------|
| `enabled`          | Bool                                                          | false      |
| `groupList`        | Object: `Group Objects`*, keys are names of the test groups   |            |
| `selectGroup`      | Function: custom selection method, should return group name   |            |
| `sasKey`           | String: SAS key to use for sending the group name             |            |

  #### * Group object
  | Attribute          | Type: Values                                     | Default    |
  |--------------------|--------------------------------------------------|------------|
  | `websiteSettings`  | String: URL to override website settings         |            |
  | `probability`      | Float: range of 0 to 1, all has to add up to 1   | 0          |

  #### Example
  ```js
  ab.groupList: {
    a: { websiteSettings: 'https://cdn.cpex.cz/settings/cpex/playground.js', probability: 0.5 },
    b: { websiteSettings: 'https://cdn.cpex.cz/settings/cpex/playgroundB.js', probability: 0.5 },
  }
  ```

### CMP
`cmp: {}`
| Attribute        | Type: Values                                     | Default    |
|------------------|--------------------------------------------------|------------|
| `enabled`        | Bool                                             | true       |
| `payEnabled`     | Bool                                             | false      |
| `payConfig`      | Object: configuration for 'pay' type. See below. |            |
| `didomiTemplate` | String: custom didomi template to load           |            |
| `pixelList`      | Array: URL strings                               | array      |

#### CMP: payConfig ("Pay or Okay" variant)
| Attribute          | Required | Type: Values                                                           | Default              |
|--------------------|----------|------------------------------------------------------------------------|----------------------|
| `texts`            | No       | Function: Custom texts, returns object with subset of keys of texts.js | in texts.js          |
| `generalCSS`       | No       | Function: Return string of all CSS, if you want to start from scratch  | in styles.js         |
| `overrideCSS`      | No       | Function: Return string of some CSS, if you want minor changes         |                      |
| `links`            | No       | Array: Objects with HTML attributes for links shown in footer          | in texts.js          |
| `veil`             | No       | Boolean: Whether to cover the underlying website                       |                      |
| `purposeList`      | No       | Boolean: Whether to show purpose list in footer                        |                      |
| `primaryLogoURL`   | No       | String: URL to the website logo                                        |                      |
| `secondaryLogoURL` | No       | String: URL to the publisher logo                                      |                      |
| `registerURL`      | Yes      | String: URL or `javascript:` to registration                           |                      |
| `loginURL`         | Yes      | String: URL or `javascript:` to login                                  |                      |
| `consentDateLimit` | No       | String: ISO date (`new Date().toISOString()`) for resetting consent    |                      |
| `required`         | Yes      | Array: List of mandatory consent purposes (*), shouldn't be empty      | ['cookies']          |
| `pixels`           | No       | Array: Array of URLs that will be fired as pixel images                |                      |

### DSA
(Digital Services Act) EU requirement to show information about advertisers and profiling
`dsa: {}`
| Attribute      | Type: Values                                     | Default    |
|----------------|--------------------------------------------------|------------|
| `enabled`      | Bool                                             | true       |
| `render`       | Bool: enables rendering of ad info               | true       |
| `pixelList`    | Array: URL strings                               | array      |

### Analytics
`analytics: {}`
| Attribute      | Type: Values                                     | Default    |
|----------------|--------------------------------------------------|------------|
| `enabled`      | Bool                                             | true       |
| `force`        | Bool: allows to skip consent check               | false      |

### Ad server
**Note:** To properly merge between the two types of settings, SSPs should be named consistently. Please use the following strings: **pubmatic, index, magnite, xandr**

`adserver: {}`
| Attribute            | Type: Values                                                   | Default      |
|----------------------|----------------------------------------------------------------|--------------|
| `adapter`            | String: required, which adapter to use                         |              |
| `enabled`            | Bool: disabling disables HB as well                            | true         |
| `loadPrerequisites`  | Bool: loads libraries for adserver                             | false        |
| `delayCall`          | Number: timeout in milliseconds                                | 0            |
| `defineSlots`        | **GAM only** Array: slot definition Objects                    |              |
| `gamPrefix`          | **GAM only** String: path of GAM website, used for defineSlots |              |
| `gamId`              | **GAM only** String: id of GAM instance, used for defineSlots  |              |
| `adsObjectEvent`     | **SAS only** String: name of custom event to wait for          |              |
| `allowedSSPs`        | **SAS only** Object: advertiser IDs allowed for custom formats |              |
| `bidderTable`        | **SAS only** Object: bidder names in the SAS instance          |              |

  - defineSlots: slot definition object: `{ elementId: '', sizes: [], path: '' }`
  - allowedSSPs default: `{ pubmatic: 1, index: 3, magnite: 4, xandr: 5 }`
  - bidderTable default: `stroeerCore: stroeer, appnexus: xandr_hb, pubmatic: pubmatic_hb, rubicon: magnite_hb, adform: adform, im-adform: im-adform, r2b2: r2b2, triplelift: triplelift_hb, ix: index_hb, smart: smart, teads: teads, rtbhouse: rtbhouse`

### Header-bidding
`headerbidding: {}`
| Attribute            | Type: Values                                      | Default                         |
|----------------------|---------------------------------------------------|---------------------------------|
| `enabled`            | Bool                                              | true                            |
| `prebidPath`         | String: URL                           | https://cdn.cpex.cz/hb/prebid/prebid.min.js |
| `currency`           | String: converts CPM into this currency           | 'USD'                           |
| `prebidDebug`        | Bool: toggles debug logging from Prebid           | false                           |
| `adUnits`            | Array: AdUnit Objects (below) + custom `filter`*  | []                              |
| `passbacks`          | Object: adUnit keys with function to be called    | {}                              |
| `auctionTimeoutMs`   | Number: sets pbjs.requestBids timeout             | 1000                            |
| `cmpLoadTimeoutMs`   | Number: sets consentManagement.gdpr.timeout       | 1000                            |
| `cmpActionTimeoutMs` | Number: sets consentManagement.gdpr.actionTimeout | 2000                            |
| `userIDs`            | Array: names of modules to enable                 | ['id5Id', 'sharedId', 'criteo'] |
| `analytics`          | Array: names of adapters to enable                | ['id5Analytics']                |
| `bidderSettings`     | Object: allows custom bidder configuration        |                                 |
| `customBuckets`      | Array: Numbers, each is ceiling of new tier       |                                 |
| `priceFloorsUrl`     | String: path to dynamic price floor data (JSON)   |                                 |
| `analyticsGet3PC`    | Boolean: detect and send 3rd party cookie support |                                 |

[Standard AdUnit reference](https://docs.prebid.org/dev-docs/adunit-reference.html)
[Bidder Settings reference](https://docs.prebid.org/dev-docs/publisher-api-reference/bidderSettings.html)

  #### * Filter - custom AdUnit property
  *removes the adUnit if certain runtime conditions apply*

  `filter: {}`
  | Attribute     | Type: Values                                                   |
  |---------------|----------------------------------------------------------------|
  | `maxWidth`    | Number: remove before auction if viewport is larger than X     |
  | `minWidth`    | Number: remove before auction if viewport is smaller than X    |
  | `urlIs`       | String: remove before auction if URL is X                      |
  | `urlIsNot`    | String: remove before auction if URL isn't X                   |
  | `urlHas`      | String: remove before auction if URL contains X                |
  | `urlHasNot`   | String: remove before auction if URL doesn't contain X         |
  | `variable`    | String: remove before auction if window.cpexAdUnitParam != X   |
  | `cookie`      | String: remove before auction if page contains that cookie     |
  | `skin`        | String: remove after auction if a skin won in auction          |

### Auto-refresh
`autorefresh: {}`
| Attribute       | Type: Values                               | Default         |
|-----------------|--------------------------------------------|-----------------|
| `enabled`       | Bool                                       | false           |
| `adUnits`       | Array of objects* (refresh definitions)    |                 |

  #### * Refresh adUnit definitions
  | `name`        | String: Required. Name of AdUnit to refresh   |              |
  | `interval`    | Number: Seconds between refreshes             | 30           |
  | `maxCount`    | Number: Limit to number of refreshes          | 0            |
  | `s2sPosition` | String: Optional custom CPEx only sources     |              |

### Formats
`formats: {}`
| Attribute       | Type: Values                                                 |
|-----------------|--------------------------------------------------------------|
| `skin`          | Object: Skin properties, see below                           |
| `interscroller` | Object: Interscroller properties, see below                  |
| `native`        | Object: Native properties, see below                         |
| `slideup`       | Object: Slideup properties, see below                        |
| `vignette`      | Object: Vignette properties, see below                       |
| `testCreatives` | Object, key: AdUnit, valid: testCreative object, see below   |

#### Skin
**Note:** Element DOM selectors are written in Javascript code and have to be wrapped in simple brackets, to be properly parsed in the settings editor.

`skin: {}`
| Attribute       | Type: Values                                               | Default                                 |
|-----------------|------------------------------------------------------------|-----------------------------------------|
| `enabled`       | Boolean                                                    | false                                   |
| `adUnitsForced` | Array: adUnits where everything is considered a skin       |                                         |
| `backgroundEl`  | Function: DOM selector, background element                 | () => { return document.body }          |
| `contentEl`     | Function: DOM selector, content element                    |                                         |
| `hide`          | Array: DOM selectors                                       |                                         |
| `contentCSS`    | CSS style for content element                              | 'position: relative; margin-top: 200px' |
| `generalCSS`    | CSS style for the page in general                          |                                         |
| `zIndex`        | CSS `z-index` for skin wrapper (depth)                     |                                         |
| `offset`        | Function: pixels from the top, fallback to integer         | 0                                       |
| `offsetScroll`  | Bool: Should offset disappear with scrolling?              | false                                   |

#### Interscroller
`interscroller: {}`
| Attribute      | Type: Values                                                        | Default           |
|----------------|---------------------------------------------------------------------|-------------------|
| `enabled`      | Bool                                                                | false             |
| `adUnits`      | Array: optional. AdUnits to catch interscroller                     |                   |
| `height`       | String: for CSS, usually in px or vh                                | '75vh'            |
| `offset`       | Number: pixels from the top                                         | 0                 |

#### Native
`native: {}`
| Attribute      | Type: Values                                                        | Default           |
|----------------|---------------------------------------------------------------------|-------------------|
| `enabled`      | Bool                                                                | false             |
| `templates`    | Object: string of targeted adUnits as key, comma separated *        | built-in template |
| `adUnitConfig` | Object: keys for adUnit names, value is custom configuration object |                   |

* Values contain the template, a string of HTML+CSS, with Mustache variables. If adUnit isn't found, key 'generic' is used.

  ##### Native - custom configuration
  `adUnitConfig: {}`
  | Attribute     | Type: Values                                                      | Default           |
  |---------------|-------------------------------------------------------------------|-------------------|
  | `titleLength` | Integer: length after which it crops the rest with "..."          | 45                |
  | `descLength`  | Integer: length after which it crops the rest with "..."          | 90                |

#### Slideup
`slideup: {}`
| Attribute       | Type: Values                                    | Default               |
|-----------------|-------------------------------------------------|-----------------------|
| `enabled`       | Bool                                            | false                 |
| `adUnits`       | Array: AdUnits to catch slideup. Required       |                       |
| `css`           | String: custom CSS rules                        | default css           |
| `emptyHeight`   | Number: height in pixels used by default        | 0                     |
| `closeTextHTML` | String: innerHTML                               | 'Zavřít&nbsp;&nbsp;✕' |
| `animationSpeed`| Float: number of seconds                        | 0.2                   |
| `backgroundEl`  | Function: DOM selector, background element      | document.body         |

#### Vignette
`vignette: {}`
| Attribute       | Type: Values                                   | Default                            |
|-----------------|------------------------------------------------|------------------------------------|
| `enabled`       | Bool                                           | false                              |
| `adUnits`       | Array: AdUnits to catch vignette. Required     |                                    |
| `css`           | String: custom CSS rules                       | default css                        |
| `closeTextHTML` | String: innerHTML                              | 'Zavřít&nbsp;reklamu&nbsp;&nbsp;✕' |
| `cookieName`    | String: name of cookie to set after rendering  |                                    |
| `cookieDuration`| Number: seconds the cookie should last         |                                    |

#### Responsive
`responsive: {}`
| Attribute       | Type: Values                                   | Default     |
|-----------------|------------------------------------------------|-------------|
| `enabled`       | Bool                                           | false       |
| `adUnits`       | Array: AdUnits to be responsive. Required      |             |
| `width`         | String: Required width                         |             |
| `height`        | String: Required height                        |             |

#### TestCreatives
Explained here: [Formats: Testing](https://git.cpex.cz/frontend/cpex-package/-/blob/master/readme/Formats.md#user-content-testing)
`adUnit: {}`
| Attribute | Values                                                             |
|-----------|--------------------------------------------------------------------|
| `preset`  | String: 'banner', 'interscroller', 'skin', 'native' or 'slideup'   |
| `html`    | String, Embedded HTML of the test creative                         |
| `width`   | Number in pixels                                                   |
| `height`  | Number in pixels                                                   |
