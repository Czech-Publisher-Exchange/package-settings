window.cpexWebsiteSettings = {
  aam: {
    settings: {
      publisher: 'iinfo'
    }
  },
  adserver: {
    adapter: 'sastracker',
    allowedSSPs: {
      pubmatic: 1,
      index: 3,
      magnite: 4,
      xandr: 5
    }
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('parter-cpex-branding-wrapper')[0]),
      hide: [(document.getElementsByClassName('design-advert-placeholder--leaderboard')[0])],
      offset: 25,
      offsetScroll: true
    }
  },
  headerbidding: {
    adUnits: [{
      code: 'iinfo-area-halfpagead-horni',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [120, 600],
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 265202,
          zoneId: 1336786,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 8, 15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 265182,
          zoneId: 1336784,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 8, 15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3951706'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690640,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690640,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 727305,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 16315603
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'iInfo_Slunecnice_Halfpagead'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: '300x600',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'iinfo-area-halfpagead-spodni',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [120, 600],
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 265202,
          zoneId: 2088342,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 8, 15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 265182,
          zoneId: 2088344,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 8, 15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3735837'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1057038,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1057038,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 727311,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 21786364
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'iInfo_Slunecnice_Vrchni_Square'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: '300x300_1',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'iinfo-area-leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 210],
            [998, 200],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 265202,
          zoneId: 1336774,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 259, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 265182,
          zoneId: 1336772,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 259, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3951705'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690636,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690636,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 727307,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 727307,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 16315599
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'iInfo_Slunecnice_Leaderboard'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: 'branding, 998x200',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: 'branding, 998x200',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'iinfo-area-leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 265202,
          zoneId: 1336774,
          accountId: '10900',
          position: 'atf',
          sizes: [117]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 265182,
          zoneId: 1336772,
          accountId: '10900',
          position: 'atf',
          sizes: [117]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3951705'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690636,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690636,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 727307,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 727307,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 16315599
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'iInfo_Slunecnice_Leaderboard_Mobile'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: '998x200',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'iinfo-area-big-rectangle',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 310],
            [970, 210],
            [970, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 265202,
          zoneId: 1336806,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 96, 57]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 265182,
          zoneId: 1336804,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 96, 57]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3951707'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690641,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690641,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 727304,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 727304,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 16315604
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'iInfo_Slunecnice_Big_Rectangle'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: '970x310',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'iinfo-area-big-rectangle',
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
          siteId: 265202,
          zoneId: 1336806,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 265182,
          zoneId: 1336804,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3951707'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690641,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690641,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 727304,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 727304,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 16315604
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'iInfo_Slunecnice_Big_Rectangle_Mobile'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: '970x310',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'iinfo-area-rectangle',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 265202,
          zoneId: 1336794,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 265182,
          zoneId: 1336792,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3951708'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690637,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690637,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 727309,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 727309,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 16315600
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'Slunecnice_articlepage_2'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: '480x300',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'iinfo-area-rectangle',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 265202,
          zoneId: 1497418,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }]
    }, {
      code: 'iinfo-area-spodni-square-banner',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 265202,
          zoneId: 1336782,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 265182,
          zoneId: 1336780,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3951709'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690639,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 690639,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 727310,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 16315602
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'iInfo_Slunecnice_Spodni_Square'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'slunecnice.cz',
          p: '300x300_2',
          m: 0,
          g: 'hb'
        }
      }]
    }]
  },
  website: {
    name: 'slunecnice.cz'
  }
}