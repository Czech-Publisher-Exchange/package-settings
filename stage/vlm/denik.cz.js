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
            [970, 310],
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
          sizes: [94, 55, 57, 2]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1891404,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 55, 57, 2]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245549'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15784095
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_leaderboard_bottom'
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
        bidder: 'appnexus',
        params: {
          placementId: 15782985
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_square_1'
        }
      }]
    }, {
      code: 'leaderboard-top',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 210],
            [2000, 1400],
            [970, 250]
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
          sizes: [2, 96, 230, 57]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 534548,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 230, 57]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245544'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '15624108, 18682437'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_leaderboard_top'
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
            [160, 600]
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
          sizes: [10, 15, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 687298,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245562'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15624109
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_skyscraper_1'
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
            [300, 300]
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
          sizes: [15, 117, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 207486,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 117, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245547'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782287
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_leaderboard_bottom'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-leaderboard-top',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 651272,
          accountId: '10900',
          position: 'atf',
          sizes: [117, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1629864,
          accountId: '10900',
          position: 'atf',
          sizes: [117, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245546'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782286
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_leaderboard_top'
        }
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
            [480, 820],
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
          sizes: [15, 48, 256, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 702102,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 256, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245551'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782986
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_square_1'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'megaboard-1',
      mediaTypes: {
        banner: {
          sizes: [
            [998, 200],
            [970, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1449312,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 55]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1449314,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 55]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245550'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 17330112
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_megaboard_1'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280]
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
          sizes: [48, 15, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 994012,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245554'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782989
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_square_3'
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
            [336, 280]
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
          sizes: [48, 15, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1036436,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245553'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782991
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m_square_2'
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
          sizes: [60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1077166,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22969029
        }
      }],
      filter: {
        maxWidth: 1000
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
        bidder: 'appnexus',
        params: {
          placementId: 15624107
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_square_2'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-2-GA-hp',
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
          siteId: 144588,
          zoneId: 1370776,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1389448,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_commercial-article-2-GA-hp'
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
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144588,
          zoneId: 1370782,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 83, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1389452,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 83, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4828427'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782988
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_commercial-article-native-detail'
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
            [300, 250]
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
          sizes: [83, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1502276,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245563'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 17911077
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_wallpaper_1'
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
            [480, 300]
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
          sizes: [83]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1584708,
          accountId: '10900',
          position: 'atf',
          sizes: [83]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245564'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 18517177
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_wallpaper_2'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-commercial-article-native-detail',
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
          siteId: 46270,
          zoneId: 2683414,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m-commercial-article-native-detail'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-commercial-article-1-GA',
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
          siteId: 46270,
          zoneId: 2642280,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m-commercial-article-1-GA'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-commercial-article-2-GA',
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
          siteId: 46270,
          zoneId: 2683416,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_m-commercial-article-2-GA'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 820]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2362996,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2528138,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4397178'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 24714454
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_cz_m_square-gallery-1'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2363792,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2528140,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4397179'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 24714462
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_cz_m_square-gallery-2'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2363794,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2528142,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4397180'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 24714468
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_cz_m_square-gallery-3'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 820]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2503648,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2503660,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4586571'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26629309
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_4'
        }
      }]
    }, {
      code: 'm-square-gallery-5',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 820]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2503650,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2503662,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4586572'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26629323
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_5'
        }
      }]
    }, {
      code: 'm-square-gallery-6',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 820]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2503652,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2503664,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4586573'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26629334
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_6'
        }
      }]
    }, {
      code: 'm-square-gallery-7',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 820]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2503654,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2503666,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4586574'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26629337
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_7'
        }
      }]
    }, {
      code: 'm-square-gallery-8',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 820]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2503656,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2503668,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4586575'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26629340
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_8'
        }
      }]
    }, {
      code: 'm-square-gallery-9',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 820]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2503658,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2503670,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 256]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4586576'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26629343
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_9'
        }
      }]
    }, {
      code: 'centerVignette',
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
          siteId: 46270,
          zoneId: 2522988,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2560000,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27027205
        }
      }],
      filter: {
        maxWidth: 1000,
        cookie: 'vignette'
      }
    }, {
      code: 'm-square-gallery-10',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2588636,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2591984,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719757'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587766
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_10_300x600'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-11',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2588638,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2591986,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719758'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587768
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_11_300x300'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-12',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2588640,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2591988,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719759'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587775
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_12_300x300'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-13',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2588642,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2591990,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719760'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587777
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_13_300x300'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-14',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2588644,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2591998,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719761'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587782
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_14_300x300'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-15',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2588668,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2592000,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719762'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587789
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_15_300x300'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-16',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2588670,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2592002,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719763'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587794
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_16_300x300'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-17',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2588672,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2592004,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719764'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587797
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denikcz_m_square_gallery_17_300x300'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-bottom-1',
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
          zoneId: 2681982,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2681986,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4843349'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 28401638
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM__denikcz_m_square_bottom_1'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-bottom-2',
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
          zoneId: 2681984,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2681988,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4843350'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 28401639
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM__denikcz_m_square_bottom_2'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/document.getElementsByClassName('page')[0]/*E*/,
      offset: 52,
      offsetScroll: true,
      hide: [/*S*/document.getElementsByClassName('reklama-box-leaderboard-top')[0]/*E*/]
    },
    interscroller: {
      enabled: true
    },
    native: {
      enabled: true,
      templates: {
        'commercial-article-1-hp': "<article class='box-article box-article-classic'>  <a class='box-article-left' href='${link}' target='_blank' tabindex='-1' rel='sponsored noopener'>    <img src='${img}' width='105' height='70' class='box-article-img' loading='lazy'>  </a>  <div class='box-article-right'>    <div class='box-article-tags'>      <span class='box-article-tag blue-tag tag'>Reklama</span>    </div>    <h3 class='box-article-title fs16' title='${title}'>      <a href='${link}' target='_blank' rel='sponsored noopener'>        ${title}      </a>    </h3>  </div></article>",
        'commercial-article-2-GA-hp': 'commercial-article-1-hp',
        'm-commercial-article-2': 'commercial-article-1-hp',
        'commercial-article-2-hp': "<article class='box-article box-article-classic'>  <div class='box-article-left'>    <a class='box-article-img' href='${link}' target='_blank' title='${title}' tabindex='-1' rel='sponsored noopener'>      <img src='${img}' width='210' height='140' loading='lazy' style='object-fit: cover'>    </a>  </div>  <div class='box-article-right'>    <div class='box-article-tags'>      <div class='box-article-tag'>REKLAMA</div>    </div>    <a href='${link}' target='_blank' rel='sponsored noopener'>      <h3 class='box-article-title fs20'>${title}</h3>      <h4 class='box-article-perex fs16'>${desc}</h4>    </a>  </div></article>",
        'commercial-article-native-detail': "<article class='box-article box-article-classic' style='height: 300px'>  <a class='box-article-left' href='${link}' target='_blank' title='${title}' tabindex='-1' style='display: flex; align-items: center' rel='sponsored noopener'>    <img src='${img}' width='210' height='140' class='box-article-img' loading='lazy'>  </a>  <div class='box-article-right'>    <div class='box-article-tags'>      <div class='box-article-tag'>REKLAMA</div>    </div>    <a class='box-article-perex fs16' href='${link}' target='_blank' rel='sponsored noopener'>      <h3 class='box-article-title fs20'>${title}</h3>      ${desc}    </a>  </div></article>"
      }
    },
    slideup: {
      enabled: true,
      adUnits: ['m-sticky']
    },
    responsive: {
      enabled: true,
      adUnits: ['m-square-bottom-1'],
      width: 480,
      height: 480
    }
  }
}