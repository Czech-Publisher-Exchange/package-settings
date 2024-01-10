window.cpexWebsiteSettings = {
  website: {
    name: 'adbz.cz'
  },
  headerbidding: {
    adUnits: [{
      code: 'branding',
      mediaTypes: {
        banner: {
          sizes: [
            [998, 200],
            [728, 90],
            [970, 210],
            [970, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 3134316,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 2, 96, 55]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1815172,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1053063
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31440172
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'mafra.adbz.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }]
    }]
  }
}