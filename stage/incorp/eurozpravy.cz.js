window.cpexWebsiteSettings = {
  website: {
    name: 'eurozpravy.cz'
  },
  aam: {
    settings: {
      publisher: 'incorp'
    }
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
            [728, 90],
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
          sizes: [259, 2, 96, 230]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 363126,
          zoneId: 2831582,
          accountId: '10900',
          position: 'atf',
          sizes: [259, 2, 96, 230]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5083139'
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
      }]
    }],
    passbacks: {
      leaderboard: (() => {
        const src = 'https://cdn.cpex.cz/temp/incorp_gam_passback.html';
        const elementId = 'main';
        const type = 'skin';
        const size = {
          width: 2000,
          height: 1400
        };
        cpexPackage.formats.prepareIframe(type, elementId, size.width, size.height, {
          src
        });
        cpexPackage.customAds['main'] = {
          type,
          elementId
        };
        cpexPackage.headerbidding.prepareMetaData(elementId, {
          type: 'passback'
        })
      })
    }
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('main__content')[0]),
      offset: 60,
      contentCSS: 'position: relative; margin-top: -26px;'
    }
  }
}