window.cpexWebsiteSettings = {
  website: {
    name: 'dumazahrada.cz',
    note: 'aam voláme z GTM'
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
            [728, 90],
            [970, 210],
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
          sizes: [2, 96, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1156616,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042575'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783928
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
            [300, 300],
            [250, 250]
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
          sizes: [15, 48, 14]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 389886,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 14]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042577'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783931
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
          sizes: [10, 15, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 389888,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042576'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783930
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
            [300, 300]
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
          sizes: [83, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 2153986,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042578'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22444890
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
            [300, 300]
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
          sizes: [16, 15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2153988,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042579'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22444892
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
            [300, 300]
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
          sizes: [16, 15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2158446,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4042580'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22568336
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
          zoneId: 1370790,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1389440,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        },
        bidderModuleName: 'rubicon'
      }],
      filter: {
        minWidth: 1000
      }
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('page')[0]),
      hide: [(document.getElementById('leaderboard-top-wrap'))],
      offset: 52,
      offsetScroll: true
    },
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnit: 'm-sticky'
    }
  }
}