window.cpexWebsiteSettings = {
  website: {
    name: 'csfd.sk',
    note: 'test 2'
  },
  general: {
    autoRun: false,
    customRun: (() => {
      window.AdsObject?.ball ? cpexPackage.run() : window.addEventListener('adsObjectReady', () => cpexPackage.run())
    }),
    errorLogging: true
  },
  cmp: {
    enabled: false
  },
  aam: {
    settings: {
      publisher: 'csfd'
    }
  },
  headerbidding: {
    adUnits: [{
      code: 'skyscraper',
      mediaTypes: {
        banner: {
          sizes: [
            [120, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924114,
          accountId: '10900',
          position: 'atf',
          sizes: [8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924958,
          accountId: '10900',
          position: 'atf',
          sizes: [8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394980'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932028,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924111
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750759
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '120x600',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wide_skyscraper_sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [120, 600],
            [160, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924120,
          accountId: '10900',
          position: 'atf',
          sizes: [8, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924960,
          accountId: '10900',
          position: 'atf',
          sizes: [8, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394981'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932031,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924112
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750761
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '180x600_1',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_1',
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
          siteId: 235290,
          zoneId: 1924122,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924962,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394975'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932032,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924113
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 133959,
          pageId: 123288
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750764
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_1',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_2',
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
          siteId: 235290,
          zoneId: 1924124,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924966,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394976'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932033,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924114
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750771
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_2',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_3',
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
          siteId: 235290,
          zoneId: 1924126,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924968,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394977'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932034,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924115
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750774
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_3',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_4',
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
          siteId: 235290,
          zoneId: 1924128,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924970,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394978'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932035,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924116
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750779
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_4',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_5',
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
          siteId: 235290,
          zoneId: 1924130,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924972,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394979'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932036,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924117
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750785
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_5',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'rectangle',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924134,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924976,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394983'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932037,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924118
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 133959,
          pageId: 123288
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750811
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x250',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wide_rectangle_1',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924140,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924978,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394984'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932038,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924119
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750817
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '480x300_1',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wide_rectangle_2',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [336, 280],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924142,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924998,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394985'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932039,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924120
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750819
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '480x300_2',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'halfpage',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924144,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925000,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394986'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932040,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924121
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750820
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x600',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'halfpage_sticky_1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924146,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925002,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394987'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932041,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924122
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750823
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x600_1',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'halfpage_sticky_2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924148,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925004,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394988'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932042,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924123
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750835
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x600_2',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [2000, 1400],
            [970, 210],
            [998, 200],
            [728, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924150,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 96, 259, 2]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925006,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 96, 259, 2]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394989'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932027,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932023,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924110
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750836
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '1000x210',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'billboard',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 310],
            [970, 250],
            [480, 300],
            [728, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924154,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 57, 83, 2]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925008,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 57, 83, 2]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394990'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932043,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924125
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750837
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '1000x310',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'slide_up',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [320, 100],
            [320, 50],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924760,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 117, 43, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925022,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 117, 43, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'adform',
        params: {
          mid: 932052,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425892,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750845
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100],
            [320, 50],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924764,
          accountId: '10900',
          position: 'atf',
          sizes: [117, 43, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925024,
          accountId: '10900',
          position: 'atf',
          sizes: [117, 43, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394991'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932053,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425876,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924126
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750846
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '320x100',
          m: 1,
          g: 'hb'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924770,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925026,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394992'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932054,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425889,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924127
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 133958,
          pageId: 123287
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750847
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_1',
          m: 1,
          g: 'hb'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924772,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925028,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394993'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932055,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425890,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924128
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 133959,
          pageId: 123288
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750848
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_2',
          m: 1,
          g: 'hb'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924774,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925030,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394994'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932056,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425891,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924129
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750850
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_3',
          m: 1,
          g: 'hb'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924780,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925032,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394995'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932057,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924130
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750852
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_4',
          m: 1,
          g: 'hb'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_billboard',
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
          siteId: 238982,
          zoneId: 1924786,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925036,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394997'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932059,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425878,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924132
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750819
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_6',
          m: 1,
          g: 'hb'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'wide_rectangle_hp',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [336, 280],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924142,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 16, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924998,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 16, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394985'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932039,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924120
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 23455304
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '480x300_2',
          m: 0,
          g: 'hb'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'halfpage_sticky_3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '235290',
          zoneId: 2230180,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 2230182,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4137325'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1213168,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924122
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }],
      filter: {
        minWidth: 1000
      }
    }]
  },
  formats: {
    skin: {
      enabled: true,
      backgroundEl: (document.body),
      contentEl: (document.getElementById('page-wrapper')),
      contentCSS: 'position: relative;margin-top: 210px',
      hide: [(document.getElementById('leaderboard-wrapper'))]
    },
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnits: ['slide_up']
    },
    vignette: {
      enabled: true,
      adUnits: ['cpex_vignette']
    },
    responsive: {
      adUnits: ['mobile_square_1'],
      width: '480',
      height: '480'
    }
  }
}