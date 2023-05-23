window.cpexWebsiteSettings = {
  website: {
    name: "cpex.cz",
  },
  general: {
    onLoad: /*S*/ () => {
      document.getElementById("svelte").style.position = "inherit";
    } /*E*/,
  },
  headerbidding: {
    prebidPath: "https://cdn.cpex.cz/stage/hb/prebid/v7.39/prebid.js",
    prebidDebug: true,
    analytics: ["id5Analytics", "cpexAnalytics"],
    adUnits: [
      {
        code: "rectangle-1",
        mediaTypes: {
          banner: {
            sizes: [
              [250, 250],
              [300, 250],
              [300, 300],
              [480, 480],
              [300, 600],
            ],
          },
        },
        bids: [
          {
            bidder: "rubicon",
            params: {
              siteId: "140646",
              zoneId: "1713098",
              accountId: "10900",
              position: "atf",
              sizes: [14, 15, 48, 261, 10],
            },
          },
          {
            bidder: "pubmatic",
            params: {
              publisherId: "158732",
              adSlot: "2918143",
            },
          },
          {
            bidder: "appnexus",
            params: {
              placementId: "19286498",
            },
          },
          {
            bidder: "rtbhouse",
            params: {
              publisherId: "w6O8SDnYNMT7Cb6AHGZf",
              region: "prebid-eu",
            },
          },
        ],
      },
      {
        code: "rectangle-2",
        mediaTypes: {
          banner: {
            sizes: [
              [250, 250],
              [300, 250],
              [300, 300],
              [480, 480],
              [300, 600],
            ],
          },
        },
        bids: [
          {
            bidder: "rubicon",
            params: {
              siteId: "140646",
              zoneId: "1713100",
              accountId: "10900",
              position: "atf",
              sizes: [14, 15, 48, 261, 10],
            },
          },
          {
            bidder: "pubmatic",
            params: {
              publisherId: "158732",
              adSlot: "2918144",
            },
          },
          {
            bidder: "appnexus",
            params: {
              placementId: "19286538",
            },
          },
        ],
      },
      {
        code: "leaderboard-1",
        mediaTypes: {
          banner: {
            sizes: [
              [728, 90],
              [2000, 1400],
            ],
          },
        },
        bids: [
          {
            bidder: "rubicon",
            params: {
              siteId: "140646",
              zoneId: "1960456",
              accountId: "10900",
              position: "atf",
              sizes: [2, 230],
            },
          },
          {
            bidder: "appnexus",
            params: {
              placementId: "21341120",
            },
          },
        ],
      },
      {
        code: "native-2",
        mediaTypes: {
          banner: {
            sizes: [[548, 150]],
          },
        },
        bids: [
          {
            bidder: "rubicon",
            params: {
              siteId: "140646",
              zoneId: "2062058",
              accountId: "10900",
              position: "atf",
              sizes: [90],
            },
          },
        ],
      },
      {
        code: "native-3",
        mediaTypes: {
          native: {
            sendTargetingKeys: false,
            adTemplate: `<div class="sponsored-post">
              <div class="thumbnail" style="background-image: url(##hb_native_asset_id_1##);"></div>
              <div class="content">
                <h1>
                  <a href="%%CLICK_URL_UNESC%%##hb_native_linkurl##" target="_blank" class="pb-click" hb_native_asset_id="2">##hb_native_asset_id_2##</a>
                </h1>
                <p>##hb_native_asset_id_4##</p>
                <div class="attribution">##hb_native_asset_id_3##</div>
              </div>
            </div>`,
            ortb: {
              assets: [
                {
                  id: 1,
                  required: 1,
                  img: {
                    type: 3,
                    w: 989,
                    h: 742,
                  },
                },
                {
                  id: 2,
                  required: 1,
                  title: {
                    len: 800,
                  },
                },
                {
                  id: 3,
                  required: true,
                  data: {
                    type: 1,
                  },
                },
                {
                  id: 4,
                  required: true,
                  data: {
                    type: 2,
                  },
                },
              ],
            }
          },
        },
        bids: [
          {
            bidder: "appnexus",
            params: {
              placementId: "29896310",
            },
          },
        ],
      },
      {
        code: "native-4",
        mediaTypes: {
          native: {
            sendTargetingKeys: false,
            adTemplate: `<div class="sponsored-post">
              <div class="thumbnail" style="background-image: url(##hb_native_asset_id_1##);"></div>
              <div class="content">
                <h1>
                  <a href="%%CLICK_URL_UNESC%%##hb_native_linkurl##" target="_blank" class="pb-click" hb_native_asset_id="2">##hb_native_asset_id_2##</a>
                </h1>
                <p>##hb_native_asset_id_4##</p>
                <div class="attribution">##hb_native_asset_id_3##</div>
              </div>
            </div>`,
            ortb: {
              assets: [
                {
                  id: 1,
                  required: 1,
                  img: {
                    type: 3,
                    w: 989,
                    h: 742,
                  },
                },
                {
                  id: 2,
                  required: 1,
                  title: {
                    len: 800,
                  },
                },
                {
                  id: 3,
                  required: true,
                  data: {
                    type: 1,
                  },
                },
                {
                  id: 4,
                  required: true,
                  data: {
                    type: 2,
                  },
                },
              ],
            },
          },
        },
        bids: [
          {
            bidder: "appnexus",
            params: {
              placementId: "29878475",
            },
          },
        ],
      },
      {
        code: "interscroller-1",
        mediaTypes: {
          banner: {
            sizes: [
              [480, 820],
              [720, 1280],
            ],
          },
        },
        bids: [
          {
            bidder: "rubicon",
            params: {
              siteId: "140646",
              zoneId: "2044716",
              accountId: "10900",
              position: "atf",
              sizes: [256],
            },
          },
        ],
      },
      {
        code: "slideup-1",
        mediaTypes: {
          banner: {
            sizes: [
              [320, 150],
              [300, 250],
              [548, 150],
            ],
          },
        },
        bids: [
          {
            bidder: "rubicon",
            params: {
              siteId: "140646",
              zoneId: "2087210",
              accountId: "10900",
              position: "atf",
              sizes: [60, 15, 90],
            },
          },
          {
            bidder: "appnexus",
            params: {
              placementId: "21779753",
            },
          },
        ],
      },
      {
        code: "vignette-1",
        mediaTypes: {
          banner: {
            sizes: [
              [300, 250],
              [548, 150],
            ],
          },
        },
        bids: [
          {
            bidder: "rubicon",
            params: {
              siteId: "140646",
              zoneId: "2096284",
              accountId: "10900",
              position: "atf",
              sizes: [15, 90],
            },
          },
        ],
      },
      {
        code: "video-1",
        mediaTypes: {
          video: {
            playerSize: [640, 480],
          },
        },
        bids: [
          {
            bidder: "rubicon",
            params: {
              siteId: "91228",
              zoneId: "429500",
              accountId: "10900",
              position: "atf",
              sizes: [221],
            },
          },
        ],
      },
    ],
  },
  adserver: {
    loadPrerequisites: true,
    delayCall: 100,
    defineSlots: [
      {
        elementId: "rectangle-1",
        sizes: [
          [250, 250],
          [300, 250],
          [300, 300],
          [480, 480],
          [300, 600],
        ],
        path: "/22794528025/playground_rectangle-1",
      },
      {
        elementId: "rectangle-2",
        sizes: [
          [250, 250],
          [300, 300],
          [300, 250],
          [480, 480],
          [300, 600],
        ],
        path: "/22794528025/playground_rectangle-2",
      },
      {
        elementId: "leaderboard-1",
        sizes: [
          [728, 90],
          [2000, 1400],
        ],
        path: "/22794528025/playground_leaderboard-1",
      },
      {
        elementId: "native-1",
        sizes: [[548, 150]],
        path: "/22794528025/playground_native-1",
      },
      {
        elementId: "native-2",
        sizes: [[548, 150]],
        path: "/22794528025/playground_native-2",
      },
      {
        elementId: "interscroller-1",
        sizes: [
          [480, 820],
          [720, 1280],
        ],
        path: "/22794528025/playground_interscroller-1",
      },
      {
        elementId: "slideup-1",
        sizes: [
          [320, 150],
          [300, 250],
          [548, 150],
        ],
        path: "/22794528025/playground_slideup-1",
      },
      {
        elementId: "vignette-1",
        sizes: [
          [300, 250],
          [548, 150],
        ],
        path: "/22794528025/playground_vignette-1",
      },
      {
        elementId: "video-1",
        sizes: [640, 480],
        path: "/22794528025/playground_video-1",
      },
    ],
    gamId: "22794528025/playground_",
  },
  formats: {
    skin: {
      backgroundEl: /*S*/ document.body /*E*/,
      contentEl: /*S*/ document.getElementById("svelte") /*E*/,
      hide: [/*S*/ document.getElementById("leaderboard-1") /*E*/],
      contentCSS:
        "position: relative; width: 1080px; margin: auto; margin-top: 200px",
    },
    responsive: {
      adUnits: ["responsive-1"],
      width: 480,
      height: 480,
    },
    slideup: {
      adUnits: ["slideup-1"],
      emptyHeight: 50,
    },
    vignette: {
      adUnits: ["vignette-1"],
    },
    native: {
      templates: {
        generic:
          "<style>\n  .cpex-native a {\n    display: flex;\n    text-decoration: none;\n    color: inherit\n  }\n  .cpex-native img {\n    width: 200px;\n    object-fit: cover\n  }\n  .cpex-native .text {\n    padding-left: 20px\n  }\n</style>\n<div class='cpex-native article'>\n  <a href='${link}' target='_blank'>\n    <img src='${img}'>\n    <div class='text'>\n      <h2>${title}</h2>\n      <p>${desc}</p>\n    </div>\n  </a>\n</div>",
        "native-1":
          "<style>\n  .cpex-native.individual {\n    background-color: #c9b3ff\n  }\n  .cpex-native a {\n    display: flex;\n    text-decoration: none;\n    color: inherit\n  }\n  .cpex-native img {\n    width: 200px;\n    object-fit: cover\n  }\n  .cpex-native .text {\n    padding-left: 20px\n  }\n</style>\n<div class='cpex-native article individual'>\n  <a href='${link}' target='_blank'>\n    <img src='${img}'>\n    <div class='text'>\n      <h2>${title}</h2>\n      <p>${desc}</p>\n    </div>\n  </a>\n</div>",
        "native-2": "native-1",
      },
    },
  },
  aam: {
    settings: {
      publisher: "cpex",
    },
  },
};
