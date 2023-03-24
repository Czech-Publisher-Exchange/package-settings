window.cpexWebsiteSettings = {
  website: {
    name: 'cpex.cz'
  },
  general: {
    onload: (() => { document.getElementById('svelte').style.position = 'inherit' })
  },
  headerbidding: {
    prebidPath: 'https://cdn.cpex.cz/stage/hb/prebid/v7.35/prebid.js',
    prebidDebug: true,
    analytics: ['id5Analytics', 'cpexAnalytics'],
    adUnits: [{
      code: 'rectangle-1',
      mediaTypes: {
        banner: {
          sizes: [[250, 250], [300, 250], [300, 300], [480, 480], [300, 600]]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '1713098',
          position: 'atf',
          sizes: ['48', '15', '14', '10', '261']
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '2918143'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '19286498'
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: 'w6O8SDnYNMT7Cb6AHGZf',
          region: 'prebid-eu'
        }
      }]
    }, {
      code: 'rectangle-2',
      mediaTypes: {
        banner: {
          sizes: [[250, 250], [300, 300], [300, 250], [480, 480], [300, 600]]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '1713100',
          position: 'atf',
          sizes: ['48', '15', '14', '10', '261']
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '2918144'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '19286538'
        }
      }]
    }, {
      code: 'leaderboard-1',
      mediaTypes: {
        banner: {
          sizes: [[728, 90], [2000, 1400]]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '1960456',
          position: 'atf',
          sizes: ['2', '230']
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '21341120'
        }
      }]
    }, {
      code: 'native-2',
      mediaTypes: {
        banner: {
          sizes: [[548, 150]]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '2062058',
          position: 'atf',
          sizes: ['90']
        }
      }]
    }, {
      code: 'interscroller-1',
      mediaTypes: {
        banner: {
          sizes: [[480, 820], [720, 1280]]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '2044716',
          position: 'atf',
          sizes: ['256']
        }
      }]
    }, {
      code: 'slideup-1',
      mediaTypes: {
        banner: {
          sizes: [[320, 150], [300, 250], [548, 150]]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '2087210',
          position: 'atf',
          sizes: ['60', '15', '90']
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '21779753'
        }
      }]
    }, {
      code: 'vignette-1',
      mediaTypes: {
        banner: {
          sizes: [[300, 250], [548, 150]]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '2096284',
          position: 'atf',
          sizes: ['15', '90']
        }
      }]
    }, {
      code: 'video-1',
      mediaTypes: {
        video: {
          mimes: ['video/mp4', 'video/x-ms-wmv'],
          protocols: [1, 2, 3, 4, 5, 6, 7, 8],
          linearity: 2,
          api: [1, 2],
          context: 'instream',
          playerSize: [640, 480]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '91228',
          zoneId: '429500',
          video: {
            language: 'en'
          }
        }
      }]
    }]
  },
  adserver: {
    loadPrerequisites: true,
    delayCall: 100,
    defineSlots: [{
      elementId: 'rectangle-1',
      sizes: [[250, 250], [300, 250], [300, 300], [480, 480], [300, 600]],
      path: '/22794528025/playground_rectangle-1'
    }, {
      elementId: 'rectangle-2',
      sizes: [[250, 250], [300, 300], [300, 250], [480, 480], [300, 600]],
      path: '/22794528025/playground_rectangle-2'
    }, {
      elementId: 'leaderboard-1',
      sizes: [[728, 90], [2000, 1400]],
      path: '/22794528025/playground_leaderboard-1'
    }, {
      elementId: 'native-1',
      sizes: [[548, 150]],
      path: '/22794528025/playground_native-1'
    }, {
      elementId: 'native-2',
      sizes: [[548, 150]],
      path: '/22794528025/playground_native-2'
    }, {
      elementId: 'interscroller-1',
      sizes: [[480, 820], [720, 1280]],
      path: '/22794528025/playground_interscroller-1'
    }, {
      elementId: 'slideup-1',
      sizes: [[320, 150], [300, 250], [548, 150]],
      path: '/22794528025/playground_slideup-1'
    }, {
      elementId: 'vignette-1',
      sizes: [[300, 250], [548, 150]],
      path: '/22794528025/playground_vignette-1'
    }, {
      elementId: 'video-1',
      sizes: [640, 480],
      path: '/22794528025/playground_video-1'
    }],
    gamId: '22794528025/playground_'
  },
  formats: {
    skin: {
      backgroundEl: document.body,
      contentEl: document.getElementById('svelte'),
      contentCSS: 'position: relative; width: 1080px; margin: auto; margin-top: 200px',
      hide: [document.getElementById('leaderboard-1')]
    },
    responsive: {
      adUnits: ['responsive-1'],
      width: 480,
      height: 480
    },
    slideup: {
      adUnit: 'slideup-1',
      emptyHeight: 50
    },
    vignette: {
      adUnit: 'vignette-1'
    },
    native: {
      templates: {
        generic: "\n          <style>\n            .cpex-native a { display: flex; text-decoration: none; color: inherit }\n            .cpex-native img { width: 200px; object-fit: cover }\n            .cpex-native .text { padding-left: 20px }\n          </style>\n          <div class='cpex-native article'>\n            <a href='${link}' target='_blank' >\n              <img src='${img}'>\n              <div class='text'>\n                <h2>${title}</h2>\n                <p>${desc}</p>\n              </div>\n            </a>\n          </div>",
        'native-1': "\n          <style>\n            .cpex-native.individual { background-color: #c9b3ff }\n            .cpex-native a { display: flex; text-decoration: none; color: inherit }\n            .cpex-native img { width: 200px; object-fit: cover }\n            .cpex-native .text { padding-left: 20px }\n          </style>\n          <div class='cpex-native article individual'>\n            <a href='${link}' target='_blank' >\n              <img src='${img}'>\n              <div class='text'>\n                <h2>${title}</h2>\n                <p>${desc}</p>\n              </div>\n            </a>\n          </div>",
        'native-2': 'native-1'
      }
    }
  },
  aam: {
    settings: {
      publisher: 'cpex'
    }
  }
}
