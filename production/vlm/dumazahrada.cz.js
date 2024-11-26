window.cpexWebsiteSettings = {
  website: {
    name: 'dumazahrada.cz'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker',
    allowedSSPs: {
      pubmatic: '1',
      index: '3',
      magnite: '4',
      xandr: '164'
    }
  },
  headerbidding: {
    enabled: true,
    adUnits: [{
      code: 'leaderboard-top',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 90],
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
          zoneId: 1156614,
          accountId: '10900',
          position: 'atf',
          sizes: [55, 96, 57, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1156616,
          accountId: '10900',
          position: 'atf',
          sizes: [55, 96, 57, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042575'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931075,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 938193
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783928
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard-top',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 90],
            [970, 210],
            [970, 250],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906372,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1901149,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'leaderboard-top',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 90],
            [970, 210],
            [970, 250],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950845,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950841,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 389830,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 389886,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042577'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938194
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783931
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
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
        bidder: 'adform',
        params: {
          mid: 1906374,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
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
        bidder: 'adform',
        params: {
          mid: 1950847,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [300, 300],
            [160, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 388620,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 389888,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042576'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931077,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 938195
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783930
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '300x600_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
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
          siteId: 144588,
          zoneId: 2153982,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 2153986,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042578'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931076,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 938196
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22444890
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x300_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2153984,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48, 261, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2153988,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48, 261, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042579'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931072,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 938197
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22444892
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x480_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-2',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2158444,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48, 261, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2158446,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48, 261, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042580'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938198
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22568336
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x480_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-2',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906384,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906381,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-2',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950855,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950852,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
        },
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144588,
          zoneId: 1370790,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 83, 48, 15, 16, 600]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3257074,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 83, 48, 15, 16, 600]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749736'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088949
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31808414
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x300_native',
          m: 0,
          g: 'hb'
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
        bidder: 'adform',
        params: {
          mid: 1906369,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
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
        },
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950842,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950880,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 1077180,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1077182,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5204066'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931855,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931854,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088950
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 29473314
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418804
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'sticky',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
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
          zoneId: 3131440,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10, 16, 67]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3131448,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10, 16, 67]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5543342'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931800,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1071034
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31409281
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'vignette',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-seznam-feed',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 480],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3177316,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3177360,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5650645'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950971,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1067529
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31687723
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
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
          zoneId: 3177338,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3177382,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5650656'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950970,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1067536
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31687724
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-gallery-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3241654,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241694,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749430'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076715
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077269
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906390,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906397,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-gallery-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950865,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950860,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-gallery-2',
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
          zoneId: 3241656,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241696,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749429'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076716
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077270
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-2',
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
        bidder: 'adform',
        params: {
          mid: 1906392,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906398,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-gallery-2',
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
        bidder: 'adform',
        params: {
          mid: 1950866,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950861,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-gallery-3',
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
          zoneId: 3241658,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241698,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749428'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076717
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077271
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-3',
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
        bidder: 'adform',
        params: {
          mid: 1950890,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950867,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-gallery-3',
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
        bidder: 'adform',
        params: {
          mid: 1906391,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906399,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-gallery-4',
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
          zoneId: 3241660,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241700,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749427'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 2004226,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076718
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077272
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-5',
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
          zoneId: 3241662,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241702,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749426'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076719
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077273
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-6',
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
          zoneId: 3241664,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241704,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749425'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076720
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077274
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-7',
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
          zoneId: 3241666,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241706,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749424'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076721
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077277
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-8',
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
          zoneId: 3241668,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241708,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749423'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076722
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077283
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-9',
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
          zoneId: 3241670,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241710,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749422'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076723
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077291
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-bottom-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [300, 300],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3241672,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 16, 48, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241712,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 16, 48, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749431'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076724
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077308
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x480_bottom',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '300x300_bottom_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-bottom-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [300, 300],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906396,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906386,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-bottom-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [300, 300],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950864,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950857,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3241674,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241714,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749433'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076725
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077328
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x480_3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
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
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906385,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906382,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950853,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950856,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3241676,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241716,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749434'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076726
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077333
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x480_4',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906395,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906388,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950858,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950863,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-5',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3241678,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241718,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749435'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076727
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077335
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x480_5',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-5',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906393,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906389,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-5',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950862,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950859,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-sticky-gallery',
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
          zoneId: 3241680,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241720,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749421'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1940164,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1938476,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076728
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077336
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418804
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'sticky_gallery',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3241684,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3241724,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749436'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076730
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077339
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '300x600_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
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
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1901145,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950846,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3241686,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3241726,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749437'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076731
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077340
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '300x600_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'skyscraper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906465,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950868,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'wallpaper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3241688,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3241728,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749419'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076732
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077341
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x300_2',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906375,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'wallpaper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950848,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'wallpaper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3241690,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3241730,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749420'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076733
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077345
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x300_3',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906376,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'wallpaper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950849,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 3241692,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3241732,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749432'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 2002402,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076734
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077350
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
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
            [970, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906371,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'leaderboard-gallery',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 210],
            [970, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950844,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [548, 150],
            [300, 250],
            [300, 300],
            [336, 280]
          ]
        },
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3242288,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 15, 48, 16, 600]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3242306,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 15, 48, 16, 600]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5878083'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076735
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32082357
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '336x280_native',
          m: 1,
          g: 'hb'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'leaderboard-bottom',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 90],
            [970, 210],
            [970, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3242290,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96, 57]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3242308,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96, 57]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749728'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 976694
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 29853398
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard-bottom',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 90],
            [970, 210],
            [970, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906370,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'leaderboard-bottom',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 90],
            [970, 210],
            [970, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950843,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-quiz',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [336, 280],
            [300, 250],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3242292,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3242310,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749729'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076737
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32082361
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-quiz-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [336, 280],
            [300, 250],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3242294,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3242312,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749730'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076738
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32082363
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-quiz-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [336, 280],
            [300, 250],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3242296,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3242314,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749731'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076739
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32082365
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'skyscraper-4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3242298,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3242316,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749732'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076740
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32082368
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'square-quiz',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [336, 280],
            [300, 250],
            [480, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3242300,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3242318,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749733'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076741
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32082369
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'square-quiz-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [336, 280],
            [300, 250],
            [480, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3242302,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3242320,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749734'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076742
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32082370
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'square-quiz-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [336, 280],
            [300, 250],
            [480, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3242304,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3242322,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5749735'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076743
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32082371
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 820],
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3312610,
          accountId: '10900',
          position: 'atf',
          sizes: [256, 484]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5830634'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931078,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32355495
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'interscroller',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'wallpaper-4',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3365124,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5906173'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104263
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32592775
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x300_4',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906467,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'wallpaper-4',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950869,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'wallpaper-5',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3365146,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5906184'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104270
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32592776
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: '480x300_5',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906469,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'wallpaper-5',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950870,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 3209428,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3209460,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6065977'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1938442,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088951
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31741170
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418804
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'sticky_seznamhp',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-sticky-gallery',
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
          zoneId: 3241682,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3241722,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6065978'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1938443,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1076729
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32077337
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418804
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'sticky_gallery_seznamhp',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
        bidder: 'adform',
        params: {
          mid: 1901146,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
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
        bidder: 'adform',
        params: {
          mid: 1950840,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [300, 300],
            [160, 600]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1901145,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [300, 300],
            [160, 600]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950839,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906380,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1906383,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950854,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950851,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 820],
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1931788,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 820],
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950888,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [548, 150],
            [300, 250],
            [300, 300],
            [336, 280]
          ]
        },
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950850,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950875,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [548, 150],
            [300, 250],
            [300, 300],
            [336, 280]
          ]
        },
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1906377,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 250],
            [300, 300],
            [300, 250],
            [970, 310]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3627818,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 57, 48, 15, 94]
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'sticky',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-gallery-1',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 820],
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3513392,
          accountId: '10900',
          position: 'atf',
          sizes: [256, 484]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 2015537,
          rcur: 'USD'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'dumazahrada.cz',
          p: 'interscroller_gallery',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'commercial-article-detail-bottom-1',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33980765
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-detail-bottom-2',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33980766
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-commercial-article-detail-bottom-1',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33980768
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-commercial-article-detail-bottom-2',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33980769
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-commercial-article-2',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33980772
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-commercial-article-3',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33980773
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-commercial-article-1-GA',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33980774
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418805
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
      contentEl: /*S*/ document.getElementsByClassName('page')[0] /*E*/,
      hide: [/*S*/ document.getElementById('leaderboard-top-wrap') /*E*/]
    },
    interscroller: {
      enabled: true,
      adUnits: ['m-square-1', 'm-square-gallery-1']
    },
    slideup: {
      enabled: true,
      adUnits: ['m-sticky', 'm-sticky-gallery', 'sticky']
    },
    native: {
      enabled: true,
      templates: {
        'commercial-article-native-detail': "<article class='cpex-native flex flex-col gap-4 group/item w-full mb-8 lg:mb-7 last:mb-0 sm:flex-row'> <a href='${link}' class='w-full h-auto shrink-0 no-underline relative sm:w-72'>    <div class='js-article-image w-full'>      <div class='js-lightbox-wrap lightbox__wrap relative w-auto -mx-4 sm:mx-0'>        <picture class='shrink-0'> <img src='${img}' alt='${title}' /> </picture>        <div class='flex absolute bottom-2 left-2 right-2 p-2 lg:p-0 lg:bottom-6 lg:left-6 lg:right-6'></div>      </div>    </div>  </a>  <div class='flex flex-col items-start gap-2' style='text-align: left'>    <div class='flex flex-wrap gap-2'> <a href='#' class='badge badge--link dark:bg-dark-grey-1 no-underline'>Reklama</a> </div>    <h2 class='m-0 !leading-normal text-xl'> <a href='${link}' class='block pl-1 -ml-1 no-underline group-hover/item:text-primary-2 dark:group-hover/item:text-dark-primary-2 text-inky dark:text-dark-inky'> ${title} </a> </h2>    <div>${desc}</div>  </div></article>",
        'm-commercial-article-native-detail': "<!-- same as commercial-article-native-detail but margin top and bot --><article style='margin-top: 20px; margin-bottom: 20px' class='cpex-native flex flex-col gap-4 group/item w-full mb-8 lg:mb-7 last:mb-0 sm:flex-row'> <a href='${link}' class='w-full h-auto shrink-0 no-underline relative sm:w-72'>    <div class='js-article-image w-full'>      <div class='js-lightbox-wrap lightbox__wrap relative w-auto -mx-4 sm:mx-0'>        <picture class='shrink-0'> <img src='${img}' alt='${title}' style='width:100%' /> </picture>        <div class='flex absolute bottom-2 left-2 right-2 p-2 lg:p-0 lg:bottom-6 lg:left-6 lg:right-6'></div>      </div>    </div>  </a>  <div class='flex flex-col items-start gap-2' style='text-align: left'>    <div class='flex flex-wrap gap-2'> <a href='#' class='badge badge--link dark:bg-dark-grey-1 no-underline'>Reklama</a> </div>    <h2 class='m-0 !leading-normal text-xl'> <a href='${link}' class='block pl-1 -ml-1 no-underline group-hover/item:text-primary-2 dark:group-hover/item:text-dark-primary-2 text-inky dark:text-dark-inky'> ${title} </a> </h2>    <div>${desc}</div>  </div></article>",
        'm-commercial-article-detail-bottom-1': 'm-commercial-article-native-detail',
        'm-commercial-article-detail-bottom-2': 'm-commercial-article-native-detail',
        'commercial-article-detail-bottom-1': 'commercial-article-native-detail',
        'commercial-article-detail-bottom-2': 'commercial-article-native-detail',
        'm-commercial-article-2': 'm-commercial-article-native-detail',
        'm-commercial-article-3': 'm-commercial-article-native-detail',
        'm-commercial-article-1-GA': 'm-commercial-article-native-detail'
      },
      adUnitConfig: {
        'commercial-article-native-detail': {
          titleLength: 45,
          descLength: 90
        }
      }
    },
    responsive: {
      adUnits: ['m-square-1', 'm-square-2', 'm-seznam-feed', 'm-square-gallery-1', 'm-square-gallery-2', 'm-square-gallery-3', 'm-square-gallery-4', 'm-square-gallery-5', 'm-square-gallery-6', 'm-square-gallery-7', 'm-square-gallery-8', 'm-square-gallery-9', 'm-square-3', 'm-square-4', 'm-square-5', 'm-square-bottom-1'],
      width: 480,
      height: 480,
      enabled: true
    }
  }
}