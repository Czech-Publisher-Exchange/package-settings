# CPEx Package: Settings
Settings are files saved into the [package-settings git repository](https://git.cpex.cz/frontend/package-settings) and then published to our [CDN](cdn.cpex.cz). Paths to them are added into the page with `window.cpexPackageConfig`.
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

### Publisher info
`publisher:  {}`
*Only used for publisher settings*
| Attribute     | Values                                          | Default    |
|---------------|-------------------------------------------------|------------|
| `name`        | String, optional, legal name of the publisher   |            |
| `note`        | String, optional, useful note for production    |            |
| `sellerId`    | Integer, required, from cpex.cz/sellers.json    | 0          |

### Website info
`website:  {}`
*Only used for website settings*
| Attribute     | Values                                          | Default    |
|---------------|-------------------------------------------------|------------|
| `name`        | String, optional, name of the website           |            |
| `note`        | String, optional, useful note for production    |            |

### CMP
`cmp:  {}`
| Attribute   | Values                                            | Default    |
|-------------|---------------------------------------------------|------------|
| `enabled`   | Boolean                                           | true       |
| `id`        | String, CMP specific  | '9a8e2159-3781-4da1-9590-fbf86806f86e' |
| `pixelList` | Array of URL strings                              | array      |

### Ad server
`adserver:  {}, required`
| Attribute            | Values                                 | Default      |
|----------------------|----------------------------------------|--------------|
| `adapter`            | String, required, which adapter to use |              |
| `loadPrerequisites`  | Boolean, loads libraries for adserver  | false        |
| `delayCall`          | Integer, timeout in milliseconds       |              |

### Header-bidding
`headerbidding:  {}`
| Attribute     | Values                                          | Default    |
|---------------|-------------------------------------------------|------------|
| `enabled`     | Boolean, required                               | true       |
| `prebidPath`  | String URL | https://cdn.cpex.cz/hb/prebid/prebid.min.js     |
| `prebidDebug` | Boolean, Toggles debug logging from Prebid      | false      |
| `adUnits`     | Array of AdUnit Objects                         | []         |
[AdUnit reference](https://docs.prebid.org/dev-docs/adunit-reference.html)

### Formats
`formats:  {}`
| Attribute       | Values                                                     |
|-----------------|------------------------------------------------------------|
| `skin`          | Object with Skin properties, see below                     |
| `interscroller` | Object with Interscroller properties, see below            |
| `native`        | Object with Native properties, see below                   |
| `slideup`       | Object with Slideup properties, see below                  |
| `vignette`      | Object with Vignette properties, see below                 |
| `testCreatives` | Object, key: AdUnit, valid: testCreative object, see below |

#### Skin
Note: Element references have to be wrapped in simple brackets, to be properly parsed in the settings editor. Use only single quotes.

`skin:  {}`
| Attribute            | Values                                                |
|----------------------|-------------------------------------------------------|
| `backgroundEl`       | DOM element considered as a background, wrapped in () |
| `contentEl`          | DOM element considered as a content, wrapped in ()    |
| `hide`               | Array of DOM elements to hide, wrapped in ()          |

#### Interscroller
`interscroller:  {}`
| Attribute      | Values                                         | Default    |
|----------------|------------------------------------------------|------------|
| `height`       | String for CSS, usually in px or vh            | '75vh'     |

#### Native
`native:  {}`
| Attribute   | Values                                      | Default          |
|-------------|---------------------------------------------|------------------|
| `templates` | Object with string of targeted adUnits as key, comma separated. Values contain the template, a string of HTML+CSS, with Mustache variables. If adUnit isn't found, 'generic' key is used. | built-in template |

#### Slideup
`slideup:  {}`
| Attribute | Values                                        | Default          |
|-----------|-----------------------------------------------|------------------|
| `adUnit`  | String, required. adUnit where anything is considered a slideup ||
| `css`     | String of custom CSS rules                    | default css      |
| `emptyHeight` | Number, height in pixels used by default| 0                |
| `animationSpeed`| Float, number of seconds                | 0.2              |
| `backgroundEl`  | DOM element to be considered background | document.body    |

#### Vignette
`vignette:  {}`
| Attribute | Values                                        | Default          |
|-----------|-----------------------------------------------|------------------|
| `adUnit`  | String, required. adUnit where anything is considered a vignette||
| `css`     | String of custom CSS rules                    | default css      |

#### TestCreatives
Explained here: [TestCreatives](./FORMATS.md#testing)
`adUnit:  {}`
| Attribute | Values                                                           |
|-----------|------------------------------------------------------------------|
| `preset`  | String: 'banner', 'interscroller', 'skin', 'native' or 'slideup' |
| `html`    | String, Embedded HTML of the test creative                       |
| `width`   | Number in pixels                                                 |
| `height`  | Number in pixels                                                 |
