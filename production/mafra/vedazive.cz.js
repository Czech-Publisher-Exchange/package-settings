window.cpexWebsiteSettings = {
  website: {
    name: 'vedazive.cz'
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
          zoneId: 3178136,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 2, 96, 55]
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31700236
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'mafra.vedazive.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }]
    }]
  }
}