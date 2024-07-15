window.cpexWebsiteSettings = {
  formats: {
    skin: {
      enabled: true,
      hide: [/*S*/ document.getElementById('leaderboard-top') /*E*/]
    },
    slideup: {
      adUnits: ['m-sticky', 'm-sticky-gallery'],
      enabled: true,
      backgroundEl: /*S*/ document.getElementById('m-sticky') /*E*/
    },
    interscroller: {
      enabled: true
    },
    native: {
      enabled: true,
      templates: {
        generic: "<article class='cpex-native flex flex-col gap-4 group/item w-full mb-8 lg:mb-7 last:mb-0 sm:flex-row'> <a href='${link}' class=' w-full h-auto shrink-0 no-underline relative sm:w-72' style='margin-bottom:25px'>    <div class=' js-article-image w-full'>      <div class=' js-lightbox-wrap lightbox__wrap relative w-auto  -mx-4 sm:mx-0'>        <picture class='shrink-0'> <img src='${img}' alt='${title}'> </picture>        <div class='flex absolute bottom-2 left-2 right-2 p-2 lg:p-0 lg:bottom-6 lg:left-6 lg:right-6'></div>      </div>    </div>  </a>  <div class=' flex flex-col items-start gap-2'>    <div class='flex flex-wrap gap-2'> <a href='#' class='badge badge--link dark:bg-dark-grey-1 no-underline'> Reklama</a> </div>    <h2 class='m-0 !leading-normal text-xl'> <a href='${link}' class=' block pl-1 -ml-1 no-underline group-hover/item:text-primary-2 dark:group-hover/item:text-dark-primary-2 text-inky dark:text-dark-inky '> ${title} </a> </h2>    <div style='text-align:left'> ${desc} </div>  </div></article>"
      },
      adUnitConfig: {
        'm-commercial-article-native-detail': {
          titleLength: 45,
          descLength: 90
        },
        'commercial-article-1-GA': {
          titleLength: 45,
          descLength: 90
        }
      }
    },
    responsive: {
      enabled: true,
      adUnits: ['m-square-1', 'm-square-2', 'm-square-3', 'm-square-4', 'm-seznam-feed', 'm-square-gallery-1', 'm-square-gallery-2', 'm-square-gallery-3', ' m-square-gallery-4', 'm-square-gallery-5', 'm-square-gallery-6', 'm-square-gallery-7', 'm-square-gallery-8', 'm-square-gallery-9', 'm-square-5']
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
        bidder: 'adform',
        params: {
          mid: 1901143,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910198,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931082,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 684623
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '15783966, 18682461'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_leaderboard_top'
        }
      }, {
        bidder: 'sspBC'
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
        bidder: 'adform',
        params: {
          mid: 1910194,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 684624
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783970
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_square_1'
        }
      }, {
        bidder: 'sspBC'
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
            [300, 300],
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
          sizes: [10, 15, 48, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1033684,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700229'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1901139,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931084,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 684625
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783969
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_skyscraper_1'
        }
      }, {
        bidder: 'sspBC'
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
            [970, 210],
            [970, 90]
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
          sizes: [2, 57, 96, 55]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 1033696,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 57, 96, 55]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700232'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910205,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 684626
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783968
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_leaderboard_bottom'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280],
            [480, 320]
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
          sizes: [15, 48, 261, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033724,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700216'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910206,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910195,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931079,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 684628
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783971
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_m_square_1'
        }
      }, {
        bidder: 'sspBC'
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
            [480, 480],
            [480, 320]
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
          sizes: [15, 48, 16, 261, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033726,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16, 261, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700221'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910207,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910196,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 684629
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783975
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_m_square_2'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [320, 150],
            [300, 120],
            [500, 200]
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
          sizes: [15, 48, 60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033730,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5194354'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931861,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931860,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088969
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 22968991
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_high'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ireceptar.cz',
          p: 'sticky',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: 26940
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: 27030
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'commercial-article-native-detail',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [548, 150],
            [336, 280]
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
          sizes: [83, 48, 15, 90, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144590,
          zoneId: 1265854,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 90, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4798519'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910201,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088954
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783974
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_commercial-article-native-detail'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'commercial-article-native-detail',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'ix',
        params: {
          siteId: 1088954
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 15783974
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
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
            [300, 300],
            [300, 250],
            [336, 280],
            [548, 150]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3266576,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 90]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3266578,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 90]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5774632'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910200,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088977
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31924780
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-commercial-article-native-detail',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'ix',
        params: {
          siteId: 1088977
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31924780
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
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
            [300, 250],
            [336, 280]
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
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 2501500,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700230'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1901140,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931083,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 855073
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 26610132
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptar_wallpaper_1'
        }
      }, {
        bidder: 'sspBC'
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
        bidder: 'adform',
        params: {
          mid: 1910197,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 891414
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587756
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptarcz_Skyscraper_2'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280],
            [480, 320]
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
          sizes: [15, 48, 261, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2587422,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719745'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910372,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910365,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 891412
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587758
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptarcz_m_square_3_480x480'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280],
            [480, 320]
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
          sizes: [15, 48, 261, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 2587426,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719744'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910373,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910366,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 891403
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27587759
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_ireceptarcz_m_square_4_480x480'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-seznam-feed',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 480],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3177320,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3177364,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 261, 16, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5650648'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1067533
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31687725
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'seznam-feed',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 300],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3177342,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 25692,
          zoneId: 3177386,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 83, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5650659'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1067540
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31687728
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'centerVignette',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [300, 600],
            [336, 280],
            [320, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3185674,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10, 16, 67]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3185678,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10, 16, 67]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5674716'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931803,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1071038
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31781245
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'commercial-article-1-GA',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'ix',
        params: {
          siteId: 1104280
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31924779
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-1',
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
          siteId: 46270,
          zoneId: 3312628,
          accountId: '10900',
          position: 'atf',
          sizes: [256, 484]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3312630,
          accountId: '10900',
          position: 'atf',
          sizes: [256, 484]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5830632'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1931791,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1931085,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32355497
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'leaderboard-gallery',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 210],
            [970, 250],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3288332,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 96, 57, 230]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808573'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910204,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088955
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361015
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-bottom-1',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 250],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288334,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 15, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808574'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910374,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910364,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088956
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361016
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 820],
            [480, 480],
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288336,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 256, 261, 484]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808575'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910375,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910370,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088957
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361017
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288344,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808579'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910376,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910369,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088961
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361018
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [336, 280],
            [480, 480]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288346,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 261]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808580'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910377,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910368,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088962
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361019
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288348,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808581'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088963
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361020
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-5',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288350,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808582'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088964
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361021
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-6',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288352,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808583'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088965
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361022
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-7',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288354,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808584'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088966
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361023
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-8',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288356,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808585'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088967
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361024
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-9',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288358,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808586'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088968
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361025
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-10',
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
          zoneId: 3288338,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808576'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088958
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361026
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-11',
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
          zoneId: 3288340,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808577'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088959
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361027
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-square-gallery-12',
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
          zoneId: 3288342,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808578'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088960
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361028
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm-sticky-gallery',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [320, 150],
            [300, 120],
            [500, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288362,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 60, 85, 258]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808587'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1938458,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1940200,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088971
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361029
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_high'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ireceptar.cz',
          p: 'sticky_gallery',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: 27039
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: 27099
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHas: 'seznam-hp=1'
      }
    }, {
      code: 'skyscraper-3',
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
          zoneId: 3288366,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 15, 48]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808588'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910202,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088974
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361031
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-2',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3288368,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808589'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910199,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088975
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361032
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-3',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3288370,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5808590'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910203,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088976
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361033
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-4',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3365122,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5906175'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910208,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104262
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32592777
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'wallpaper-5',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [300, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 26460,
          zoneId: 3365144,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 15, 16]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5906186'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910209,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1104269
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32592778
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'm-square-5',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
            [336, 280],
            [480, 320]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3402238,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 16, 101]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5956076'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910371,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1910367,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32733776
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_low'
        }
      }, {
        bidder: 'sspBC'
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
            [500, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3209438,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3209470,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6065983'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1938457,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088970
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31741211
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_high'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ireceptar.cz',
          p: 'sticky_seznamhp',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: 27168
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }, {
      code: 'm-sticky-gallery',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 120],
            [500, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3288360,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6065984'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1940201,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1088972
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32361030
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'vlm_banner_high'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'ireceptar.cz',
          p: 'sticky_gallery_seznamhp',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'performax',
        params: {
          tagid: 27132
        }
      }],
      filter: {
        maxWidth: 1000,
        urlHasNot: 'seznam-hp=1'
      }
    }]
  }
}