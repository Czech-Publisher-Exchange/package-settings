window.cpexWebsiteSettings = {
  website: {
    name: 'idnes.cz_kino'
  },
  aam: {
    settings: {
      publisher: 'mafra'
    }
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
            [970, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1147382,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1147384,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 259, 2, 96, 55]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641284'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 878578
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27157314
        }
      }]
    }, {
      code: 'm_300x250',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1145568,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1145566,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641285'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 878579
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27157315
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm_sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 250],
            [500, 200]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1149108,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 258]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1149110,
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 258]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27157317
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }]
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('m-bg-4')[0]),
      offset: 0,
      backgroundEl: (document.getElementById('main')),
      contentCSS: ' ',
      hide: [(document.getElementById('r-leaderboard-hp'))]
    },
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnit: 'm_sticky'
    }
  }
}