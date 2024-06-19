window.cpexWebsiteSettings = {
  website: {
    name: 'poznatsvet.cz'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker'
  },
  headerbidding: {
    enabled: true,
    adUnits: [{
      code: 'skyscraper-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 250],
            [160, 600],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'triplelift',
        params: {
          inventoryCode: 'VLM_poznatsvetcz_skyscraper_1'
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
            [160, 600],
            [300, 300]
          ]
        }
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: 32361075
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
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ document.getElementsByClassName('page')[0] /*E*/,
      contentCSS: ' ',
      generalCSS: '#leaderboard-top {  width: 1000px}'
    },
    interscroller: {
      enabled: true
    },
    native: {
      enabled: true,
      templates: {
        generic: "<article class='flex flex-col gap-4 group/item w-full mb-8 lg:mb-7 last:mb-0 sm:flex-row'> <a class='w-full h-auto shrink-0 sm:w-72 sm:h-48' href='${link}'>    <div class='-mx-4 sm:mx-0'> <img src='${img}' class='object-center mx-auto max-h-screen bg-grey-1 object-cover aspect-3x2 w-full'> </div>  </a>  <div class='flex flex-col items-start gap-2'>    <div class='flex flex-wrap gap-2'> <a class='badge badge--link dark:bg-dark-grey-1 no-underline' href='#'>Reklama</a> </div>    <h2 class='m-0 text-xl sm:text-2xl' style='text-align:left'> <a class='no-underline group-hover/item:text-primary-2 dark:group-hover/item:text-dark-primary-2 text-inky dark:text-dark-inky' id='cXLinkIdltsoa93nn8eopce5' href='https://www.koktejl.cz/tipy-a-rady/tajemstvi-aerolinek-o-kterych-nemaji-pasazeri-ani-poneti/'> ${title} </a> </h2>  </div></article>"
      }
    },
    slideup: {
      enabled: true,
      adUnits: ['m-sticky']
    },
    vignette: {
      enabled: true
    },
    responsive: {
      width: 480,
      height: 480,
      adUnits: ['m-square-1', 'm-square-4', 'm-square-5', 'm-seznam-feed', 'm-square-2', 'm-square-3', 'm-square-gallery-1', 'm-square-gallery-2', 'm-square-gallery-3']
    }
  }
}