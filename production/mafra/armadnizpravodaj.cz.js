window.cpexWebsiteSettings = {
  website: {
    name: 'armadnizpravodaj.cz'
  },
  headerbidding: {
    adUnits: [{
      code: 'branding',
      mediaTypes: {
        banner: {
          sizes: [
            [2000, 1400],
            [998, 200],
            [728, 90],
            [970, 210],
            [970, 90],
            [2000, 1200],
            [1920, 1080]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 3178134,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55, 265]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1835437,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31700239
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'mafra_banner_default'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'mafra.armadnizpravodaj.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }]
    }]
  }
}