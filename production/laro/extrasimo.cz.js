window.cpexWebsiteSettings = {
  website: {
    name: 'extrasimo.cz'
  },
  adserver: {
    enabled: true,
    adapter: 'googletag',
    loadPrerequisites: true,
    defineSlots: [{
      elementId: 'dhp-1-2000x1400',
      sizes: [
        [998, 200],
        [970, 210],
        [2000, 1400]
      ],
      path: '/22996079844/extrasimo.cz_dhp-1-2000x1400'
    }, {
      elementId: 'dsa-1-2000x1400',
      sizes: [
        [998, 200],
        [970, 210],
        [2000, 1400]
      ],
      path: '/22996079844/extrasimo.cz_dsa-1-2000x1400'
    }],
    gamId: '22996079844',
    gamPrefix: 'extrasimo.cz_'
  },
  headerbidding: {
    adUnits: [{
      code: 'dhp-1-2000x1400',
      mediaTypes: {
        banner: {
          sizes: [
            [998, 200],
            [970, 210]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 363124,
          zoneId: 3046826,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 96, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 363126,
          zoneId: 3046828,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 96, 230]
        },
        bidderModuleName: 'rubicon'
      }],
      filter: {
        minWidth: 750
      }
    }, {
      code: 'dsa-1-2000x1400',
      mediaTypes: {
        banner: {
          sizes: [
            [998, 200],
            [970, 210]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 363124,
          zoneId: 3046826,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 96, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 363126,
          zoneId: 3046828,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 96, 230]
        },
        bidderModuleName: 'rubicon'
      }],
      filter: {
        minWidth: 750
      }
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ () => { return document.getElementsByClassName('main')[0] } /*E*/ ,
      offset: 40
    }
  }
}