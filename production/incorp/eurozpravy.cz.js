window.cpexWebsiteSettings = {
  website: {
    name: 'eurozpravy.cz'
  },
  adserver: {
    enabled: false
  },
  headerbidding: {
    adUnits: [{
      code: 'leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [998, 200],
            [970, 250],
            [970, 210],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 363124,
          zoneId: 2831580,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 57, 96, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 363126,
          zoneId: 2831582,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 57, 96, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5083139'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 979477
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 21054355
        }
      }, {
        bidder: 'triplelift',
        params: {
          inventoryCode: 93608
        }
      }],
      filter: {
        minWidth: 750
      }
    }],
    passbacks: {
      leaderboard: /*S*/ () => {
        const src = 'https://eurozpravy.cz/ads/google.html';
        const elementId = 'leaderboard';
        const type = 'banner';
        const size = {
          width: 970,
          height: 210
        };
        cpexPackage.headerbidding.prepareIframe(elementId, {
          element: document.getElementById(elementId)
        }, size.width, size.height, {
          src
        });
        cpexPackage.regularAds[elementId] = {
          type,
          elementId
        };
        if (cpexPackage.debugMode) {
          cpexPackage.headerbidding.prepareMetaData(elementId, {
            type: 'passback'
          })
        }
      } /*E*/
    }
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ () => { return document.getElementsByClassName('main__content')[0] } /*E*/ ,
      offset: 60,
      contentCSS: 'position: relative; margin-top: -26px;'
    }
  }
}