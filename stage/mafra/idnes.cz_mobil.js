window.cpexWebsiteSettings = {
  website: {
    name: 'idnes.cz_mobil'
  },
  headerbidding: {
    adUnits: [{
      code: 'nativ',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 3002100,
          accountId: '10900',
          position: 'atf',
          sizes: [221]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1743205,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30293505
        }
      }]
    }, {
      code: 'm_nativ',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 3002104,
          accountId: '10900',
          position: 'atf',
          sizes: [221]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1743207,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30293506
        }
      }]
    }],
    prebidPath: 'https://cdn.cpex.cz/hb/prebid/v8/prebid.js'
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ document.getElementsByClassName('m-bg-4')[0] /*E*/ ,
      backgroundEl: /*S*/ document.getElementById('main') /*E*/ ,
      contentCSS: ' ',
      hide: [ /*S*/ document.getElementById('r-leaderboard-hp') /*E*/ ]
    },
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnits: ['m_sticky']
    },
    vignette: {
      enabled: true,
      adUnits: ['m_vignete']
    },
    native: {
      enabled: true
    }
  }
}