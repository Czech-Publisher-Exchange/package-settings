window.cpexWebsiteSettings = {
  website: {
    name: 'impuls.cz'
  },
  cmp: {
    enabled: false
  },
  aam: {
    settings: {
      publisher: 'impuls'
    }
  },
  adserver: {
    adapter: 'googletag',
    defineSlots: [{
      elementId: 'leaderboard_1',
      sizes: [
        [2000, 1400],
        [970, 250],
        [970, 210],
        [970, 310]
      ],
      path: '/22794528025/impuls_leaderboard_1'
    }, {
      elementId: 'billboard_1',
      sizes: [
        [970, 250],
        [970, 210],
        [970, 90],
        [970, 310]
      ],
      path: '/22794528025/impuls_billboard_1'
    }, {
      elementId: 'medium_rectangle_1',
      sizes: [
        [300, 300],
        [300, 250]
      ],
      path: '/22794528025/impuls_medium_rectangle_1'
    }, {
      elementId: 'halfpage_1',
      sizes: [
        [300, 600],
        [300, 300],
        [300, 250],
        [160, 600],
        [120, 600]
      ],
      path: '/22794528025/impuls_halfpage_1'
    }, {
      elementId: 'cpex-interscroller',
      sizes: [
        [480, 820]
      ],
      path: '/22794528025/impuls_interscroller'
    }],
    gamPrefix: 'impuls_',
    gamId: '22794528025'
  },
  headerbidding: {
    adUnits: [{
      code: 'leaderboard_1',
      mediaTypes: {
        banner: {
          sizes: [
            [2000, 1400],
            [970, 250],
            [970, 210],
            [970, 310]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 420412,
          zoneId: 2383256,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 57, 96, 94]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 420414,
          zoneId: 2383264,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 57, 96, 94]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4425363'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 811948
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 24860764
        }
      }]
    }, {
      code: 'billboard_1',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 250],
            [970, 210],
            [970, 90],
            [970, 310]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 420412,
          zoneId: 2383258,
          accountId: '10900',
          position: 'atf',
          sizes: [57, 96, 55, 94]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 420414,
          zoneId: 2383266,
          accountId: '10900',
          position: 'atf',
          sizes: [57, 96, 55, 94]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4425364'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 811946
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 24860765
        }
      }]
    }, {
      code: 'medium_rectangle_1',
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
          siteId: 420412,
          zoneId: 2383260,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 420414,
          zoneId: 2383268,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4425365'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 811947
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 24860766
        }
      }]
    }, {
      code: 'halfpage_1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250],
            [160, 600],
            [120, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 420412,
          zoneId: 2383262,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 420414,
          zoneId: 2383270,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4425366'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 811945
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 24860767
        }
      }]
    }],
    currency: 'CZK'
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementById('page')),
      hide: [(document.getElementsByClassName('dotbox-fullpage')[0])]
    }
  }
}