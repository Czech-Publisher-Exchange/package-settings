window.cpexWebsiteSettings = {
  formats: {
    skin: {
      contentEl: (document.getElementsByClassName('page')[0]),
      enabled: true,
      hide: [(document.getElementsByClassName('leaderboard-top')[0])]
    },
    slideup: {
      adUnit: 'm-sticky',
      enabled: true
    },
    interscroller: {
      enabled: true
    },
    native: {
      enabled: true,
      templates: {
        'commercial-article-native-detail': "<aside class='inserted-article' style='width: 630px'>\n\t<article class='box-article box-article-mid fl'>\n\t\t<header class='box-article-header fl'>\n\t\t\t<a href='${link}' target='_blank'>\n\t\t\t\t<div class='box-article-image'>\n\t\t\t\t\t<div class='box-article-img ratio ratio4-3'>\n\t\t\t\t\t\t<img src='${img}' width='166' height='125'>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</header>\n\t\t<div class='box-article-right fr'>\n\t\t\t<a class='box-article-title' href='${link}' target='_blank'>\n\t\t\t\t<span class='text-tertiary'>REKLAMA</span>\n\t\t\t\t<h3>${title}</h3>\n\t\t\t\t<p>${desc}</p>\n\t\t\t</a>\n\t\t</div>\n\t</article>\n</aside>",
        'm-commercial-article-native-detail': "<aside class='inserted-article' stylee='width: 630px'>\n\t<article class='box-article box-article-mid fl'>\n\t\t<header class='box-article-header fl'>\n\t\t\t<a href='${link}' target='_blank'>\n\t\t\t\t<div class='box-article-image'>\n\t\t\t\t\t<div class='box-article-img ratio ratio4-3'>\n\t\t\t\t\t\t<img src='${img}' width='166' height='125'>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\t\t</header>\n\t\t<div class='box-article-right fr'>\n\t\t\t<a class='box-article-title' href='${link}' target='_blank' style='margin-bottom: 5px'>\n\t\t\t\t<span class='text-tertiary'>REKLAMA</span>\n\t\t\t\t<h3>${title}</h3>\n\t\t\t</a>\n\t\t\t<a href='${link}' target='_blank' style='font-size: 8pt'>${desc}</a>\n\t\t</div>\n\t</article>\n</aside>"
      }
    },
    vignette: {
      enabled: true,
      adUnit: 'm-vignette'
    }
  },
  website: {
    name: 'ireceptar.cz'
  },
  cmp: {
    enabled: false
  },
  aam: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker'
  },
  headerbidding: {
    adUnits: [{
      code: 'leaderboard-top',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 250],
            [970, 210],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1033636,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 57, 96, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1033736,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 57, 96, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '15783966, 18682461'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_leaderboard_top'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1033642,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1033688,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783970
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_square_1'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'skyscraper-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [160, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1033638,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1033684,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783969
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_skyscraper_1'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard-bottom',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 250],
            [970, 210]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1033650,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 57, 96]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1033696,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 57, 96]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783968
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_leaderboard_bottom'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-leaderboard-bottom',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [320, 100],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 1033720,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 117, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033728,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 117, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783976
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_m_leaderboard_bottom'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 820],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 1033738,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 256, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033724,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 256, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783971
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_m_square_1'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 1033740,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033726,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783975
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_m_square_2'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 1033722,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033730,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15]
        },
        bidderModuleName: 'rubicon'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'commercial-article-native-detail',
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
          siteId: 144588,
          zoneId: 1380462,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1389632,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_commercial-article-native-detail'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 1265852,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1265854,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783974
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_commercial-article-native-detail'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-commercial-article-native-detail',
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
          siteId: 144588,
          zoneId: 1380462,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1389632,
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_m-commercial-article-native-detail'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'wallpaper-1',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 2501444,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 2501500,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26610132
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_wallpaper_1'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }]
  },
  general: {
    onload: "() => {\n      document.getElementsByClassName('wrapper')[0].style.position = 'inherit'\n    }"
  }
}