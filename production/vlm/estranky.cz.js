window.cpexWebsiteSettings = {
  website: {
    name: 'estranky.cz'
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
          siteId: 144588,
          zoneId: 681970,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 681990,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'adform',
        params: {
          mid: 1914496,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783938
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
          siteId: 144588,
          zoneId: 681968,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 681984,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'adform',
        params: {
          mid: 1914493,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783937
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
          zoneId: 3180782,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3180784,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31741015
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_high'
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
          siteId: 144588,
          zoneId: 681972,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 681996,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'adform',
        params: {
          mid: 1914492,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783939
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
          zoneId: 3412140,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1914502,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32801320
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
    vignette: {
      enabled: false
    },
    responsive: {
      enabled: true,
      adUnits: ['m-square-1'],
      width: 480,
      height: 480
    },
    interscroller: {
      enabled: false
    },
    slideup: {
      enabled: true,
      adUnits: ['m-sticky']
    },
    skin: {
      contentEl: /*S*/ document.getElementsByClassName('c-main')[0] /*E*/,
      enabled: false
    }
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker'
  }
}