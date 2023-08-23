window.cpexWebsiteSettings = {
  website: {
    name: 'nhl.cz'
  },
  adserver: {
    adapter: 'googletag'
  },
  headerbidding: {
    adUnits: [{
      code: 'da_nhl_desktop_top_banner_998x200_2x1',
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
          zoneId: 3003340,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5342291'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30644608
        }
      }]
    }]
  },
  cmp: {
    enabled: false
  },
  formats: {
    skin: {
      backgroundEl: /*S*/ document.getElementById('branding-container') /*E*/ ,
      generalCSS: '#cpex-skin { margin-top: 60px }',
      hide: [ /*S*/ document.getElementsByClassName('banner-top')[0] /*E*/ ]
    },
    slideup: {
      defaultHeight: '3'
    }
  },
  aam: {
    settings: {
      publisher: 'dad'
    }
  }
}