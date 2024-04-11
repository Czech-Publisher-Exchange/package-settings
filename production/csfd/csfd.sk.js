window.cpexWebsiteSettings = {
  website: {
    name: 'csfd.sk'
  },
  general: {
    autoRun: false,
    customRun: /*S*/ () => {
      window.AdsObject?.ball ? cpexPackage.run() : window.addEventListener('adsObjectReady', () => cpexPackage.run())
    } /*E*/,
    errorLogging: true,
    onLoad: /*S*/ () => {
      window.__tcfapi('addEventListener', 2, (data, success) => {
        if (success === false) return;
        if (data.vendor.consents[570] && Didomi.getUserConsentStatusForVendor('c:pomomedia-HZQX3YWL')) {
          window.addEventListener('message', (event) => {
            if (event.origin !== 'https://cdn.cpex.cz') return;
            if (event.data.type === 'cpexRead' && event.data.cookie === 'exc') {
              window.dataLayer = window.dataLayer || [];
              dataLayer.push({
                seg: event.data.value
              })
            }
            if (event.data.type === 'cpexRead' && event.data.cookie === 'excp') {
              fetch('https://cpex-dmp.servicebus.windows.net/dmp-hub-1/messages', {
                method: 'POST',
                headers: {
                  'Authorization': 'SharedAccessSignature sr=https%3A%2F%2Fcpex-dmp.servicebus.windows.net&sig=n5bID5YdZcEq%2F6HIYl9DsBOJxSDCCBdD%2BoakXgF5e3I%3D&se=1919695728&skn=write',
                  'Content-Type': 'application/atom+xml;type=entry;charset=utf-8'
                },
                body: JSON.stringify({
                  id: event.data.value,
                  url: window.location.href
                })
              }).catch(function(error) {
                console.error('DMP Sync Error: ', error)
              })
            }
          }, false);
          cpexPackage.utils.addElement('iframe', document.body, {
            src: 'https://cdn.cpex.cz/cookies/read.html?name=exc',
            width: 0,
            height: 0,
            style: 'border: none; display: block'
          });
          cpexPackage.utils.addElement('iframe', document.body, {
            src: 'https://cdn.cpex.cz/cookies/read.html?name=excp',
            width: 0,
            height: 0,
            style: 'border: none; display: block'
          })
        }
      })
    } /*E*/
  },
  cmp: {
    enabled: false
  },
  headerbidding: {
    adUnits: [{
      code: 'wide_skyscraper_sticky',
      mediaTypes: {
        banner: {
          sizes: [
            [120, 600],
            [160, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924120,
          accountId: '10900',
          position: 'atf',
          sizes: [8, 9]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924960,
          accountId: '10900',
          position: 'atf',
          sizes: [8, 9]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394981'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932031,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924112
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750761
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '180x600_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96947,
          tagId: 'sas_96947'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_1',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250],
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924122,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924962,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394975'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932032,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924113
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 211659,
          pageId: 196124
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750764
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96949,
          tagId: 'sas_96949'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_2',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250],
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924124,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924966,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394976'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932033,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924114
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750771
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_2',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96950,
          tagId: 'sas_96950'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_3',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250],
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924126,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924968,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394977'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932034,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924115
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750774
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_3',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96951,
          tagId: 'sas_96951'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_4',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250],
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924128,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924970,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394978'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932035,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924116
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750779
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_4',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96952,
          tagId: 'sas_96952'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'large_rectangle_5',
      mediaTypes: {
        banner: {
          sizes: [
            [336, 280],
            [300, 300],
            [300, 250],
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924130,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924972,
          accountId: '10900',
          position: 'atf',
          sizes: [16, 48, 15, 117]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394979'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932036,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924117
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750785
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '336x300_5',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96953,
          tagId: 'sas_96953'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'rectangle',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [250, 250],
            [200, 200],
            [300, 300],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924134,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 13, 48, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924976,
          accountId: '10900',
          position: 'atf',
          sizes: [15, 14, 13, 48, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394983'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932037,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924118
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 211659,
          pageId: 196124
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750811
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x250',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96948,
          tagId: 'sas_96948'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'halfpage',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [120, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924144,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 8, 48, 15]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925000,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 8, 48, 15]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394986'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932040,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924121
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750820
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x600',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 73614,
          tagId: 'sas_73614'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'halfpage_sticky_1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 300],
            [300, 250],
            [120, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924146,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15, 8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925002,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15, 8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394987'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932041,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924122
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750823
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x600_1',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96956,
          tagId: 'sas_96956'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'halfpage_sticky_2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 300],
            [300, 250],
            [120, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924148,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15, 8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925004,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15, 8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394988'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932042,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924123
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750835
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x600_2',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96957,
          tagId: 'sas_96957'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [2000, 1400],
            [970, 210],
            [998, 200],
            [728, 90],
            [930, 180],
            [750, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924150,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 96, 259, 2, 38, 39]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925006,
          accountId: '10900',
          position: 'atf',
          sizes: [230, 96, 259, 2, 38, 39]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394989'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932027,
          rcur: 'USD'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932023,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924110
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750836
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: 'branding',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '1000x210',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 73997,
          tagId: 'sas_73997'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 130350,
          tagId: 'sas_130350'
        }
      }]
    }, {
      code: 'billboard',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 310],
            [970, 250],
            [728, 90],
            [970, 210],
            [750, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924154,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 57, 2, 96, 39]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925008,
          accountId: '10900',
          position: 'atf',
          sizes: [94, 57, 2, 96, 39]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394990'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932043,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924125
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750837
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '1000x310',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 82380,
          tagId: 'sas_82380'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'slide_up',
      mediaTypes: {
        banner: {
          sizes: [
            [500, 200],
            [320, 150],
            [320, 100],
            [320, 50],
            [300, 50],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924760,
          accountId: '10900',
          position: 'atf',
          sizes: [258, 60, 117, 43, 44, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925022,
          accountId: '10900',
          position: 'atf',
          sizes: [258, 60, 117, 43, 44, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '5101107'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932052,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425892,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 975117
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750845
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 74014,
          tagId: 'sas_74014'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100],
            [320, 50],
            [300, 100],
            [300, 50],
            [320, 150]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924764,
          accountId: '10900',
          position: 'atf',
          sizes: [117, 43, 19, 44, 60]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925024,
          accountId: '10900',
          position: 'atf',
          sizes: [117, 43, 19, 44, 60]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394991'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932053,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425876,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924126
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750846
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '320x100',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96940,
          tagId: 'sas_96940'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [480, 820],
            [720, 1280],
            [250, 250],
            [200, 200],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924770,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 256, 484, 14, 13, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925026,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 256, 484, 14, 13, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394992'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932054,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425889,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924127
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 211659,
          pageId: 196124
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750847
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_1',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96941,
          tagId: 'sas_96941'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_1',
      mediaTypes: {
        banner: {
          sizes: [
            [720, 1280]
          ]
        }
      },
      bids: [{
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 130351,
          tagId: 'sas_130351'
        }
      }]
    }, {
      code: 'mobile_square_2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [200, 200],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924772,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925028,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394993'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932055,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425890,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924128
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 211659,
          pageId: 196124
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750848
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_2',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96942,
          tagId: 'sas_96942'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [200, 200],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924774,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925030,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394994'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932056,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425891,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924129
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750850
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_3',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96943,
          tagId: 'sas_96943'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_4',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [200, 200],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924780,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925032,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394995'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932057,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924130
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750852
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_4',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96944,
          tagId: 'sas_96944'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_5',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [200, 200],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96945,
          tagId: 'sas_96945'
        }
      }]
    }, {
      code: 'mobile_billboard',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [200, 200],
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924786,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13, 19]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925036,
          accountId: '10900',
          position: 'atf',
          sizes: [48, 15, 14, 13, 19]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394997'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932059,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 1425878,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924132
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750819
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x300_6',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96946,
          tagId: 'sas_96946'
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'wide_rectangle_hp',
      mediaTypes: {
        banner: {
          sizes: [
            [480, 300],
            [336, 280],
            [300, 300],
            [300, 250],
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924142,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 16, 48, 15, 117]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924998,
          accountId: '10900',
          position: 'atf',
          sizes: [83, 16, 48, 15, 117]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394985'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932039,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924120
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 23455304
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '480x300_2',
          m: 0,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96955,
          tagId: 'sas_96955'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'halfpage_sticky_3',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [300, 300],
            [300, 250],
            [120, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '235290',
          zoneId: 2230180,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15, 8]
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 2230182,
          accountId: '10900',
          position: 'atf',
          sizes: [10, 9, 48, 15, 8]
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '4137325'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 1213168,
          rcur: 'USD'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 924122
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 130349,
          tagId: 'sas_130349'
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'native_short_1',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1696621,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226621
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'native_long_1',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1696624,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226622
        }
      }]
    }, {
      code: 'native_long_2',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1712001,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226622
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'mobile_native_1',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1712009,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226623
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_native_2',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1712010,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226625
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_native_3',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1712011,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226626
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_native_4',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1712012,
          rcur: 'USD'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226627
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
      backgroundEl: /*S*/ document.body /*E*/,
      contentEl: /*S*/ document.getElementById('page-wrapper') /*E*/,
      contentCSS: 'position: relative;margin-top: 210px',
      hide: [/*S*/ document.getElementById('leaderboard-wrapper') /*E*/]
    },
    interscroller: {
      enabled: true
    },
    slideup: {
      enabled: true,
      adUnits: ['slide_up']
    },
    vignette: {
      enabled: true,
      adUnits: ['cpex_vignette']
    },
    responsive: {
      adUnits: ['mobile_square_1'],
      width: '480',
      height: '480'
    },
    native: {
      templates: {
        generic: "<style>  .cpex-native a {    display: flex;    text-decoration: none;    color: inherit  }  .cpex-native img {    width: 200px;    object-fit: cover  }  .cpex-native .text {    padding-left: 20px  }</style><div id='native'> <a href='${link}' target='_blank'>    <div class='native-content'>      <div class='native-content-img'> <img src='${img}' alt=''> </div>      <div class='native-content-desc'>        <div class='native-content-desc-text'>          <p class='native-title'>${title}</p>          <p id='nativeText'>${desc}</p>        </div>        <div class='native-info'> <span class='info'>reklama</span> </div>      </div>    </div>  </a></div>"
      },
      enabled: true,
      adUnitConfig: {
        native_short_1: {
          titleLength: 50,
          descLength: 90
        },
        native_long_1: {
          titleLength: 90,
          descLength: 90
        },
        native_long_2: {
          titleLength: 90,
          descLength: 90
        },
        mobile_native_1: {
          titleLength: 50,
          descLength: 90
        },
        mobile_native_2: {
          titleLength: 50,
          descLength: 90
        },
        mobile_native_3: {
          titleLength: 50,
          descLength: 90
        },
        mobile_native_4: {
          titleLength: 50,
          descLength: 90
        }
      }
    }
  }
}