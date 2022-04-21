window.cpexWebsiteSettings = {
  website: {
    name: 'zena.aktualne.cz'
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
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 379392,
          zoneId: 2100098,
          accountId: '10900',
          position: 'atf',
          sizes: [230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 379386,
          zoneId: 2100074,
          accountId: '10900',
          position: 'atf',
          sizes: [230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 21874069
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'zena.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
      code: 'halfpage-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [300, 300],
            [160, 600],
            [120, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 379392,
          zoneId: 2100108,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 9, 8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 379386,
          zoneId: 2100084,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 9, 8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 21873770
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'zena.cz',
          p: '300x600',
          m: 0,
          g: 'hb'
        }
      }]
    }]
  }
}