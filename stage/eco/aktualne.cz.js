window.cpexWebsiteSettings = {
  website: {
    name: 'aktualne.cz',
    note: 'integrace: FED-497'
  },
  headerbidding: {
    adUnits: [{
      code: 'mediumrectangle-mob-pos1',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 820],
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 353316,
          zoneId: 2186692,
          accountId: '10900',
          position: 'atf',
          sizes: [256, 10]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 353318,
          zoneId: 2186682,
          accountId: '10900',
          position: 'atf',
          sizes: [256, 10]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic_eco_hb',
        params: {
          publisherId: '161532',
          adSlot: '4344931'
        },
        bidderModuleName: 'pubmatic'
      }, {
        bidder: 'knowlimits-adform',
        params: {
          mid: 1840842,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1869772,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'adform',
        params: {
          mid: 1109053,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 759651
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 211496,
          pageId: 195961
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 28672132
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 'eco_banner_low'
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 'ECO_aktualnecz_mediumrectangle_mob_pos1'
        }
      }]
    }],
    currency: 'USD'
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ document.getElementsByClassName('page')[0] /*E*/,
      offsetScroll: true
    },
    interscroller: {
      enabled: true,
      adUnits: ['sas-injected-1'],
      offset: 54
    },
    slideup: {
      adUnits: ['sas-special4'],
      enabled: true,
      backgroundEl: /*S*/ document.getElementById('reklama-special4') /*E*/
    },
    responsive: {
      width: 480,
      height: 480,
      adUnits: ['sas-injected-1', 'sas-injected-2', 'sas-injected-3'],
      enabled: true
    }
  },
  general: {
    errorPath: 'https://73f2bd72d0d2477ab2f976d6098fe246@o530000.ingest.sentry.io/4504531846365184'
  }
}