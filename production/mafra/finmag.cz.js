window.cpexWebsiteSettings = {
  headerbidding: {
    adUnits: [{
      code: 'm_sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 250],
            [500, 200],
            [320, 100],
            [970, 250],
            [336, 280],
            [320, 50],
            [728, 90],
            [970, 310],
            [480, 480],
            [300, 300],
            [480, 300],
            [998, 200],
            [300, 50],
            [300, 100],
            [970, 210],
            [750, 200],
            [750, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 3667286,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6575564'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 2041017,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2041100,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2041018,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1162336
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3167650,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }],
    enabled: true
  },
  formats: {
    slideup: {
      enabled: true,
      adUnits: ['m_sticky']
    }
  }
}