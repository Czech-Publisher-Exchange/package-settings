
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
| Attribute      | Values                                                    | Default    |
|----------------|-----------------------------------------------------------|------------|
| `autoRun`      | Boolean, true starts package once loaded                  | true       |
| `customRun`    | JS function, fired when autoRun is disabled               |            |
| `beforeLoad`   | JS function, fired before run, only settings are loaded   |            |
| `onLoad`       | JS function, fired once package is fully loaded           |            |
| `errorPath`    | String, enables error logging. Added to cpexPackageConfig |            |

### Publisher info
`publisher: {}`
*Only used for publisher settings*
| Attribute     | Values                                          | Default    |
|---------------|-------------------------------------------------|------------|
| `code`        | Required, short standard publisher identifier   |            |
| `name`        | String, optional, legal name of the publisher   |            |
| `note`        | String, optional, useful note for production    |            |
| `sellerId`    | Number, required, from cpex.cz/sellers.json     | 0          |

### Website info
`website: {}`
*Only used for website settings*
| Attribute     | Values                                          | Default    |
|---------------|-------------------------------------------------|------------|
| `name`        | String, optional, name of the website           |            |
| `note`        | String, optional, useful note for production    |            |

### CMP
`cmp: {}`
| Attribute   | Values                                            | Default    |
|-------------|---------------------------------------------------|------------|
| `enabled`   | Boolean                                           | true       |
| `pixelList` | Array of URL strings                              | array      |

### Analytics
`analytics: {}`
| Attribute   | Values                                            | Default    |
|-------------|---------------------------------------------------|------------|
| `enabled`   | Boolean                                           | true       |
| `force`     | Boolean, allows to skip consent check             | false      |

### AAM
`aam: {}`
| Attribute   | Values                                            | Default    |
|-------------|---------------------------------------------------|------------|
| `enabled`   | Boolean                                           | true       |
| `path`      | Boolean                                           | true       |
| `settings`  | Boolean                                           | true       |

#### AAM settings
`aam.settings: {}`
| Attribute   | Values                                            | Default    |
|-------------|---------------------------------------------------|------------|
| `enabled`   | Boolean                                           | true       |
| `path`      | String, URL to AAM  | 'https://cdn.cpex.cz/aam/cpex-aam-min.js'|
| `settings`  | Object, mirrors `cpex_AAM_conf` in the AAM itself | inside AAM |

### Ad server
**Note:** To properly merge between the two types of settings, SSPs should be named consistently. Please use the following strings: **pubmatic, index, magnite, xandr**

`adserver: {}`
| Attribute            | Values                                                         | Default      |
|----------------------|----------------------------------------------------------------|--------------|
| `adapter`            | String, required, which adapter to use                         |              |
| `enabled`            | Boolean, disabling disables HB as well                         | true         |
| `loadPrerequisites`  | Boolean, loads libraries for adserver                          | false        |
| `delayCall`          | Number, timeout in milliseconds                                | 0            |
| `defineSlots`        | **GAM only** Array of slot definition Objects                  |              |
| `gamPrefix`          | **GAM only** String, path of GAM website, used for defineSlots |              |
| `gamId`              | **GAM only** String, id of GAM instance, used for defineSlots  |              |
| `allowedSSPs`        | **SAS only** Object, advertiser IDs allowed for custom formats |              |
| `bidderTable`        | **SAS only** Object, bidder names in the SAS instance          |              |

- defineSlots: slot definition object: `{ elementId: '', sizes: [], path: '' }`
- allowedSSPs default: `{ pubmatic: 1, index: 3, magnite: 4, xandr: 5 }`
- bidderTable default: `stroeerCore: stroeer, appnexus: xandr_hb, pubmatic: pubmatic_hb, rubicon: magnite_hb, adform: adform, im-adform: im-adform, r2b2: r2b2, triplelift: triplelift_hb, ix: index_hb, smart: smart, teads: teads, rtbhouse: rtbhouse`

### Header-bidding
`headerbidding: {}`
| Attribute            | Values                                            | Default  |
|----------------------|---------------------------------------------------|----------|
| `enabled`            | Boolean                                           | true     |
| `prebidPath`         | String URL     | https://cdn.cpex.cz/hb/prebid/prebid.min.js |
| `currency`           | String, converts CPM into this currency           | 'USD'    |
| `prebidDebug`        | Boolean, Toggles debug logging from Prebid        | false    |
| `adUnits`            | Array of AdUnit Objects + custom `filter`         | []       |
| `auctionTimeoutMs`   | Number, sets pbjs.requestBids timeout             | 1000     |
| `cmpLoadTimeoutMs`   | Number, sets consentManagement.gdpr.timeout       | 2000     |
| `cmpActionTimeoutMs` | Number, sets consentManagement.gdpr.actionTimeout | 0        |
| `userIDs`            | Array, names of modules to enable | ['id5Id', 'sharedId', 'criteo'] |
| `analytics`          | Array, names of adapters to enable        | ['id5Analytics'] |
| `bidderSettings`     | Object, allows custom bidder configuration        |          |
| `customBuckets`      | Array of Numbers, each is ceiling of new tier     |          |

