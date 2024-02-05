window.cpexWebsiteSettings = {
  website: {
    name: 'kaloricketabulky.cz'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker'
  },
  headerbidding: {
    adUnits: [{
      code: 'leaderboard-bottom',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 250],
            [970, 210]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1545030,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 57, 96]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1545042,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 57, 96]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5142052'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 18293158
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
      code: 'leaderboard-top',
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
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1545028,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1545038,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5142053'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 18293122
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
      code: 'm-sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 120],
            [500, 200],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3087586,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3087588,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5142065'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 29943182
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'square-1',
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
          zoneId: 1545032,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1545046,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5142066'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 18293163
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
            [720, 1280],
            [480, 480],
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
          zoneId: 3214408,
          accountId: '10900',
          position: 'atf',
          sizes: [261, 16, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3214410,
          accountId: '10900',
          position: 'atf',
          sizes: [261, 16, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5734285'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31909171
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
    }],
    enabled: true
  },
  formats: {
    skin: {
      enabled: false
    },
    interscroller: {
      enabled: true
    },
    native: {
      enabled: false
    },
    slideup: {
      enabled: true,
      adUnits: ['m-sticky']
    },
    vignette: {
      enabled: false
    },
    responsive: {
      adUnits: ['m-square-1']
    }
  }
}