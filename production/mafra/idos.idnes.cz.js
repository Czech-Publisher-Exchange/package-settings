window.cpexWebsiteSettings = {
  website: {
    name: 'idos.idnes.cz'
  },
  aam: {
    settings: {
      publisher: 'mafra'
    }
  },
  headerbidding: {
    adUnits: [{
      code: '750x100',
      mediaTypes: {
        banner: {
          sizes: [
            [750, 100],
            [728, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 144582,
          zoneId: 1153926,
          accountId: '10900',
          position: 'atf',
          sizes: [39, 2]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1153928,
          accountId: '10900',
          position: 'atf',
          sizes: [39, 2]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641278'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 638860
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27157303
        }
      }]
    }, {
      code: 'branding',
      mediaTypes: {
        banner: {
          sizes: [
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
          zoneId: 1138188,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 2, 96, 55]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 144584,
          zoneId: 1138186,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 2, 96, 55]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641279'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 918984
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27157305
        }
      }]
    }, {
      code: 'm_branding',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [480, 820],
            [480, 480],
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1148172,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 261, 10]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1148300,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 256, 261, 10]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641282'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 638862
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27157309
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'm_leader',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 157330,
          zoneId: 1148274,
          accountId: '10900',
          position: 'atf',
          sizes: [117, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 157332,
          zoneId: 1148272,
          accountId: '10900',
          position: 'atf',
          sizes: [117, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4641283'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 918985
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 27157311
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
      backgroundEl: (document.getElementById('main')),
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