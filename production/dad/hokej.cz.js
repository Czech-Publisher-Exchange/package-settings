window.cpexWebsiteSettings = {
  website: {
    name: 'hokej.cz'
  },
  adserver: {
    adapter: 'googletag'
  },
  headerbidding: {
    adUnits: [{
      code: 'da_hokej_desktop_top_banner_998x200_2x1',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 90],
            [970, 210],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 278450,
          zoneId: 3003338,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 55, 96, 230]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5342290'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30644596
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
      contentEl: /*S*/ document.getElementsByClassName('content-wrapper')[0] /*E*/ ,
      enabled: true,
      offset: 68,
      generalCSS: '#cpex-skin { margin-top: 60px }',
      hide: [ /*S*/ document.getElementsByClassName('banner-top')[0] /*E*/ ],
      offsetScroll: true
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