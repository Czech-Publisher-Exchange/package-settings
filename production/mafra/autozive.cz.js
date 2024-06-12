window.cpexWebsiteSettings = {
  website: {
    name: 'autozive.cz'
  },
  formats: {
    slideup: {
      adUnits: ['m_sticky']
    },
    skin: {
      generalCSS: '#r-leaderboardhp {  height: 200px;  margin-bottom: 0px;}#page {  z-index:1;}',
      zIndex: 1
    }
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
          zoneId: 3134312,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55, 265]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5545919'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1815173,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31440167
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
          d: 'mafra.autozive.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }]
    }]
  }
}