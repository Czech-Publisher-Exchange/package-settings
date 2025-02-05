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
          zoneId: 3178138,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55, 265]
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
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'mafra.sportyzive.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }]
    }]
  }
}