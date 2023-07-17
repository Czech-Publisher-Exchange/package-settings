window.cpexWebsiteSettings = {
  website: {
    name: 'kaloricketabulky.cz'
  },
  cmp: {
    enabled: false
  },
  aam: {
    settings: {
      publisher: 'vlm'
    }
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
            [2000, 1400],
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
          sizes: [2, 96, 230, 57]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1545038,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 230, 57]
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
    }],
    enabled: true
  },
  formats: {
    skin: {
      enabled: false
    },
    interscroller: {
      enabled: false
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
    }
  }
}