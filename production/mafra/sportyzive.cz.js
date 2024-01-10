window.cpexWebsiteSettings = {
  website: {
    name: 'sportyzive.cz'
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
          zoneId: 3178138,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 2, 96, 55]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5652821'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1835439,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31700240
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'mafra.sportyzive.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }]
    }]
  }
}