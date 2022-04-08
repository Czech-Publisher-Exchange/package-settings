window.cpexWebsiteSettings = {
  website: {
    name: 'centrum.cz'
  },
  cmp: {
    enabled: false
  },
  aam: {
    settings: {
      publisher: 'eco'
    }
  },
  headerbidding: {
    adUnits: [{
      code: 'leader',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 250],
            [970, 210],
            [970, 100],
            [728, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 385178,
          zoneId: 2142926,
          accountId: '10900',
          position: 'atf',
          sizes: [57, 96, 95, 2]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 385180,
          zoneId: 2142928,
          accountId: '10900',
          position: 'atf',
          sizes: [57, 96, 95, 2]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic_eco_hb',
        params: {
          publisherId: '161532',
          adSlot: 4344936
        },
        bidderModuleName: 'pubmatic'
      }, {
        bidder: 'adform_im_hb',
        params: {
          mid: 1334582,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 1148666,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 759674
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 144524,
          pageId: 158416
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22213120
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'centrum.cz',
          p: '728x90_2',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'halfpage',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [120, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 385178,
          zoneId: 2142942,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 8, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 385180,
          zoneId: 2142944,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 8, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic_eco_hb',
        params: {
          publisherId: '161532',
          adSlot: 4344935
        },
        bidderModuleName: 'pubmatic'
      }, {
        bidder: 'adform_im_hb',
        params: {
          mid: 1334586,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 1148675,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 759673
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 140099,
          pageId: 153776
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22213128
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'centrum.cz',
          p: '300x600',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'mediumrectangle',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [300, 50]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 385178,
          zoneId: 2142934,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 44]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 385180,
          zoneId: 2142936,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 44]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic_eco_hb',
        params: {
          publisherId: '161532',
          adSlot: 4344934
        },
        bidderModuleName: 'pubmatic'
      }, {
        bidder: 'adform_im_hb',
        params: {
          mid: 1334589,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 1148708,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 759675
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 144525,
          pageId: 158417
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22213123
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'centrum.cz',
          p: '300x250',
          m: 0,
          g: 'hb'
        }
      }]
    }],
    currency: 'USD',
    analytics: ['id5Analytics', 'cpexAnalytics']
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('sc-1cb3an8-0')[0])
    },
    native: {
      enabled: true
    }
  }
}