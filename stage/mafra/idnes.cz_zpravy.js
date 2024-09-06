window.cpexWebsiteSettings = {
  website: {
    name: 'idnes.cz_zpravy'
  },
  headerbidding: {
    adUnits: [{
      code: 'm_branding',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 820],
            [300, 600],
            [720, 1280],
            [768, 1230],
            [480, 480],
            [300, 300],
            [160, 600],
            [120, 600],
            [338, 280]
          ]
        }
      },
      bids: [{
        bidder: 'connectad',
        params: {
          siteId: 3131476,
          networkId: 131
        }
      }]
    }, {
      code: 'm_branding_foto',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 820],
            [300, 600],
            [720, 1280],
            [768, 1230],
            [480, 480],
            [300, 300],
            [160, 600],
            [120, 600],
            [338, 280]
          ]
        }
      },
      bids: [{
        bidder: 'connectad',
        params: {
          siteId: 3131490,
          networkId: 131
        }
      }]
    }, {
      code: 'm_branding_foto2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 820],
            [300, 600],
            [720, 1280],
            [768, 1230],
            [480, 480],
            [300, 300],
            [160, 600],
            [120, 600],
            [338, 280]
          ]
        }
      },
      bids: [{
        bidder: 'connectad',
        params: {
          siteId: 3131492,
          networkId: 131
        }
      }]
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ document.getElementsByClassName('m-bg-4')[0] /*E*/,
      backgroundEl: /*S*/ document.getElementById('main') /*E*/,
      contentCSS: ' ',
      hide: [/*S*/ document.getElementById('r-leaderboard-hp') /*E*/]
    },
    interscroller: {
      enabled: true,
      offset: 44
    },
    slideup: {
      enabled: true,
      adUnits: ['m_sticky', 'm_sticky_foto']
    },
    responsive: {
      width: 480,
      height: 480
    },
    vignette: {
      enabled: true,
      adUnits: ['m_vignete']
    },
    native: {
      enabled: true,
      adUnitConfig: {
        nativ: {
          titleLength: 56,
          descLength: 133
        },
        m_nativ: {
          titleLength: 56,
          descLength: 133
        }
      }
    }
  }
}