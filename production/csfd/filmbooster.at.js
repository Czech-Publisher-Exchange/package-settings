window.cpexWebsiteSettings = {
  website: {
    name: 'filmbooster.at'
  },
  headerbidding: {
    adUnits: [{
      code: 'halfpage',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 300],
            [300, 250],
            [250, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 3140074,
          accountId: '10900',
          position: 'atf'
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
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 3140076,
          accountId: '10900',
          position: 'atf'
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
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 3140078,
          accountId: '10900',
          position: 'atf'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'mobile_square_1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [720, 1280],
            [480, 820],
            [300, 600],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 3140080,
          accountId: '10900',
          position: 'atf'
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
            [250, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 3140082,
          accountId: '10900',
          position: 'atf'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }],
    analytics: ['cpexAnalytics']
  },
  formats: {
    skin: {
      backgroundEl: /*S*/ () => { return document.body } /*E*/,
      contentEl: /*S*/ () => { return document.getElementById('page-wrapper') } /*E*/,
      hide: [/*S*/ () => { return document.getElementById('leaderboard-wrapper') } /*E*/],
      zIndex: 0,
      contentCSS: 'position: relative;margin-top: 210px',
      enabled: false
    },
    slideup: {
      adUnits: ['slide_up'],
      enabled: false
    },
    vignette: {
      adUnits: ['cpex_vignette'],
      enabled: false
    },
    interscroller: {
      enabled: true
    },
    native: {
      adUnitConfig: {
        native_short_1: {
          titleLength: [1, 1]
        },
        native_long_1: {
          titleLength: [1, 1]
        },
        native_long_2: {
          titleLength: [1, 1]
        },
        mobile_native_1: {
          titleLength: [1, 1]
        },
        mobile_native_2: {
          titleLength: [1, 1]
        },
        mobile_native_3: {
          titleLength: [1, 1]
        },
        mobile_native_4: {
          titleLength: [1, 1]
        }
      },
      enabled: false
    }
  },
  cmp: {
    enabled: false
  },
  general: {
    errorLogging: true,
    autoRun: false,
    customRun: /*S*/ () => {
      window.AdsObject?.ball ? cpexPackage.run() : window.addEventListener('adsObjectReady', () => cpexPackage.run())
    } /*E*/
  }
}