window.cpexWebsiteSettings = {
  website: {
    name: 'onlajny.com'
  },
  headerbidding: {
    adUnits: [{
      code: '750x100',
      mediaTypes: {
        banner: {
          sizes: [
            [750, 100],
            [728, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1228786,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1228788,
          accountId: '10900',
          position: 'atf'
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641434'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1189763
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27158083
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'sspBC'
      }]
    }]
  },
  formats: {
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnits: ['m_sticky']
    }
  }
}