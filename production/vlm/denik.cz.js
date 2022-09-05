window.cpexWebsiteSettings = {
  website: {
    name: 'denik.cz'
  },
  cmp: {
    enabled: false
  },
  aam: {
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
            [336, 280]
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
          sizes: [15, 48, 256, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 702102,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 256, 16]
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
            [970, 90],
            [970, 210]
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
          sizes: [259, 55, 96]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1449314,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 55, 96]
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
            [320, 150]
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
          sizes: [60]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1077166,
          accountId: '10900',
          position: 'atf',
          sizes: [60]
        },
        bidderModuleName: 'rubicon'
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
            [548, 150]
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
          sizes: [90]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1389452,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        },
        bidderModuleName: 'rubicon'
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
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_denik_wallpaper_2'
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
          zoneId: 890340,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 890342,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15782988
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
        bidder: 'appnexus',
        params: {
          placementId: 27027205
        }
      }],
      filter: {
        maxWidth: 1000,
        cookie: 'vignette'
      }
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('page')[0]),
      offset: 52,
      offsetScroll: true,
      hide: [(document.getElementsByClassName('reklama-box-leaderboard-top')[0])]
    },
    interscroller: {
      enabled: true
    },
    native: {
      enabled: true,
      templates: {
        'commercial-article-2-hp': "<article class='box-article box-article-classic'>\n  <div class='box-article-left'>\n    <a class='box-article-img' href='${link}' target='_blank' title='${title}' tabindex='-1'>\n      <img src='${img}' width='210' height='140' loading='lazy' style='object-fit: cover'>\n    </a>\n  </div>\n  <div class='box-article-right'>\n    <div class='box-article-tags'>\n      <div class='box-article-tag'>REKLAMA</div>\n    </div>\n    <a href='${link}' target='_blank'>\n      <h3 class='box-article-title fs20'>${title}</h3>\n      <h4 class='box-article-perex fs16'>${desc}</h4>\n    </a>\n  </div>\n</article>",
        'commercial-article-2-GA-hp': "<article class='box-article box-article-classic'>\n  <div class='box-article-left'>\n    <a class='box-article-img' href='${link}' target='_blank' title='${title}' tabindex='-1'>\n      <img src='${img}' width='210' height='140' loading='lazy' style='object-fit: cover'>\n    </a>\n  </div>\n  <div class='box-article-right'>\n    <div class='box-article-tags'>\n      <div class='box-article-tag'>REKLAMA</div>\n    </div>\n    <a href='${link}' target='_blank'>\n      <h3 class='box-article-title fs20'>${title}</h3>\n      <h4 class='box-article-perex fs16'>${desc}</h4>\n    </a>\n  </div>\n</article>",
        'commercial-article-native-detail': "<article class='box-article box-article-classic' style='height: 300px'>\n  <a class='box-article-left' href='${link}' target='_blank' title='${title}' tabindex='-1' style='display: flex; align-items: center'>\n    <img src='${img}' width='210' height='140' class='box-article-img' loading='lazy'>\n  </a>\n  <div class='box-article-right'>\n    <div class='box-article-tags'>\n      <div class='box-article-tag'>REKLAMA</div>\n    </div>\n    <a class='box-article-perex fs16' href='${link}' target='_blank'>\n      <h3 class='box-article-title fs20'>${title}</h3>\n      ${desc}\n    </a>\n  </div>\n</article>",
        'm-commercial-article-2': "<article class='box-article box-article-classic'>\n  <a class='box-article-left' href='${link}' target='_blank' tabindex='-1'>\n    <img src='${img}' width='105' height='70' class='box-article-img' loading='lazy'>\n  </a>\n  <div class='box-article-right'>\n    <div class='box-article-tags'>\n      <span class='box-article-tag blue-tag tag'>Reklama</span>\n    </div>\n    <h3 class='box-article-title fs16' title='${title}'>\n      <a href='${link}' target='_blank'>\n        ${title}\n      </a>\n    </h3>\n  </div>\n</article>",
        'commercial-article-1-hp': "<article class='box-article box-article-classic'>\n  <div class='box-article-left'>\n    <a class='box-article-img' href='${link}' target='_blank' title='${title}' tabindex='-1'>\n      <img src='${img}' width='210' height='140' loading='lazy' style='object-fit: cover'>\n    </a>\n  </div>\n  <div class='box-article-right'>\n    <div class='box-article-tags'>\n      <div class='box-article-tag'>REKLAMA</div>\n    </div>\n    <a href='${link}' target='_blank'>\n      <h3 class='box-article-title fs20'>${title}</h3>\n      <h4 class='box-article-perex fs16'>${desc}</h4>\n    </a>\n  </div>\n</article>"
      }
    },
    slideup: {
      enabled: true,
      adUnit: 'm-sticky'
    },
    vignette: {
      enabled: true,
      adUnit: 'centerVignette',
      css: '#cpex-vignette {\n  background-color: #000;\n  z-index: 2147483642;\n}\n  #cpex-vignette .button {\n    box-sizing: border-box;\n    cursor: pointer;\n    height: 56px;\n    width: 56px;\n    padding: 10px;\n    font-size: 20pt;\n    border: none;\n  }\n  #cpex-vignette-header {\n    position: absolute;\n    height: 70px;\n    width: 100%;\n    background-color: #4a4a4a;\n    color: white;\n    font-size: 18pt;\n    text-transform: capitalize;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  #cpex-vignette-close {\n    color: white;\n    position: absolute;\n    right: 5px;\n    top: 6px;\n  }',
      closeTextHTML: '✕',
      cookieName: 'vignette',
      cookieDuration: 3600
    }
  }
}