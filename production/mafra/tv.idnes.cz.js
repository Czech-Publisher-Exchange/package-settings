window.cpexWebsiteSettings = {
  website: {
    name: 'tv.idnes.cz'
  },
  headerbidding: {
    adUnits: [{
      code: '300x250',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1143056,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1143058,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641567'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1955143,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 878617
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 222141,
          pageId: 205885
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27158552
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'mafra_banner_default'
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 250],
            [500, 200],
            [320, 100],
            [970, 250],
            [336, 280],
            [320, 50],
            [728, 90],
            [970, 310],
            [480, 480],
            [300, 300],
            [480, 300],
            [998, 200],
            [300, 50],
            [300, 100],
            [970, 210],
            [750, 200],
            [750, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 2236610,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 258, 117, 57, 16, 43, 2, 94, 261, 48, 83, 259, 44, 19, 96, 40, 39]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 2236608,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 258, 117, 57, 16, 43, 2, 94, 261, 48, 83, 259, 44, 19, 96, 40, 39]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5604806'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1955144,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1064307
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27158554
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'mafra_banner_default'
        }
      }, {
        bidder: 'sspBC'
      }]
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ document.getElementsByClassName('m-bg-4')[0] /*E*/
    },
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnits: ['m_sticky']
    }
  }
}