window.cpexWebsiteSettings = {
  website: {
    name: 'denik.cz'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker',
    allowedSSPs: {
      pubmatic: 1,
      index: 3,
      magnite: 4,
      xandr: 164
    }
  },
  headerbidding: {
    enabled: true,
    adUnits: [{
      code: 'leaderboard-bottom',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 210],
            [970, 90],
            [970, 250],
            [728, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1891398,
          accountId: '10900',
          position: 'atf',
          sizes: [96, 55, 57, 2]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1891404,
          accountId: '10900',
          position: 'atf',
          sizes: [96, 55, 57, 2]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245549'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903443,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 684613
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15784095
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_leaderboard_bottom'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28209'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 206798,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 206790,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3325255'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903448,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 489345
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782985
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_square_1'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28185'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard-top',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 210],
            [970, 250],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 534508,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 534548,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245544'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903445,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1930676,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 489344
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 18682437
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_leaderboard_top'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28173'
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '28149'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'skyscraper-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [160, 600],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 398128,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 9, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 687298,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 9, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245562'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1901122,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1930685,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 489330
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15624109
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_skyscraper_1'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28143'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-leaderboard-bottom',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [320, 100],
            [300, 300],
            [300, 100],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 207484,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 117, 48, 19, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 207486,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 117, 48, 19, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245547'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903471,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 684614
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782287
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_leaderboard_bottom'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 702100,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 702102,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245551'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1901123,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1901130,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1930651,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 684616
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782986
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_square_1'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: '480x480_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28134'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 994010,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 994012,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245554'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903476,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903475,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 684619
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782989
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_square_3'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: '480x480_3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28119'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 1036432,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1036436,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245553'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903474,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903473,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 684620
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782991
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_square_2'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: '480x480_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28167'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [320, 150],
            [300, 120],
            [500, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 1077164,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1077166,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5194353'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931848,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931847,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088923
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22969029
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_high'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: 'sticky',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28161'
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '28146'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'square-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1106960,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1106970,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245560'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903449,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15624107
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_square_2'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-2-GA-hp',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1918725,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104277
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27493617
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [548, 150],
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 890340,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 83, 48, 15, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 890342,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 83, 48, 15, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4828427'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903442,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 976691
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782988
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_commercial-article-native-detail'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: '480x300_native',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28203'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-native-detail',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1918723,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 976691
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782988
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-1',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1179214,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1502276,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245563'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903450,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1930677,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 684621
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 17911077
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_wallpaper_1'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28176'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144588,
          zoneId: 1584710,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1584708,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245564'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903451,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 684622
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 18517177
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_wallpaper_2'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: '480x300_2',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28137'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'centerVignette',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [300, 600],
            [336, 280],
            [320, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2522988,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10, 16, 67]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2560000,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10, 16, 67]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4618471'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931798,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 976692
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27027205
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28200'
        }
      }],
      filter: {
        maxWidth: 1000,
        cookie: 'vignette'
      }
    }, {
      code: 'seznam-feed',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 300],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3177334,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3177378,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5650654'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1067534
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31687705
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard-gallery',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 210],
            [970, 250],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3288240,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808535'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903444,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088920
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32336795
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28194'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-2',
      mediaTypes: {
        banner: {
          sizes: [
            [548, 150]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3202774,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32506688
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-2',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1918724,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104279
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32506688
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3288246,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808538'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903452,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088927
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32337114
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: '480x300_3',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28206'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-4',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3365118,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5906169'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906471,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104260
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32592651
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: '480x300_4',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28128'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-5',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3365140,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5906180'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906472,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104267
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32592693
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'denik.cz',
          p: '480x300_5',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '28155'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'skyscraper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [160, 600],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3376964,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 9, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5923121'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1903447,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32659948
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ document.getElementsByClassName('page')[0] /*E*/,
      offsetScroll: false,
      hide: [/*S*/ document.getElementsByClassName('reklama-box-leaderboard-top')[0] /*E*/]
    },
    interscroller: {
      enabled: true,
      adUnits: ['m-square-1', 'm-square-gallery-1']
    },
    native: {
      enabled: true,
      templates: {
        'commercial-article-1-hp': "<article class='box-article box-article-classic'>  <a class='box-article-left' href='${link}' target='_blank' tabindex='-1' rel='sponsored noopener'>    <img src='${img}' width='105' height='70' class='box-article-img' loading='lazy'>  </a>  <div class='box-article-right'>    <div class='box-article-tags'>      <span class='box-article-tag blue-tag tag'>Reklama</span>    </div>    <h3 class='box-article-title fs16' title='${title}'>      <a href='${link}' target='_blank' rel='sponsored noopener'>        ${title}      </a>    </h3>  </div></article>",
        'commercial-article-2-GA-hp': 'commercial-article-native-detail',
        'm-commercial-article-2': 'commercial-article-1-hp',
        'commercial-article-2-hp': "<article class='box-article box-article-classic'>  <div class='box-article-left'>    <a class='box-article-img' href='${link}' target='_blank' title='${title}' tabindex='-1' rel='sponsored noopener'>      <img src='${img}' width='210' height='140' loading='lazy' style='object-fit: cover'>    </a>  </div>  <div class='box-article-right'>    <div class='box-article-tags'>      <div class='box-article-tag'>REKLAMA</div>    </div>    <a href='${link}' target='_blank' rel='sponsored noopener'>      <h3 class='box-article-title fs20'>${title}</h3>      <h4 class='box-article-perex fs16'>${desc}</h4>    </a>  </div></article>",
        'commercial-article-native-detail': "<article class='box-article box-article-classic' style='height: 130px'> <a class='box-article-left' href='${link}' target='_blank' title='${title}' tabindex='-1' style='display: flex; align-items: center' rel='sponsored noopener'> <img src='${img}' width='210' height='140' class='box-article-img' loading='lazy'> </a>  <div class='box-article-right'>    <div class='box-article-tags'>      <div class='box-article-tag'>REKLAMA</div>    </div> <a class='box-article-perex fs16' href='${link}' target='_blank' rel='sponsored noopener'>      <h3 class='box-article-title fs20'>${title}</h3> ${desc}    </a>  </div></article>",
        'commercial-article-2': 'commercial-article-native-detail',
        'm-commercial-article-native-detail': 'commercial-article-1-hp'
      },
      adUnitConfig: {
        'm-commercial-article-2': {
          titleLength: 45,
          descLength: 90
        },
        'commercial-article-2-GA-hp': {
          titleLength: 45,
          descLength: 90
        }
      }
    },
    slideup: {
      enabled: true,
      adUnits: ['m-sticky', 'm-sticky-gallery']
    },
    responsive: {
      enabled: true,
      adUnits: ['m-square-bottom-1', 'm-square-1', 'm-square-2', 'm-square-3', 'm-square-bottom-2', 'm-square-gallery-1', 'm-square-gallery-2', 'm-square-gallery-3', 'm-square-gallery-4', 'm-square-gallery-5', 'm-square-gallery-6', 'm-square-gallery-7', 'm-square-gallery-8', 'm-square-gallery-9', 'm-seznam-feed', 'm-square-4', 'm-square-5'],
      width: 480,
      height: 480
    }
  }
}