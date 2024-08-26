window.cpexWebsiteSettings = {
  website: {
    name: 'kafe.cz'
  },
  adserver: {
    adapter: 'sastracker'
  },
  headerbidding: {
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
          zoneId: 549816,
          accountId: '10900',
          position: 'atf',
          sizes: [55, 96, 57, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 549784,
          accountId: '10900',
          position: 'atf',
          sizes: [55, 96, 57, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245623'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931061,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 938199
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15624111
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
          inventoryCode: 'VLM_Kafe_Leaderboard-top'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29301'
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '29262'
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
          mid: 1908002,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1907989,
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
          mid: 1950998,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951006,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 600],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 389840,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 10, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 389892,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 10, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245624'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938200
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15624112
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
          inventoryCode: 'VLM_Kafe_Skyscraper-2'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x600_2',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29268'
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
            [300, 300],
            [300, 600],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1907992,
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
            [300, 300],
            [300, 600],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1951001,
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
          zoneId: 857042,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 857124,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245628'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931058,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 938202
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15624119
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
          inventoryCode: 'VLM_Kafe_Square-1_Mobile'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '480x480_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29289'
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
            [300, 300],
            [300, 250],
            [480, 480],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908003,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1907993,
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
            [300, 300],
            [300, 250],
            [480, 480],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1951033,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951031,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 1008786,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96, 57]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1008788,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96, 57]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245632'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938203
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15624114
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
          inventoryCode: 'VLM_Kafe_Leaderboard-bottom'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29304'
        }
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
          mid: 1907991,
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
          mid: 1951000,
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
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 884754,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 104782,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3245635'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931063,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 938204
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15624115
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
          inventoryCode: 'VLM_Kafe_Skyscraper-1'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x600_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29307'
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
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1907990,
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
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1950999,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280],
            [548, 150]
          ]
        },
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3266588,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16, 90, 600]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3266590,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16, 90, 600]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5774635'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088978
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31924732
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
          d: 'kafe.cz',
          p: '480x300_native',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '29328'
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
            [300, 250],
            [336, 280],
            [548, 150]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1907999,
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
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280],
            [548, 150]
          ]
        },
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1951004,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951010,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-2',
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
          zoneId: 1036438,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1036440,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4055811'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938206
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783980
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
          inventoryCode: 'VLM_kafe_m_square_2'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '480x480_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29325'
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
            [480, 480],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908017,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1907995,
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
          mid: 1951032,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951039,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
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
          zoneId: 2183454,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 2183474,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4080492'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938207
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783978
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
          inventoryCode: 'VLM_kafe_square_1'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29253'
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
        bidder: 'adform',
        params: {
          mid: 1907994,
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
          mid: 1951002,
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
          zoneId: 1077172,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1077174,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5192040'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931866,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931865,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073960
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22969011
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
          d: 'kafe.cz',
          p: 'sticky',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '27024'
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '26931'
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
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2726100,
          accountId: '10900',
          position: 'atf',
          sizes: [261, 15, 48, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2726106,
          accountId: '10900',
          position: 'atf',
          sizes: [261, 15, 48, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4885306'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938208
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 28814464
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
          inventoryCode: 'VLM_kafe_m_square_3'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '480x480_3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29283'
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
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908018,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1908010,
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
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1951040,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951035,
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
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2726102,
          accountId: '10900',
          position: 'atf',
          sizes: [261, 15, 48, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2726108,
          accountId: '10900',
          position: 'atf',
          sizes: [261, 15, 48, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4885307'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938209
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 28814465
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
          inventoryCode: 'VLM_kafe_m_square_4'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '480x480_4',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_4',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29256'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-4',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908019,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1908011,
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
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1951041,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951036,
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
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2726104,
          accountId: '10900',
          position: 'atf',
          sizes: [261, 15, 48, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2726110,
          accountId: '10900',
          position: 'atf',
          sizes: [261, 15, 48, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4885308'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 938210
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 28814466
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
          inventoryCode: 'VLM_kafe_m_square_5'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '480x480_5',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_5',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29271'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-5',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908016,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1908012,
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
            [480, 480],
            [300, 250],
            [300, 300],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1951038,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951037,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 3177322,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3177366,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5650650'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951017,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1067528
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31687716
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
          zoneId: 3177344,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3177388,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5650661'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1950997,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1067535
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31687717
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
      code: 'centerVignette',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [300, 300],
            [336, 280],
            [320, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3185676,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 16, 67]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3185680,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 16, 67]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5674718'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931804,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1071033
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 24674041
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
          tagid: '29313'
        }
      }],
      filter: {
        maxWidth: 1000
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
          zoneId: 3205058,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3205108,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714561'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088981
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863744
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
          d: 'kafe.cz',
          p: '480x300_2',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29316'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1907997,
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
          mid: 1951018,
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
          zoneId: 3205060,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3205112,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714562'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073940
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863793
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
          d: 'kafe.cz',
          p: '480x300_3',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29259'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908001,
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
          mid: 1951020,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 3205062,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3205114,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714563'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073941
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863812
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
          zoneId: 3205064,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3205114,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714564'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073942
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863821
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
      code: 'skyscraper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3205066,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3205118,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714565'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073943
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863833
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
          d: 'kafe.cz',
          p: '300x600_3',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29265'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'skyscraper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908004,
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
            [300, 300],
            [300, 250],
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1951007,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
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
          zoneId: 3205070,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205120,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714566'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1938462,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1940207,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073944
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863859
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
          d: 'kafe.cz',
          p: 'sticky_gallery',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '27057'
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '27111'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
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
          zoneId: 3205072,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205122,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714567'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073945
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863876
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
          zoneId: 3205074,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205124,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714568'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073946
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863885
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
        maxWidth: 1000
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
          zoneId: 3205076,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205126,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714569'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073947
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863895
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
          zoneId: 3205078,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205128,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714570'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073948
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863918
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
          zoneId: 3205080,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205130,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714571'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073949
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863926
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
          zoneId: 3205082,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205132,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714572'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073950
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863958
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
          zoneId: 3205084,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205134,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714573'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073951
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863967
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
          zoneId: 3205086,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205136,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714574'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073952
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863976
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
        maxWidth: 1000
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
          zoneId: 3205088,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205138,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714575'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073953
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863984
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
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3205090,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205140,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714576'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073954
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31863994
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
          d: 'kafe.cz',
          p: '480x480_gallery_3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_gallery_3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29310'
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
          mid: 1908023,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1908013,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
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
          mid: 1951049,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951044,
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
          zoneId: 3205096,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205142,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714577'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073955
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31864004
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
          d: 'kafe.cz',
          p: '480x480_gallery_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_gallery_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29274'
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
          mid: 1908022,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1908014,
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
          mid: 1951048,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951045,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-square-gallery-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 480],
            [480, 820],
            [336, 280],
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3205098,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 256, 16, 484]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205144,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 256, 16, 484]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714578'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073956
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31864017
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
          d: 'kafe.cz',
          p: '480x480_gallery_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: 'interscroller_gallery',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_gallery_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29298'
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
          mid: 1908021,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1908015,
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
          mid: 1951046,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951047,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 3205102,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 16, 48, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3205146,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 16, 48, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714579'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073957
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31864034
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
          d: 'kafe.cz',
          p: '480x480_bottom_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'kafe.cz',
          p: '300x300_bottom_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29322'
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
          mid: 1908020,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1908009,
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
          mid: 1951042,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951034,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
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
          zoneId: 3205106,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3205150,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714580'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1073958
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31864070
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
          tagid: '29286'
        }
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
          mid: 1908000,
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
          mid: 1951005,
          rcur: 'USD'
        }
      }],
      filter: {
        minWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'wallpaper-1',
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
          zoneId: 2850168,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 2850212,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5714581'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931062,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 976693
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 29853392
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
          d: 'kafe.cz',
          p: '480x300_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29280'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1907996,
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1951003,
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
            [480, 820],
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3312618,
          accountId: '10900',
          position: 'atf',
          sizes: [256, 484]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5830635'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931064,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32355500
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
          d: 'kafe.cz',
          p: 'interscroller',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29277'
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
            [480, 820],
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1931792,
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
          mid: 1951043,
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
          siteId: 46270,
          zoneId: 3266576,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 48, 15, 16, 600]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3266578,
          accountId: '10900',
          position: 'atf',
          sizes: [90, 48, 15, 16, 600]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5891111'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104281
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32553500
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
          d: 'kafe.cz',
          p: '336x280_native',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '29292'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [548, 150],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1907998,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'm-commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [548, 150],
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
          mid: 1951019,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1951025,
          rcur: 'USD'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
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
          zoneId: 3365132,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5906176'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104264
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32592718
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
          d: 'kafe.cz',
          p: '480x300_4',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29295'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908005,
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
          mid: 1951021,
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
          zoneId: 3365154,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5906187'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104271
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32592720
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
          d: 'kafe.cz',
          p: '480x300_5',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '29319'
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
            [336, 280],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1908006,
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
          mid: 1951022,
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
          zoneId: 3209424,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3209456,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6065985'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1938461,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088979
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31741231
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
          d: 'kafe.cz',
          p: 'sticky_seznamhp',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '27156'
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
          zoneId: 3209454,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3209486,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6065986'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1940208,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088980
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31885557
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
          d: 'kafe.cz',
          p: 'sticky_gallery_seznamhp',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: '27117'
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'commercial-article-detail-bottom-1',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33982962
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
      code: 'commercial-article-detail-bottom-2',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33982970
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
      code: 'm-commercial-article-detail-bottom-1',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 33982977
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
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
          placementId: 33983060
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
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
          placementId: 33982991
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
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
      contentEl: /*S*/ document.getElementsByClassName('wrapper')[0] /*E*/,
      contentCSS: 'margin-top: 200px; position: initial;',
      hide: [/*S*/ document.getElementsByClassName('leaderboard-top')[0] /*E*/]
    },
    native: {
      enabled: true,
      templates: {
        generic: "<article class='cpex-native flex flex-col gap-4 group/item w-full mb-8 lg:mb-7 last:mb-0 sm:flex-row'> <a href='${link}' class=' w-full h-auto shrink-0 no-underline relative sm:w-72'>    <div class=' js-article-image w-full'>      <div class=' js-lightbox-wrap lightbox__wrap relative w-auto  -mx-4 sm:mx-0'>        <picture class='shrink-0'> <img src='${img}' alt='${title}' style='width:100%'> </picture>        <div class='flex absolute bottom-2 left-2 right-2 p-2 lg:p-0 lg:bottom-6 lg:left-6 lg:right-6'></div>      </div>    </div>  </a>  <div class=' flex flex-col items-start gap-2'>    <div class='flex flex-wrap gap-2'> <a href='#' class='badge badge--link dark:bg-dark-grey-1 no-underline'> Reklama</a> </div>    <h2 class='m-0 !leading-normal text-xl'> <a href='${link}' class=' block pl-1 -ml-1 no-underline group-hover/item:text-primary-2 dark:group-hover/item:text-dark-primary-2 text-inky dark:text-dark-inky '> ${title} </a> </h2>    <div style='text-align:left'> ${desc} </div>  </div></article>"
      },
      adUnitConfig: {
        'commercial-article-native-detail': {
          titleLength: 45,
          descLength: 90
        }
      }
    },
    vignette: {
      enabled: true
    },
    interscroller: {
      enabled: true,
      adUnits: ['m-square-1', 'm-square-gallery-1']
    },
    slideup: {
      enabled: true,
      adUnits: ['m-sticky', 'm-sticky-gallery']
    },
    responsive: {
      adUnits: ['m-square-1', 'm-square-2', 'm-square-3', 'm-square-4', 'm-square-5', 'm-seznam-feed', 'm-square-gallery-1', 'm-square-gallery-2', 'm-square-gallery-3', 'm-square-gallery-4', 'm-square-gallery-5', 'm-square-gallery-6', 'm-square-gallery-7', 'm-square-gallery-8', 'm-square-gallery-9', 'm-square-bottom-1']
    }
  },
  cmp: {
    enabled: false
  },
  ab: {
    groupList: {
      a: {
        websiteSettings: 'https://cdn.cpex.cz/settings/production/vlm/kafe.cz.js',
        probability: 0.25
      },
      b: {
        websiteSettings: 'https://cdn.cpex.cz/settings/production/vlm/kafe.cz.js',
        probability: 0.75
      }
    }
  }
}