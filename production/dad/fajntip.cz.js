window.cpexWebsiteSettings = {
  website: {
    name: 'fajntip.cz'
  },
  adserver: {
    adapter: 'googletag'
  },
  headerbidding: {
    adUnits: [{
      code: 'da_leaderboard_top',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 90],
            [970, 210]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 278450,
          zoneId: 3003344,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96]
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30644642
        }
      }]
    }]
  },
  cmp: {
    enabled: false
  },
  formats: {
    skin: {
      backgroundEl: /*S*/ () => { return document.getElementById('branding-container') } /*E*/ ,
      generalCSS: '#cpex-skin { margin-top: 60px }',
      hide: [ /*S*/ () => { return document.getElementsByClassName('banner-top')[0] } /*E*/ ]
    },
    slideup: {
      defaultHeight: '3'
    }
  }
}