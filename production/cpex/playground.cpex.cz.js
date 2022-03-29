window.cpexWebsiteSettings = {
  website: {
    name: 'cpex.cz'
  },
  headerbidding: {
    adUnits: [{
      code: 'rectangle-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '1713098',
          position: 'atf',
          sizes: ['48', '15', '14']
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
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '140646',
          zoneId: '1713100',
          position: 'atf',
          sizes: ['48', '15', '14']
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
          sizes: [
            [728, 90],
            [2000, 1400]
          ]
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
          sizes: [
            [548, 150]
          ]
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
          sizes: [
            [480, 820],
            [720, 1280]
          ]
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
          sizes: [
            [320, 150],
            [300, 250],
            [548, 150]
          ]
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
          sizes: [
            [300, 250],
            [548, 150]
          ]
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
    }]
  },
  adserver: {
    loadPrerequisites: true,
    delayCall: 100,
    allowedSSPs: {
      pubmatic: 1,
      index: 3,
      magnite: 4,
      xandr: 26
    }
  },
  formats: {
    skin: {
      backgroundEl: (document.body),
      contentEl: (document.getElementById('routify-app')),
      hide: [(document.getElementById('leaderboard-1'))]
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
        'native-2': "\n          <style>\n            .cpex-native.individual { background-color: #c9b3ff }\n            .cpex-native a { display: flex; text-decoration: none; color: inherit }\n            .cpex-native img { width: 200px; object-fit: cover }\n            .cpex-native .text { padding-left: 20px }\n          </style>\n          <div class='cpex-native article individual'>\n            <a href='${link}' target='_blank' >\n              <img src='${img}'>\n              <div class='text'>\n                <h2>Custom template for an adUnit</h2>\n                <p>You use any custom HTML, CSS and content for a specific adUnit name. It overrides anything present in template properties of the native settings.</p>\n              </div>\n            </a>\n          </div>"
      }
    }
  },
  aam: {
    settings: {
      publisher: 'cpex'
    }
  }
}
