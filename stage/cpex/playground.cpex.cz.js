window.cpexWebsiteSettings = {
  website: {
    name: 'cpex.cz',
    note: 'test'
  },
  cmp: {
    enabled: true,
    payEnabled: true,
    didomiTemplate: 'tPBKgBkc',
    payConfig: {
      primaryLogoURL: 'https://cdn.cpex.cz/logos/cpex.png',
      secondaryLogoURL: 'https://cdn.cpex.cz/logos/cpex.png',
      registerURL: "javascript:localStorage.setItem('isSubscribed', 1); location.reload()",
      loginURL: 'javascript:window.alert("login")',
      texts: /*S*/ ({ partnerNum }) => {
        return {
          mainHeadline: 'Portál iDNES.cz je tady pro vás. Stačí si vybrat, jakou formou vám máme zobrazovat obsah.',
          subHeadline: 'Chci čtení bez reklam',
          subBody: 'Využijte služby iDNES Premium bez reklam a můžete neomezeně číst iDNES.cz, Lidovky.cz a Expres.cz. K tomu dostanete také noviny a časopisy v elektronické podobě. To vše bez reklam.¹',
          cmpHeadline: 'Chci iDNES.cz dál zdarma',
          cmpBody: 'Obsah pro všechny je pro nás na prvním místě. Zachováme vám dál vše zdarma a reklamu přizpůsobíme vašim zájmům. Bez omezení si můžete dál číst, přehrávat videa, soutěžit či přispívat do všech diskusí.²',
          butRegister: 'Předplatím si za 149 Kč / měsíc',
          linkLogin: 'Přihlásit',
          butConsent: 'Souhlasím a pokračovat',
          bottomText: '<h3>iDNES a reklama</h3>' +
            '<p>Pokud využijete místo platby udělení souhlasu s reklamou (tj. souhlas s využitím cookies a dalších síťových identifikátorů pro účely cílené reklamy), budou Vám zobrazovány v rámci našich webů iDNES.cz, Lidovky.cz a Expres.cz<sup>2</sup> reklamy a to cílené i necílené. Cílení reklam probíhá na základě profilování Vašich zvyků a zájmů z údajů získaných o Vašich akcích na internetu tak, aby Vám byly zobrazovány reklamy, které Vás budou zajímat. Toto cílení bude provádět jak MAFRA, a.s., tak reklamní partneři (jichž je celkem ' + partnerNum + "), jejichž seznam a další informace naleznete <a href=" + "javascript:Didomi.preferences.show('vendors')" + ">zde</a>.</p>" +
            '<p>Váš souhlas s cílením reklamy můžete kdykoliv odvolat, pokud jej však odvoláte, budete vyzváni k přechodu na iDNES Premium bez reklam. Souhlas pro jiné účely, než je cílení reklam (např. zobrazování obsahu podle Vašich zájmů apod.), můžete změnit či odvolat, aniž byste museli přecházet na iDNES Premium bez reklam.</p>' +
            '<p>Některé údaje (nikoliv však pro cílení reklamy) zpracováváme na základě tzv. oprávněného zájmu. Vznést námitku proti zpracování na základě oprávněného zájmu a provést další nastavení soukromí můžete v sekci <a href="javascript:Didomi.preferences.show()">Podrobné nastavení</a>. Vámi zde provedené nastavení se použije pro webové stránky: iDNES.cz, Lidovky.cz a Expres.cz.</p>' +
            '<p>My a naši partneři zpracováváme údaje následujícím způsobem: <strong>Použití omezených údajů k výběru reklam</strong>, Používání profilů pro výběr personalizovaného obsahu, Vytváření profilů pro personalizovaný obsah, <strong>Měření výkonu reklam</strong>, Porozumění publiku prostřednictvím statistik nebo kombinací údajů z různých zdrojů, <strong>Používání profilů k výběru personalizované reklamy</strong>, Rozvoj a zlepšování služeb, <strong>Vytváření profilů pro personalizovanou reklamu</strong>, Měření výkonu obsahu, Technický provoz stránek</p>' +
            '<p>Pokud se rozhodnete pro iDNES bez platby a udělíte nám souhlas s cílenou reklamou, <strong>bude souhlas vždy udělen pro účely uvedené výše tučně</strong>.</p>' +
            '<hr>' +
            '<ul>' +
            "  <li><sup>1</sup>&nbsp;Vyjma několika zvláštních reklamních formátů, kde je složité tyto formáty z obsahu odstranit, jakou jsou např. tzv. komerční sdělení či selfpromo naší společnosti a jejích dceřiných společností. Podrobnosti naleznete v našich <a href='https://www.idnes.cz/ucet/podminky-pouzivani' target='_blank'>obchodních podmínkách</a>.</li>" +
            "  <li><sup>2</sup>&nbsp;Pro ostatní webové stránky naší společnosti si můžete zvolit nastavení zvlášť. Pokud však na nich udělíte souhlas s cílenou reklamou, budeme vycházet z toho, že jste jej udělili i pro stránky iDNES.cz, Lidovky.cz a Expres.cz</li>" +
            '</ul>'
        };
      } /*E*/,
      links: [{
        innerHTML: 'Privacy policy',
        href: 'privacyPolicy',
        target: '_blank'
      }],
      required: ['cookies', 'select_basic_ads', 'create_ads_profile', 'select_personalized_ads', 'measure_ad_performance'],
      isSubscribed: /*S*/ () => { return !!localStorage.getItem('isSubscribed') } /*E*/
    }
  },
  headerbidding: {
    prebidPath: 'https://cdn-src.cpex.cz/stage/hb/prebid/seznam/prebid.js',
    prebidDebug: true,
    analytics: ['id5Analytics', 'cpexAnalytics'],
    adUnits: [{
      code: 'rectangle-1',
      mediaTypes: {
        banner: {
          sizes: [
            [250, 250],
            [300, 250],
            [300, 300],
            [480, 480],
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'seznam',
        params: {
          tagid: '379811',
          test: true
        }
      },
      {
        bidder: 'rubicon',
        params: {
          siteId: '140646',
          zoneId: '1713098',
          accountId: '10900',
          position: 'atf',
          sizes: [14, 15, 48, 261, 10]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '2918143'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '19286498'
        }
      }, {
        bidder: 'rtbhouse',
        params: {
          publisherId: 'w6O8SDnYNMT7Cb6AHGZf',
          region: 'prebid-eu'
        }
      }]
    }, {
      code: 'rectangle-2',
      mediaTypes: {
        banner: {
          sizes: [
            [250, 250],
            [300, 250],
            [300, 300],
            [480, 480],
            [300, 600]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '140646',
          zoneId: '1713100',
          accountId: '10900',
          position: 'atf',
          sizes: [14, 15, 48, 261, 10]
        }
      }, {
        bidder: 'pubmatic',
        params: {
          publisherId: '158732',
          adSlot: '2918144'
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '19286538'
        }
      }]
    }, {
      code: 'leaderboard-1',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '140646',
          zoneId: '1960456',
          accountId: '10900',
          position: 'atf',
          sizes: [2, 230]
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '21341120'
        }
      }]
    }, {
      code: 'native-2',
      mediaTypes: {
        banner: {
          sizes: [
            [548, 150]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '140646',
          zoneId: '2062058',
          accountId: '10900',
          position: 'atf',
          sizes: [90]
        }
      }]
    }, {
      code: 'native-3',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: '29896310'
        }
      }]
    }, {
      code: 'native-4',
      mediaTypes: {
        native: {}
      },
      bids: [{
        bidder: 'appnexus',
        params: {
          placementId: '29878475'
        }
      }]
    }, {
      code: 'interscroller-1',
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
          siteId: '140646',
          zoneId: '2044716',
          accountId: '10900',
          position: 'atf',
          sizes: [256]
        }
      }]
    }, {
      code: 'slideup-1',
      mediaTypes: {
        banner: {
          sizes: [
            [320, 150],
            [300, 250],
            [548, 150]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '140646',
          zoneId: '2087210',
          accountId: '10900',
          position: 'atf',
          sizes: [60, 15, 90]
        }
      }, {
        bidder: 'appnexus',
        params: {
          placementId: '21779753'
        }
      }]
    }, {
      code: 'vignette-1',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 250],
            [548, 150]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '140646',
          zoneId: '2096284',
          accountId: '10900',
          position: 'atf',
          sizes: [15, 90]
        }
      }]
    }, {
      code: 'video-1',
      mediaTypes: {
        video: {
          playerSize: [640, 480]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: '91228',
          zoneId: '429500',
          accountId: '10900',
          position: 'atf',
          sizes: [221]
        }
      }]
    }]
  },
  adserver: {
    loadPrerequisites: true,
    delayCall: 100,
    defineSlots: [{
      elementId: 'rectangle-1',
      sizes: [
        [250, 250],
        [300, 250],
        [300, 300],
        [480, 480],
        [300, 600]
      ],
      path: '/22794528025/playground_rectangle-1'
    }, {
      elementId: 'rectangle-2',
      sizes: [
        [250, 250],
        [300, 300],
        [300, 250],
        [480, 480],
        [300, 600]
      ],
      path: '/22794528025/playground_rectangle-2'
    }, {
      elementId: 'leaderboard-1',
      sizes: [
        [728, 90],
        [2000, 1400]
      ],
      path: '/22794528025/playground_leaderboard-1'
    }, {
      elementId: 'native-1',
      sizes: [
        [548, 150]
      ],
      path: '/22794528025/playground_native-1'
    }, {
      elementId: 'native-2',
      sizes: [
        [548, 150]
      ],
      path: '/22794528025/playground_native-2'
    }, {
      elementId: 'interscroller-1',
      sizes: [
        [480, 820],
        [720, 1280]
      ],
      path: '/22794528025/playground_interscroller-1'
    }, {
      elementId: 'slideup-1',
      sizes: [
        [320, 150],
        [300, 250],
        [548, 150]
      ],
      path: '/22794528025/playground_slideup-1'
    }, {
      elementId: 'vignette-1',
      sizes: [
        [300, 250],
        [548, 150]
      ],
      path: '/22794528025/playground_vignette-1'
    }, {
      elementId: 'video-1',
      sizes: [640, 480],
      path: '/22794528025/playground_video-1'
    }],
    gamId: '22794528025/playground_'
  },
  formats: {
    skin: {
      backgroundEl: /*S*/ () => { return document.body } /*E*/,
      contentEl: /*S*/ () => { return document.getElementById('routify-app') } /*E*/,
      hide: [/*S*/ () => { return document.getElementById('leaderboard-1') } /*E*/],
      contentCSS: 'position: relative; width: 1080px; margin: auto; margin-top: 200px'
    },
    responsive: {
      adUnits: ['responsive-1'],
      width: 480,
      height: 480
    },
    slideup: {
      adUnits: ['slideup-1'],
      emptyHeight: 50
    },
    vignette: {
      adUnits: ['vignette-1']
    },
    native: {
      templates: {
        generic: "          <style>            .cpex-native a { display: flex; text-decoration: none; color: inherit }            .cpex-native img { width: 200px; object-fit: cover }            .cpex-native .text { padding-left: 20px }          </style>          <div class='cpex-native article'>            <a href='${link}' target='_blank' >              <img src='${img}'>              <div class='text'>                <h2>${title}</h2>                <p>${desc}</p>              </div>            </a>          </div>",
        'native-1': "          <style>            .cpex-native.individual { background-color: #c9b3ff }            .cpex-native a { display: flex; text-decoration: none; color: inherit }            .cpex-native img { width: 200px; object-fit: cover }            .cpex-native .text { padding-left: 20px }          </style>          <div class='cpex-native article individual'>            <a href='${link}' target='_blank' >              <img src='${img}'>              <div class='text'>                <h2>${title}</h2>                <p>${desc}</p>              </div>            </a>          </div>",
        'native-2': 'native-1'
      }
    }
  }
}