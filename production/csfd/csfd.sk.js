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
      code: 'billboard',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 310],
            [970, 250],
            [728, 90],
            [970, 210]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924154,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925008,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032631,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028150,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
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
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127220,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32592483
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25976'
        }
      }, {
        bidder: 'sspBC'
      }, {
        bidder: 'adsolut',
        params: {
          host: 'cpm.adsolut.in',
          zoneId: 256150
        },
        bidderModuleName: 'adkernel'
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
            [300, 300],
            [300, 250],
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924144,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925000,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032632,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028151,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924121
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226303,
          pageId: 209944
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750820
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127221,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32592484
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25607'
        }
      }, {
        bidder: 'sspBC'
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
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924146,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925002,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032633,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028152,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924122
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226302,
          pageId: 209943
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750823
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127222,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32592485
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '26000'
        }
      }, {
        bidder: 'sspBC'
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
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924148,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925004,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032634,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028153,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924123
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226301,
          pageId: 209942
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750835
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127223,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824681
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25943'
        }
      }, {
        bidder: 'sspBC'
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
            [250, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '235290',
          zoneId: 2230180,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 2230182,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032635,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028154,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924122
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226300,
          pageId: 209941
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 23455304
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '300x600_3',
          m: 0,
          g: 'hb'
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127224,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824682
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25952'
        }
      }, {
        bidder: 'sspBC'
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
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924962,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032636,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028155,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924113
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226299,
          pageId: 209940
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750764
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127225,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824683
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25931'
        }
      }, {
        bidder: 'sspBC'
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
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924966,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032637,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028156,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924114
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226298,
          pageId: 209939
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750771
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127226,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824684
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25934'
        }
      }, {
        bidder: 'sspBC'
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
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924968,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032638,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028157,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924115
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226297,
          pageId: 209938
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750774
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127227,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824686
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25961'
        }
      }, {
        bidder: 'sspBC'
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
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924970,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032639,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028158,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924116
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226296,
          pageId: 209937
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750779
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127228,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824687
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25982'
        }
      }, {
        bidder: 'sspBC'
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
          zoneId: 3381064,
          accountId: '10900',
          position: 'atf'
        }
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
        bidder: 'omg-adform',
        params: {
          mid: 2032640,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028159,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924117
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226295,
          pageId: 209936
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750785
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127229,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824689
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25958'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'leaderboard',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 210],
            [998, 200],
            [728, 90],
            [970, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924150,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925006,
          accountId: '10900',
          position: 'atf'
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
          mid: 932023,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032641,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028163,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924110
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32550777
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3137571,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824690
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25973'
        }
      }, {
        bidder: 'sspBC'
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
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924150,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1925006,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032642,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028162,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924110
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 32550777
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 130350,
          tagId: 'sas_130350'
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25994'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'mobile_billboard',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924786,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925036,
          accountId: '10900',
          position: 'atf'
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
          mid: 2032653,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028164,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924132
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226292,
          pageId: 209933
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750852
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127234,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824696
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25988'
        }
      }, {
        bidder: 'sspBC'
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
            [300, 100]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924764,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925024,
          accountId: '10900',
          position: 'atf'
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
          mid: 1768488,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032652,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028165,
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
          placementId: 20750845
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127235,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824697
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25970'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
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
        bidder: 'omg-adform',
        params: {
          mid: 2032666,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028171,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226623
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_native_1',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1966085,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032662,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 133741,
          tagId: 'sas_133741'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3137618,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 33871483
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '30695'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032667,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028172,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226625
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_native_2',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1948493,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032663,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 133263,
          tagId: 'sas_133263'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 1112949,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 33871484
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '30725'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032668,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028173,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226626
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_native_3',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1966090,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032664,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 133742,
          tagId: 'sas_133742'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3137619,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 33871485
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '30698'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032669,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028174,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226627
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_native_4',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1966089,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032665,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 133743,
          tagId: 'sas_133743'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3137620,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 33871486
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '30704'
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
            [250, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924770,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925026,
          accountId: '10900',
          position: 'atf'
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
          mid: 2032654,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028166,
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
          placementId: 226291,
          pageId: 209932
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750846
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127236,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824699
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25955'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_1',
      mediaTypes: {
        banner: {
          sizes: [
            [720, 1280],
            [480, 820],
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924770,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925026,
          accountId: '10900',
          position: 'atf'
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
          mid: 1918026,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032659,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028179,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750846
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: 'interscroller',
          m: 1,
          g: 'hb'
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 130351,
          tagId: 'sas_130351'
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 33862386
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25985'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3137531,
          networkId: 419
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }, {
      code: 'mobile_square_2',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924772,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925028,
          accountId: '10900',
          position: 'atf'
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
          mid: 2032655,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028167,
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
          placementId: 226290,
          pageId: 209931
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750847
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127237,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824701
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25979'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924774,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925030,
          accountId: '10900',
          position: 'atf'
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
          mid: 2032656,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028168,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924129
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226289,
          pageId: 209930
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750848
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127238,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824702
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25949'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924780,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925032,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032657,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028169,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924130
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226288,
          pageId: 209929
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750850
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127239,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824703
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25967'
        }
      }, {
        bidder: 'sspBC'
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
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924784,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925034,
          accountId: '10900',
          position: 'atf'
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '3394996'
        }
      }, {
        bidder: 'adform',
        params: {
          mid: 932058,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032658,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028170,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924131
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226287,
          pageId: 209928
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750851
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 96945,
          tagId: 'sas_96945'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127240,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824705
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25991'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
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
        bidder: 'omg-adform',
        params: {
          mid: 2032648,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028181,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226622
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'native_long_1',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1966091,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032645,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 133738,
          tagId: 'sas_133738'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3137615,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 33871480
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '30719'
        }
      }],
      filter: {
        minWidth: 1000
      }
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
        bidder: 'omg-adform',
        params: {
          mid: 2032650,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028182,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226622
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'native_long_2',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1966088,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032646,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 133739,
          tagId: 'sas_133739'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3137616,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 33871481
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '30692'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032649,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028183,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 30226621
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'native_short_1',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 100]
          ]
        }
      },
      bids: [{
        bidder: 'adform',
        params: {
          mid: 1966086,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032647,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'smart',
        params: {
          domain: '//prg.smartadserver.com',
          siteId: 360257,
          pageId: 1278200,
          formatId: 133740,
          tagId: 'sas_133740'
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3137617,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 33871482
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '30722'
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
            [300, 300],
            [300, 250],
            [250, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 235290,
          zoneId: 1924134,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924976,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032651,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028161,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924118
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226294,
          pageId: 209935
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750811
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127231,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824691
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25940'
        }
      }, {
        bidder: 'sspBC'
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
            [320, 100],
            [300, 100],
            [300, 300],
            [300, 250],
            [250, 250],
            [970, 310],
            [728, 90],
            [970, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 1924760,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 1925022,
          accountId: '10900',
          position: 'atf'
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
          mid: 2032660,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028175,
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
          placementId: 22969806
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }, {
        bidder: 'r2b2',
        params: {
          d: 'csfd.sk',
          p: '970x310',
          m: 1,
          g: 'hb'
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127241,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824706
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25946'
        }
      }, {
        bidder: 'sspBC'
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
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924998,
          accountId: '10900',
          position: 'atf'
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
          mid: 932038,
          rcur: 'USD'
        }
      }, {
        bidder: 'omg-adform',
        params: {
          mid: 2032643,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028160,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'ix',
        params: {
          siteId: 924120
        }
      }, {
        bidder: 'teads',
        params: {
          placementId: 226293,
          pageId: 209934
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 20750819
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127232,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824693
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25964'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
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
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 235292,
          zoneId: 1924960,
          accountId: '10900',
          position: 'atf'
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
        bidder: 'omg-adform',
        params: {
          mid: 2032644,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
      }, {
        bidder: 'fragile-adform',
        params: {
          mid: 2028180,
          rcur: 'USD'
        },
        bidderModuleName: 'adform'
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
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
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
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3127233,
          networkId: 419
        }
      }, {
        bidder: 'projectagora',
        params: {
          placementId: 32824694
        }
      }, {
        bidder: 'performax',
        params: {
          tagid: '25937'
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        minWidth: 1000
      }
    }, {
      code: 'slide_up_refresh',
      mediaTypes: {
        banner: {
          sizes: [
            [500, 200],
            [320, 100],
            [300, 100],
            [300, 300],
            [300, 250],
            [250, 250],
            [970, 310],
            [728, 90],
            [970, 250],
            [336, 280]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 238982,
          zoneId: 3697588,
          accountId: '10900',
          position: 'atf'
        }
      }, {
        bidder: 'rubicon-mask',
        params: {
          siteId: 238984,
          zoneId: 3697590,
          accountId: '10900',
          position: 'atf'
        },
        bidderModuleName: 'rubicon'
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '6614482'
        }
      }, {
        bidder: 'ix',
        params: {
          siteId: 1175218
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: 35116525
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: '5DIt2Ahw0lbFQkgdd1jT',
          region: 'prebid-eu'
        }
      }, {
        bidder: 'criteo',
        params: {
          networkId: 11172,
          uid: 418811
        }
      }, {
        bidder: 'connectad',
        params: {
          siteId: 3173129,
          networkId: 393
        }
      }, {
        bidder: 'sspBC'
      }],
      filter: {
        maxWidth: 1000
      }
    }]
  },
  formats: {
    skin: {
      enabled: true,
      backgroundEl: /*S*/ () => { return document.body } /*E*/,
      contentEl: /*S*/ () => { return document.getElementById('page-wrapper') } /*E*/,
      contentCSS: 'position: relative;margin-top: 210px',
      hide: [/*S*/ () => { return document.getElementById('leaderboard-wrapper') } /*E*/]
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
  },
  autorefresh: {
    adUnits: [{
      adUnit: 'slide_up',
      interval: 30,
      maxCount: 0,
      s2sPosition: '',
      hbOnlyAdUnit: 'slide_up_refresh'
    }],
    enabled: true
  }
}