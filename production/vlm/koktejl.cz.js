window.cpexWebsiteSettings = {
  website: {
    name: 'koktejl.cz'
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
            [2000, 1400],
            [970, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3260572,
          accountId: '10900',
          position: 'atf',
          sizes: [55, 96, 230, 57]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752018'
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
          zoneId: 3260574,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752016'
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
          zoneId: 3260576,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752029'
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
          zoneId: 3260578,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5751995'
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
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 820],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3260580,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48, 261, 256, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752020'
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
          zoneId: 3260582,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48, 261, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752021'
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
      code: 'm-sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 120],
            [500, 200],
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3260584,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258, 15, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752026'
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
          zoneId: 3260586,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10, 16, 67]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752027'
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
          zoneId: 3260588,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752019'
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
          zoneId: 3260590,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752028'
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
    }, {
      code: 'm-square-gallery-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 480],
            [480, 820],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3260592,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 256, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752013'
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
          zoneId: 3260594,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752012'
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
          zoneId: 3260596,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752011'
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
          zoneId: 3260598,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752010'
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
          zoneId: 3260600,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752009'
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
          zoneId: 3260602,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752008'
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
          zoneId: 3260604,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752007'
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
          zoneId: 3260606,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752006'
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
          zoneId: 3260608,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752005'
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
      code: 'm-square-bottom-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3260610,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 16, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752014'
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
          zoneId: 3260612,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752022'
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
          zoneId: 3260614,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752023'
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
          zoneId: 3260616,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752024'
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
      code: 'm-sticky-gallery',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 120],
            [500, 200],
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3260618,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258, 15, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752001'
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
          zoneId: 3260620,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752030'
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
          zoneId: 3260622,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752031'
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
          zoneId: 3260624,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5751996'
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
          zoneId: 3260626,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 16, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5751997'
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
          zoneId: 3260628,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752015'
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
    }, {
      code: 'm-commercial-article-native-detail',
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
          zoneId: 3260630,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752055'
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
          zoneId: 3260634,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96, 57]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752017'
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
          zoneId: 3260636,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752004'
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
          zoneId: 3260638,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752003'
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
          zoneId: 3260640,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752002'
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
          zoneId: 3260642,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5751998'
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
          zoneId: 3260644,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5751999'
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
          zoneId: 3260646,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 16, 15, 83]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752000'
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
    }, {
      code: 'leaderboard-bottom-2',
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
          zoneId: 3260648,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96, 57]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752053'
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
    }, {
      code: 'm-square-bottom-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [336, 280],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3260650,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 16, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5752025'
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
    }]
  },
  formats: {
    skin: {
      enabled: false,
      contentEl: /*S*/ document.getElementsByClassName('page')[0] /*E*/ ,
      hide: [ /*S*/ document.getElementById('leaderboard-top-wrap') /*E*/ ],
      offset: 52,
      offsetScroll: true
    },
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnits: ['m-sticky', 'm-sticky-gallery']
    },
    native: {
      enabled: false,
      templates: {
        'commercial-article-native-detail': "<article class='cpex-native flex flex-col gap-4 group/item w-full mb-8 lg:mb-7 last:mb-0 sm:flex-row'> <a href='${link}' class='w-full h-auto shrink-0 no-underline relative sm:w-72'>    <div class='js-article-image w-full'>      <div class='js-lightbox-wrap lightbox__wrap relative w-auto -mx-4 sm:mx-0'>        <picture class='shrink-0'> <img src='${img}' alt='${title}' /> </picture>        <div class='flex absolute bottom-2 left-2 right-2 p-2 lg:p-0 lg:bottom-6 lg:left-6 lg:right-6'></div>      </div>    </div>  </a>  <div class='flex flex-col items-start gap-2' style='text-align: left'>    <div class='flex flex-wrap gap-2'> <a href='#' class='badge badge--link dark:bg-dark-grey-1 no-underline'>Reklama</a> </div>    <h2 class='m-0 !leading-normal text-xl'> <a href='${link}' class='block pl-1 -ml-1 no-underline group-hover/item:text-primary-2 dark:group-hover/item:text-dark-primary-2 text-inky dark:text-dark-inky'> ${title} </a> </h2>    <div>${desc}</div>  </div></article>"
      },
      adUnitConfig: {
        'commercial-article-native-detail': {
          titleLength: 45,
          descLength: 90
        }
      }
    },
    responsive: {
      adUnits: ['m-square-1', 'm-square-2', 'm-seznam-feed', 'm-square-gallery-1', 'm-square-gallery-2', 'm-square-gallery-3', 'm-square-gallery-4', 'm-square-gallery-5', 'm-square-gallery-6', 'm-square-gallery-7', 'm-square-gallery-8', 'm-square-gallery-9', 'm-square-3', 'm-square-4', 'm-square-5'],
      width: 480,
      height: 480,
      enabled: true
    },
    vignette: {
      enabled: true,
      adUnits: ['centerVignette']
    }
  }
}