[Standard AdUnit reference](https://docs.prebid.org/dev-docs/adunit-reference.html)
[Bidder Settings reference](https://docs.prebid.org/dev-docs/publisher-api-reference/bidderSettings.html)

#### Filter - custom AdUnit property
*removes the adUnit if certain runtime conditions apply*

`filter: {}`
| Attribute     | Values                                                       |
|---------------|--------------------------------------------------------------|
| `maxWidth`    | Number, remove before auction if viewport is larger than X   |
| `minWidth`    | Number, remove before auction if viewport is smaller than X  |
| `url`         | String, remove before auction if url doesn't contain X       |
| `variable`    | String, remove before auction if window.cpexAdUnitParam != X |
| `cookie`      | String, remove before auction if page contains that cookie   |
| `skin`        | String, remove after auction if a skin won in auction        |

### Formats
`formats: {}`
| Attribute       | Values                                                     |
|-----------------|------------------------------------------------------------|
| `skin`          | Object with Skin properties, see below                     |
| `interscroller` | Object with Interscroller properties, see below            |
| `native`        | Object with Native properties, see below                   |
| `slideup`       | Object with Slideup properties, see below                  |
| `vignette`      | Object with Vignette properties, see below                 |
| `testCreatives` | Object, key: AdUnit, valid: testCreative object, see below |

#### Skin
**Note:** Element DOM selectors are written in Javascript code and have to be wrapped in simple brackets, to be properly parsed in the settings editor.

`skin: {}`
| Attribute      | Values                                  | Default                                 |
|----------------|-----------------------------------------|-----------------------------------------|
| `enabled`      | Boolean                                 | false                                   |
| `backgroundEl` | DOM selector, background element        | document.body                           |
| `contentEl`    | DOM selector, content element           |                                         |
| `contentCSS`   | CSS style for content element           | 'position: relative; margin-top: 200px' |
| `generalCSS`   | CSS style for the page in general       |                                         |
| `hide`         | Array of DOM elements to hide           |                                         |
| `zIndex`       | CSS `z-index` for skin wrapper (depth)  |                                         |
| `offset`       | Number, pixels from the top of the page | 0                                       |
| `offsetScroll` | Should offset disappear with scrolling? | false                                   |

#### Interscroller
`interscroller: {}`
| Attribute      | Values                                         | Default    |
|----------------|------------------------------------------------|------------|
| `enabled`      | Boolean                                        | false      |
| `height`       | String for CSS, usually in px or vh            | '75vh'     |

#### Native
`native: {}`
| Attribute   | Values                                      | Default          |
|-------------|---------------------------------------------|------------------|
| `enabled`   | Boolean                                     | false            |
| `templates` | Object with string of targeted adUnits as key, comma separated. Values contain the template, a string of HTML+CSS, with Mustache variables. If adUnit isn't found, 'generic' key is used. | built-in template |

#### Slideup
`slideup: {}`
| Attribute | Values                                        | Default          |
|-----------|-----------------------------------------------|------------------|
| `enabled` | Boolean                                       | false            |
| `adUnit`  | String, required. Where anything is a slideup |                  |
| `css`     | String of custom CSS rules                    | default css      |
| `emptyHeight` | Number, height in pixels used by default  | 0                |
| `closeTextHTML` | String, innerHTML                  | 'Zavřít&nbsp;&nbsp;✕' |
| `animationSpeed`| Float, number of seconds                | 0.2              |
| `backgroundEl`  | DOM selector, background element        | document.body    |

#### Vignette
`vignette: {}`
| Attribute       | Values                                       | Default     |
|-----------------|----------------------------------------------|-------------|
| `enabled`       | Boolean                                      | false       |
| `adUnit`        | String, required. Where anything is vignette |             |
| `css`           | String of custom CSS rules                   | default css |
| `closeTextHTML` | String, innerHTML     | 'Zavřít&nbsp;reklamu&nbsp;&nbsp;✕' |
| `cookieName`    | String, name of cookie to set after rendering|             |
| `cookieDuration`| Number, seconds the cookie should last       |             |

#### Responsive
`responsive: {}`
| Attribute       | Values                                       | Default     |
|-----------------|----------------------------------------------|-------------|
| `enabled`       | Boolean                                      | false       |
| `adUnits`       | Array, required. AdUnits to be responsive    |             |
| `width`         | String, required. What width it has to have  |             |
| `height`        | String, required. What height it has to have |             |

#### TestCreatives
Explained here: [Formats: Testing](https://git.cpex.cz/frontend/cpex-package/-/blob/master/readme/Formats.md#user-content-testing)
`adUnit: {}`
| Attribute | Values                                                           |
|-----------|------------------------------------------------------------------|
| `preset`  | String: 'banner', 'interscroller', 'skin', 'native' or 'slideup' |
| `html`    | String, Embedded HTML of the test creative                       |
| `width`   | Number in pixels                                                 |
| `height`  | Number in pixels                                                 |
