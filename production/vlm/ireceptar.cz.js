window.cpexWebsiteSettings = {
  formats: {
    skin: {
      enabled: true,
      hide: [ /*S*/ document.getElementById('leaderboard-top') /*E*/ ]
    },
    slideup: {
      adUnits: ['m-sticky'],
      enabled: true,
      backgroundEl: /*S*/ document.getElementById('m-sticky') /*E*/
    },
    interscroller: {
      enabled: true
    },
    native: {
      enabled: true,
      templates: {
        'commercial-article-native-detail': "<aside class='inserted-article' style='width: 630px'>\t<article class='box-article box-article-mid fl'>\t\t<header class='box-article-header fl'>\t\t\t<a href='${link}' target='_blank' rel='sponsored noopener'>\t\t\t\t<div class='box-article-image'>\t\t\t\t\t<div class='box-article-img ratio ratio4-3'>\t\t\t\t\t\t<img src='${img}' width='166' height='125'>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</a>\t\t</header>\t\t<div class='box-article-right fr'>\t\t\t<a class='box-article-title' href='${link}' target='_blank' rel='sponsored noopener'>\t\t\t\t<span class='text-tertiary'>REKLAMA</span>\t\t\t\t<h3>${title}</h3>\t\t\t\t<p>${desc}</p>\t\t\t</a>\t\t</div>\t</article></aside>",
        'm-commercial-article-native-detail': "<aside class='inserted-article' style='width: 630px'>\t<article class='box-article box-article-mid fl'>\t\t<header class='box-article-header fl'>\t\t\t<a href='${link}' target='_blank' rel='sponsored noopener'>\t\t\t\t<div class='box-article-image'>\t\t\t\t\t<div class='box-article-img ratio ratio4-3'>\t\t\t\t\t\t<img src='${img}' width='166' height='125'>\t\t\t\t\t</div>\t\t\t\t</div>\t\t\t</a>\t\t</header>\t\t<div class='box-article-right fr'>\t\t\t<a class='box-article-title' href='${link}' target='_blank' style='margin-bottom: 5px' rel='sponsored noopener'>\t\t\t\t<span class='text-tertiary'>REKLAMA</span>\t\t\t\t<h3>${title}</h3>\t\t\t</a>\t\t\t<a href='${link}' target='_blank' style='font-size: 8pt'>${desc}</a>\t\t</div>\t</article></aside>",
        'commercial-article-1-GA': "<article class='cpex-native box-article box-article-mid'>  <div class='box-article-header'>    <div class='box-article-image'>      <a href='${link}' tabindex='-1' rel='noopener sponsored' target='_blank' rel='sponsored noopener'>        <div class='box-article-img ratio ratio4-3'>          <img height='216' alt='reklama' loading='lazy' src='${img}'>        </div>      </a>    </div>  </div>  <div class='box-article-right'>    <div class='box-article-category'>Reklama</div>    <a href='${link}' tabindex='-1' rel='noopener sponsored' class='box-article-text-wrap' target='_blank' rel='sponsored noopener'>      <h2 class='box-article-title'>${title}</h2>      <blockquote class='box-article-excerpt'>${desc}</blockquote>    </a>  </div></article>"
      }
    },
    responsive: {
      enabled: true,
      adUnits: ['m-square-1', 'm-square-2', 'm-square-3', 'm-square-4']
    }
  },
  website: {
    name: 'ireceptar.cz'
  },
  cmp: {
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700228'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '15783966, 18682461'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700231'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783970
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700229'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783969
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700232'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783968
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
            [300, 300],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2587436,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2588676,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700234'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783976
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700216'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783971
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
            [300, 300],
            [336, 280],
            [480, 480]
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
          sizes: [15, 48, 16, 261]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033726,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 261]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700221'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783975
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
            [300, 120],
            [500, 200],
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
          sizes: [60, 85, 258, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033730,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5194354'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22968991
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [548, 150]
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
          sizes: [83, 48, 15, 90]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1265854,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 90]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4798519'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783974
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700230'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26610132
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
    }, {
      code: 'skyscraper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 2574984,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 2574986,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719746'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587756
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptarcz_Skyscraper_2'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2584370,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 83]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2587422,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 83]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719745'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587758
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptarcz_m_square_3_480x480'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [480, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 2587424,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 83]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2587426,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 83]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719744'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587759
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptarcz_m_square_4_480x480'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }]
  }
}