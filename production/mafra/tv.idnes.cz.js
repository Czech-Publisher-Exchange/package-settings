window.cpexWebsiteSettings = {
  website: {
    name: 'tv.idnes.cz'
  },
  aam: {
    settings: {
      publisher: 'mafra'
    }
  },
  headerbidding: {
    adUnits: [{
      code: '300x250',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250]
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
          sizes: [15, 14]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1143058,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641567'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 878617
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27158552
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }]
    }, {
      code: 'm_sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 250],
            [500, 200]
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
          sizes: [60, 15, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 2236608,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27158554
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }]
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('m-bg-4')[0])
    },
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnit: 'm_sticky'
    }
  }
}