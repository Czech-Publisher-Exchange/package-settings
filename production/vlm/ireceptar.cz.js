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
      adUnits: ['m-square-1', 'm-square-2', 'm-square-3', 'm-square-4', 'm-seznam-feed']
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
      code: 'm-square-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [300, 300],
            [480, 480],
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
          sizes: [15, 48, 261, 101]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033724,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 48, 261, 101]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4700216'
        }
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
            [300, 250],
            [300, 300]
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
          sizes: [60, 85, 258, 15, 48]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 1033730,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 85, 258, 15, 48]
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
            [336, 280]
          ]
        },
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 46270,
          zoneId: 3266576,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 600]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3266578,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 16, 600]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5774632'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31924780
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
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
          networkId: 11172
        }
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
          networkId: 11172
        }
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
            [336, 280]
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
          sizes: [48, 15, 10, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 46272,
          zoneId: 3185678,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 10, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5674716'
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
        bidder: 'appnexus',
        params: {
          placementId: 31924779
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
          adSlot: '5819728'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32355497
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }]
  }
}