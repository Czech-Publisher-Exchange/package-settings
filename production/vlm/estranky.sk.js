window.cpexWebsiteSettings = {
  website: {
    name: 'estranky.sk'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker'
  },
  headerbidding: {
    adUnits: [{
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
          zoneId: 3416856,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 9]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5982841'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1914505,
          rcur: 'USD'
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
          zoneId: 3416858,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5982838'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1914504,
          rcur: 'USD'
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
          zoneId: 3416862,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5982842'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1914503,
          rcur: 'USD'
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
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3416864,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5982839'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1914506,
          rcur: 'USD'
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
      enabled: false,
      adUnits: ['m-sticky']
    },
    vignette: {
      enabled: false
    },
    responsive: {
      adUnits: ['m-square-1'],
      enabled: true
    }
  }
}