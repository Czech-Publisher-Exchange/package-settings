window.cpexWebsiteSettings = {
  website: {
    name: 'stahnu.cz'
  },
  aam: {
    settings: {
      publisher: 'iinfo'
    }
  },
  adserver: {
    adapter: 'sastracker'
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3533389'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1058146,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1058147,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 21248679
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ii.stahnu.cz',
          p: '300x600_1',
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3533390'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1058148,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1058149,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 21248683
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ii.stahnu.cz',
          p: '300x600_2',
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3533387'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1058142,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1058143,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30169013
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ii.stahnu.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ii.stahnu.cz',
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
            [970, 250],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3533388'
        }
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1058144,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'im-adform',
        params: {
          mid: 1058145,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 21248675
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ii.stahnu.cz',
          p: '970x310',
          m: 0,
          g: 'hb'
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3533391'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 21248688
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ii.stahnu.cz',
          p: '300x300',
          m: 0,
          g: 'hb'
        }
      }]
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ document.getElementsByClassName('parter-cpex-branding-wrapper')[0] /*E*/ ,
      contentCSS: 'width: 1060px; margin: 200px auto;',
      offset: null,
      offsetScroll: true
    }
  }
}