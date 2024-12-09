window.cpexWebsiteSettings = {
  formats: {
    skin: {
      backgroundEl: /*S*/ () => { return document.getElementById('main') } /*E*/,
      contentEl: /*S*/ () => { return document.getElementsByClassName('m-bg-4')[0] } /*E*/,
      enabled: true,
      hide: [/*S*/ () => { return document.getElementById('r-leaderboard-hp') } /*E*/],
      contentCSS: ' '
    },
    interscroller: {
      enabled: true,
      offset: 44
    },
    slideup: {
      enabled: true,
      adUnits: ['m_sticky', 'm_sticky_foto']
    },
    vignette: {
      enabled: true,
      adUnits: ['m_vignete']
    },
    native: {
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
  },
  website: {
    name: 'idnes.cz_hry'
  },
  headerbidding: {
    adUnits: [{
      code: 'branding',
      mediaTypes: {
        banner: {
          sizes: [
            [2000, 1400],
            [998, 200],
            [728, 90],
            [970, 210],
            [970, 90],
            [2000, 1200],
            [1920, 1080]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1147354,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55, 265]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1147356,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55, 265]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415598'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411950,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539635,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1567687,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 656792
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156322
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108619,
          tagId: 'sas_108619'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158148,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: '300x250',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1140936,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1140938,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4416060'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411945,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539629,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654745,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650388
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221070,
          pageId: 204817
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156307
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108743,
          tagId: 'sas_108743'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158149,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'halfpagead',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250],
            [160, 600],
            [250, 250],
            [120, 600],
            [250, 360],
            [250, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1147572,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1147612,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415604'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411956,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539636,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654748,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650390
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221071,
          pageId: 204818
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156324
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x600',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108618,
          tagId: 'sas_108618'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158150,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'halfpagead_spodni',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250],
            [160, 600],
            [250, 250],
            [120, 600],
            [250, 360],
            [250, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1148590,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1148630,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415605'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411963,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539627,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654752,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650391
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221072,
          pageId: 204819
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156328
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x600_spodni',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108739,
          tagId: 'sas_108739'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158151,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'halfpagead_rubrika',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250],
            [160, 600],
            [250, 250],
            [120, 600],
            [250, 360],
            [250, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1906594,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1906698,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415602'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634436,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539625,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654750,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650393
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221073,
          pageId: 204820
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156326
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x600_rubrika',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108740,
          tagId: 'sas_108740'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158152,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'halfpagead_rubrika_spodni',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250],
            [160, 600],
            [250, 250],
            [120, 600],
            [250, 360],
            [250, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1906790,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1906848,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415603'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634437,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539626,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654751,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650375
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221074,
          pageId: 204821
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156327
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x600_rubrika_spodni',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108741,
          tagId: 'sas_108741'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158153,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'halfpagead_fotogalerie',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250],
            [160, 600],
            [250, 250],
            [120, 600],
            [250, 360],
            [250, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1906888,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1908204,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415601'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634435,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539623,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654749,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650374
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221075,
          pageId: 204822
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156325
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x600_fotogalerie',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108742,
          tagId: 'sas_108742'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158154,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1145536,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1145534,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415611'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411974,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539637,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654754,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650376
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221076,
          pageId: 204823
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156329
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108759,
          tagId: 'sas_108759'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158155,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_clankovy',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1152568,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1152630,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415609'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634440,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539631,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654755,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650392
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221077,
          pageId: 204824
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156331
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_clankovy',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108764,
          tagId: 'sas_108764'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158156,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_vybrali',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1977104,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1977932,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415616'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634448,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539644,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654764,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 656794
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221078,
          pageId: 204825
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156357
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_vybrali',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108779,
          tagId: 'sas_108779'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158157,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_souvisejici',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1977102,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1977930,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415617'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634447,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539643,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654763,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 656793
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221079,
          pageId: 204826
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156355
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_souvisejici',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108778,
          tagId: 'sas_108778'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158158,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
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
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1148302,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 10, 484, 261, 48, 9, 8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1148182,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 10, 484, 261, 48, 9, 8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415608'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411976,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539630,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654765,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650387
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221080,
          pageId: 204827
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156358
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: 'interscroller',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108767,
          tagId: 'sas_108767'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158159,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_paticka',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1148980,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1149018,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415612'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411977,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1540100,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654767,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650383
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221081,
          pageId: 204828
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156362
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_paticka',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108768,
          tagId: 'sas_108768'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158160,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 250],
            [500, 200],
            [320, 100],
            [970, 250],
            [336, 280],
            [320, 50],
            [728, 90],
            [970, 310],
            [480, 480],
            [300, 300],
            [480, 300],
            [998, 200],
            [300, 50],
            [300, 100],
            [970, 210],
            [750, 200],
            [750, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1149080,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 258, 117, 57, 16, 43, 2, 94, 261, 48, 83, 259, 44, 19, 96, 40, 39]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1149082,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 258, 117, 57, 16, 43, 2, 94, 261, 48, 83, 259, 44, 19, 96, 40, 39]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5604804'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411984,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539646,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654768,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1064291
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221082,
          pageId: 204829
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156363
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: 'sticky',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108761,
          tagId: 'sas_108761'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158161,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'wallpaper',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 310],
            [728, 90],
            [970, 250],
            [970, 210],
            [500, 200],
            [300, 300],
            [480, 300],
            [336, 280],
            [750, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1154074,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 2, 57, 96, 258, 48, 83, 16, 40]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1154076,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 2, 57, 96, 258, 48, 83, 16, 40]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415599'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411964,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539647,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654770,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650382
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156370
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '970x310',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108752,
          tagId: 'sas_108752'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158162,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'widesquare',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [250, 250],
            [300, 250],
            [480, 480],
            [336, 280],
            [200, 200],
            [320, 50]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1142436,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1142438,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415614'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411967,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539638,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654771,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650389
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221084,
          pageId: 204831
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156373
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '480x300',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108753,
          tagId: 'sas_108753'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158163,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'widesquare_spodni',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [250, 250],
            [300, 250],
            [480, 480],
            [336, 280],
            [200, 200],
            [320, 50]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1940154,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1943066,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415600'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1411968,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539628,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654802,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650379
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221085,
          pageId: 204832
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156376
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '480x300_spodni',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108754,
          tagId: 'sas_108754'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158164,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'widesquare_clankovy',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [250, 250],
            [300, 250],
            [480, 480],
            [336, 280],
            [200, 200],
            [320, 50]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1143142,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1143140,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415607'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634455,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539624,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654772,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650380
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221086,
          pageId: 204833
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156375
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '480x300_clankovy',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108758,
          tagId: 'sas_108758'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158165,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'branding_fotogalerie',
      mediaTypes: {
        banner: {
          sizes: [
            [2000, 1400],
            [998, 200],
            [728, 90],
            [970, 210],
            [970, 90],
            [2000, 1200],
            [1920, 1080]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 2157456,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55, 265]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 2157458,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55, 265]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415597'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634461,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539642,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654747,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 714415
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156323
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: 'branding_fotogalerie',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108757,
          tagId: 'sas_108757'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158166,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_clankovy_opak1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1977096,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1977924,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415618'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634441,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539639,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654757,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650385
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221088,
          pageId: 204835
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156333
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_clankovy_opak_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108775,
          tagId: 'sas_108775'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158167,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_clankovy_opak2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1977098,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1977926,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415619'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634442,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539640,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654759,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650384
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221089,
          pageId: 204836
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156342
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_clankovy_opak_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108776,
          tagId: 'sas_108776'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158168,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_clankovy_opak3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1977100,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1977928,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415620'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634443,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539641,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654758,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650386
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221090,
          pageId: 204837
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156346
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_clankovy_opak_3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108777,
          tagId: 'sas_108777'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158169,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_foto_end',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1149736,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1149740,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415613'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634444,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539634,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654756,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650377
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221091,
          pageId: 204838
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156347
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_foto_end',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108765,
          tagId: 'sas_108765'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158170,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_foto_mid',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1154402,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1154404,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415615'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634445,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539633,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654761,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650381
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221092,
          pageId: 204839
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156349
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_foto_mid',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108766,
          tagId: 'sas_108766'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158171,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_foto_start',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1154406,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1154408,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4415610'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634446,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1539632,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654762,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 650378
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221093,
          pageId: 204840
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156351
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_foto_start',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108760,
          tagId: 'sas_108760'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158172,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
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
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 2149610,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 10, 484, 261, 48, 9, 8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 2149612,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 10, 484, 261, 48, 9, 8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641088'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634459,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1658876,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654766,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 714396
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221094,
          pageId: 204841
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27156359
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: 'interscroller_foto_scroll',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108783,
          tagId: 'sas_108783'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158173,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'halfpagead_lazyload',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250],
            [160, 600],
            [250, 250],
            [120, 600],
            [250, 360],
            [250, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 2592642,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 2592644,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4719793'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634463,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1658877,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654753,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 891438
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221095,
          pageId: 204842
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27663125
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x600_lazyload',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 131199,
          tagId: 'sas_131199'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158174,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
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
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 2653044,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 10, 484, 261, 48, 9, 8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 2653088,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 10, 484, 261, 48, 9, 8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4800011'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634466,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1658878,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654774,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 919002
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221096,
          pageId: 204843
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 28185829
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: 'interscroller_foto_scroll_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108784,
          tagId: 'sas_108784'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158175,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'widesquare_clankovy2',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [250, 250],
            [300, 250],
            [480, 480],
            [336, 280],
            [200, 200],
            [320, 50]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 2672392,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4830485'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1634467,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1658875,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1654775,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 927745
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221097,
          pageId: 204844
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 28291623
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '480x300_clankovy_2',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 131197,
          tagId: 'sas_131197'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158176,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_vignete',
      mediaTypes: {
        banner: {
          sizes: [
            [720, 1280],
            [480, 820],
            [300, 600],
            [300, 250],
            [480, 480],
            [300, 300],
            [480, 300],
            [160, 600],
            [250, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 2795920,
          accountId: '10900',
          position: 'atf',
          sizes: [484, 256, 10, 15, 261, 48, 83, 9, 14, 16]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 2800818,
          accountId: '10900',
          position: 'atf',
          sizes: [484, 256, 10, 15, 261, 48, 83, 9, 14, 16]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5111669'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1716529,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1727186,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1841831,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 958827
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 29858811
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108774,
          tagId: 'sas_108774'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158177,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'halfpagead_rubrika_lazyload',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [300, 300],
            [300, 250],
            [160, 600],
            [250, 250],
            [120, 600],
            [250, 360],
            [250, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 2866828,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 3275000,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 48, 15, 9, 14, 8, 32, 179]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5171932'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1679059,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954694,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 992700
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221099,
          pageId: 204846
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30026264
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x600_rubrika_lazyload',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 131200,
          tagId: 'sas_131200'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158178,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_foto_mid2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 2877598,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5191807'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1691342,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954699,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 992731
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221100,
          pageId: 204847
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30130343
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_foto_mid2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 131201,
          tagId: 'sas_131201'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158179,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_foto_mid3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 2877600,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5191808'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1691343,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954701,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 992732
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221101,
          pageId: 204848
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30130346
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_foto_mid3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 131202,
          tagId: 'sas_131202'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158180,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_300x250_foto_mid4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 480],
            [300, 50],
            [300, 100],
            [300, 150],
            [200, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 2877602,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 261, 44, 19, 13]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5191809'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1691341,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954700,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 992733
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221102,
          pageId: 204849
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30130348
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '300x250_foto_mid4',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 131203,
          tagId: 'sas_131203'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158181,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'nativ',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 3047556,
          accountId: '10900',
          position: 'atf',
          sizes: [600]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1782792,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954710,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1099263
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30878651
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418807
        }
      }]
    }, {
      code: 'm_nativ',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 3047558,
          accountId: '10900',
          position: 'atf',
          sizes: [600]
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1782791,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954707,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1099276
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30878652
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418807
        }
      }]
    }, {
      code: 'widesquare_clankovy3',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [300, 300],
            [250, 250],
            [300, 250],
            [480, 480],
            [336, 280],
            [200, 200],
            [320, 50]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 3038996,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 3274978,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 48, 14, 15, 261, 16, 13, 43]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5409068'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1781467,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954698,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1038405
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 221105,
          pageId: 204852
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30850656
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'bonusweb.idnes.cz',
          p: '480x300_clankovy_3',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 131198,
          tagId: 'sas_131198'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158184,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'm_sticky_foto',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 250],
            [500, 200],
            [320, 100],
            [970, 250],
            [336, 280],
            [320, 50],
            [728, 90],
            [970, 310],
            [580, 480],
            [300, 300],
            [480, 300],
            [998, 200],
            [300, 50],
            [300, 100],
            [970, 210],
            [336, 280],
            [750, 200],
            [750, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 3210332,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 258, 117, 57, 16, 43, 2, 94, 48, 83, 259, 44, 19, 96, 16, 40, 39]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5697974'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1848888,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954697,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1072424
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 211358,
          pageId: 195824
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 31818876
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '7LTOeORMcRSgGMug4SXQ',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418806
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 650958,
          pageId: 1966138,
          formatId: 108782,
          tagId: 'sas_108782'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3158185,
          networkId: 131
        }
      }, {
        bidder: 'sspBC'
      }]
    }, {
      code: 'outstream',
      mediaTypes: {
        video: {
          playerSize: [
            [600, 400]
          ],
          type: 'outstream'
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 354590,
          zoneId: 3415332,
          accountId: '10900',
          position: 'atf',
          sizes: [203]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6015560'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1917486,
          rcur: 'USD'
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2024478,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1114166
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32992456
        }
      }],
      video: {
        divId: 'outstream'
      }
    }, {
      code: 'm_nativ_clankovy',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 3450168,
          accountId: '10900',
          position: 'atf',
          sizes: [600]
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954695,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1118687
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 33055052
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418807
        }
      }]
    }, {
      code: 'm_nativ_clankovy_horni',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 3450208,
          accountId: '10900',
          position: 'atf',
          sizes: [600]
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954708,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1118706
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 33055046
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418807
        }
      }]
    }, {
      code: 'm_nativ_clankovy_spodni',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 3450248,
          accountId: '10900',
          position: 'atf',
          sizes: [600]
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954696,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1118726
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 33055056
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418807
        }
      }]
    }, {
      code: 'nativ_clankovy',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 3450284,
          accountId: '10900',
          position: 'atf',
          sizes: [600]
        }
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 1954709,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 1118744
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 33055045
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418807
        }
      }]
    }]
  }
}