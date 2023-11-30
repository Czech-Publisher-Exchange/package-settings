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
          zoneId: 3134312,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 2, 96, 55]
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
        bidder: 'r2b2',
        params: {
          d: 'mafra.autozive.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }]
    }, {
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
          zoneId: 3134314,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 10, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5545920'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1815175,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31421971
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'mafra.autozive.cz',
          p: 'interscroller',
          m: 1,
          g: 'hb'
        }
      }]
    }]
  }
}