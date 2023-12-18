window.cpexWebsiteSettings = {
  website: {
    name: 'adbz.cz'
  },
  headerbidding: {
    adUnits: [{
      code: 'm_branding',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 820],
            [300, 600],
            [768, 1230],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 3134318,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 10, 261]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1815174,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1053064
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31440170
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'mafra.adbz.cz',
          p: 'interscroller',
          m: 1,
          g: 'hb'
        }
      }]
    }]
  }
}