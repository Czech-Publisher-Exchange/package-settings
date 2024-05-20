window.cpexPublisherSettings = {
  publisher: {
    name: 'MAFRA, a.s.',
    sellerId: '003',
    code: 'mafra',
    note: '_'
  },
  cmp: {
    enabled: false,
    payConfig: {
      cmpTemplate: 'G2CLdMkM',
      primaryLogoURL: 'https://1gr.cz/u/loga-n4/idnes.svg',
      registerURL: 'https://www.idnes.cz/premium/cenik?br=1',
      loginURL: 'https://ucet.idnes.cz/',
      texts: ({ partnerNum }) => {
        return {
          mainHeadline: `Portál iDNES.cz je tady pro vás. Stačí si vybrat, jakou formou vám máme zobrazovat obsah.`,
          subHeadline: 'Chci čtení bez reklam',
          subBody: `Využijte služby iDNES Premium bez reklam a můžete neomezeně číst <a href='https://www.idnes.cz' target='_blank'>iDNES.cz</a>, <a href='https://www.lidovky.cz' target='_blank'>Lidovky.cz</a> a <a href='https://www.expres.cz' target='_blank'>Expres.cz</a>. K tomu dostanete také noviny a časopisy v elektronické podobě. To vše bez reklam.¹`,
          cmpHeadline: 'Chci iDNES.cz dál zdarma',
          cmpBody: `Obsah pro všechny je pro nás na prvním místě. Zachováme vám dál vše zdarma a reklamu přizpůsobíme vašim zájmům. Bez omezení si můžete dál číst, přehrávat videa, soutěžit či přispívat do všech diskusí.²`,
          butRegister: 'Předplatit za 149 Kč / měsíc',
          linkLogin: 'Přihlásit',
          butConsent: 'Souhlasím a pokračovat',
          bottomText: `<h3>iDNES a reklama</h3>
            <p>Pokud využijete místo platby udělení souhlasu s reklamou (tj. souhlas s využitím cookies a dalších síťových identifikátorů pro účely cílené reklamy), budou Vám zobrazovány v rámci našich webů iDNES.cz, Lidovky.cz a Expres.cz<sup>2</sup> reklamy a to cílené i necílené. Cílení reklam probíhá na základě profilování Vašich zvyků a zájmů z údajů získaných o Vašich akcích na internetu tak, aby Vám byly zobrazovány reklamy, které Vás budou zajímat. Toto cílení bude provádět jak MAFRA, a.s., tak reklamní partneři (jichž je celkem ${partnerNum}), jejichž seznam a další informace naleznete <a href="javascript:Didomi.preferences.show('vendors')">zde</a>.</p>
            <p>Váš souhlas s cílením reklamy můžete kdykoliv odvolat, pokud jej však odvoláte, budete vyzváni k přechodu na iDNES Premium bez reklam. Souhlas pro jiné účely, než je cílení reklam (např. zobrazování obsahu podle Vašich zájmů apod.), můžete změnit či odvolat, aniž byste museli přecházet na iDNES Premium bez reklam.</p>
            <p>Některé údaje (nikoliv však pro cílení reklamy) zpracováváme na základě tzv. oprávněného zájmu. Vznést námitku proti zpracování na základě oprávněného zájmu a provést další nastavení soukromí můžete v sekci <a href="javascript:Didomi.preferences.show()">Podrobné nastavení</a>. Vámi zde provedené nastavení se použije pro webové stránky: iDNES.cz, Lidovky.cz a Expres.cz.</p>
            <p>My a naši partneři zpracováváme údaje následujícím způsobem: <strong>Použití omezených údajů k výběru reklam</strong>, Používání profilů pro výběr personalizovaného obsahu, Vytváření profilů pro personalizovaný obsah, <strong>Měření výkonu reklam</strong>, Porozumění publiku prostřednictvím statistik nebo kombinací údajů z různých zdrojů, <strong>Používání profilů k výběru personalizované reklamy</strong>, Rozvoj a zlepšování služeb, <strong>Vytváření profilů pro personalizovanou reklamu</strong>, Měření výkonu obsahu, Technický provoz stránek</p>
            <p>Pokud se rozhodnete pro iDNES bez platby a udělíte nám souhlas s cílenou reklamou, <strong>bude souhlas vždy udělen pro účely uvedené výše tučně</strong>.</p>
            <hr>
            <ul>
              <li><sup>1</sup>&nbsp;Vyjma několika zvláštních reklamních formátů, kde je složité tyto formáty z obsahu odstranit, jakou jsou např. tzv. komerční sdělení či selfpromo naší společnosti a jejích dceřiných společností. Podrobnosti naleznete v našich <a href='https://www.idnes.cz/ucet/podminky-pouzivani' target='_blank'>obchodních podmínkách</a>.</li>
              <li><sup>2</sup>&nbsp;Pro ostatní webové stránky naší společnosti si můžete zvolit nastavení zvlášť. Pokud však na nich udělíte souhlas s cílenou reklamou, budeme vycházet z toho, že jste jej udělili i pro stránky iDNES.cz, Lidovky.cz a Expres.cz</li>
            </ul>`
        };
      },
      purposeList: false,
      required: ['cookies', 'select_basic_ads', 'create_ads_profile', 'select_personalized_ads', 'measure_ad_performance',],
      isSubscribed: () => { return !!localStorage.getItem('isSubscribed') },
      overrideCSS: () => {
        return `
          #cpexSubs_veil {
            background-color: #ECEFF1;
          }
          #cpexSubs_modal {
            width: 798px;
            border-radius: 8px;
            padding: 24px 64px;
            font-family: Inter, sans-serif;
            line-height: 1.5;
            color: #263238;
            overflow: auto;
            margin: 0px;
          }
            #cpexSubs_content {
              padding-top: 20px;
              overflow: initial;
            }
              #cpexSubs_content a {
                color: #1B3E7A;
              }
              #cpexSubs_primaryLogo {
                height: 34px;
              }
              #cpexSubs_headline {
                border-top: 1px #CFDCF1 solid;
                text-align: center;
                padding: 24px 0px;
                margin-top: 20px;
                color: #263238;
                font-size: 18px;
                font-weight: 500;
              }
              #cpexSubs_modal main {
                padding: 0px;
                flex-direction: row-reverse;
                gap: 20px;
              }
                #cpexSubs_modal main p {
                  height: auto;
                  min-height: 125px;
                }
                #cpexSubs_cmp, #cpexSubs_sub {
                  padding: 24px;
                  border: 1px #CFDCF1 solid;
                  border-radius: 8px;
                }
                  #cpexSubs_cmp {
                    border: 1px #A1B8E0 solid;
                    box-shadow: 0px 0px 10px #0002;
                  }
                  #cpexSubs_modal h2 {
                    font-family: Fira Sans;
                    font-size: 22px;
                    font-weight: 700;
                    margin: 0px;
                  }
                  #cpexSubs_subButtons, #cpexSubs_cmpButtons {
                    flex-direction: column;
                    gap: 20px;
                  }
                    #cpexSubs_modal main button {
                      font-family: Inter, sans-serif;
                      font-weight: 500;
                      width: 100%;
                      font-size: 16px;
                      margin: 0px;
                      border-radius: 4px;
                      padding: 12px 0px;
                    }
                      #cpexSubs_subscribeButton {
                        background-color: #EFF3F9;
                        border: 1px #CFDCF1 solid;
                        color: #102447;
                      }
                      #cpexSubs_consentButton {
                        background-color: #008A27;
                        box-shadow: 0px 4px 8px #0002;
                      }
                    #cpexSubs_linkLogin {
                      position: absolute;
                      top: 20px;
                      right: 0px;
                      color: #102447 !important;
                      font-size: 8px;
                      font-weight: bold;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    }
                      #cpexSubs_linkLogin:before {
                        content: '';
                        display: block;
                        width: 24px;
                        height: 24px;
                        background-image: url('https://1gr.cz/u/icon/124/login0.svg');
                      }
                    #cpexSubs_linkPurposes {
                      font-size: 12px;
                      color: #1B3E7A;
                      text-decoration: underline;
                    }
              #cpexSubs_bottom {
                margin-top: 24px;
                border-top: 1px #CFDCF1 solid;
                padding: 20px 0px 0px 0px;
                background-color: transparent;
              }
                #cpexSubs_bottom p {
                  font-size: 14px;
                  color: #263238;
                  line-height: 1.5;
                  margin: inherit;
                }
                #cpexSubs_bottom h3 {
                  font-weight: 500;
                }
                #cpexSubs_bottom p:first-letter {
                  text-transform: initial;
                }
                #cpexSubs_bottom hr {
                  margin: 20px 0px;
                  border: none;
                  border-top: 1px #CFDCF1 solid;
                }
                #cpexSubs_bottom ul {
                  padding: 0px;
                  list-style: none;
                }
                  #cpexSubs_bottom ul li {
                    padding: 5px 0px;
                    line-height: 1.2;
                    font-size: 13px;
                    color: gray;
                  }
            #cpexSubs_modal li.superscript {
              line-height: 1;
            }
        @media only screen and (max-width: 900px) {
          #cpexSubs_modal main {
            position: initial;
            display: flex;
            gap: 20px;
          }
        }
        @media only screen and (max-width: 750px) {
          body.subscriptionModalOpen {
            overflow: auto !important;
          }
          #cpexSubs_modalWrapper {
            position: relative;
            overflow: auto;
            margin: 10px 0px;
          }
          #cpexSubs_modal {
            max-width: 95%;
            padding: 16px;
            border-radius: 10px;
            min-height: initial;
            max-height: initial;
            height: 100%;
            overflow: initial;
          }
          #cpexSubs_modal main {
            display: flex;
            flex-direction: column;
          }
        }
        @media only screen and (max-width: 400px) {
          #cpexSubs_modal main p {
            max-height: initial;
          }
        }`
      }    
    }
  },
  adserver: {
    enabled: true,
    adapter: 'paticka',
    bidderTable: {
      appnexus: 'xandr_hb',
      pubmatic: 'pubmatic_hb',
      rubicon: 'magnite_hb',
      adform: 'adform_hb',
      r2b2: 'r2b2_hb',
      ix: 'index_hb',
      'omg-adform': 'OMG-Adform_HB',
      'fragile-adform': 'Fragile-Adform_HB',
      criteo: 'Criteo_HB',
      teads: 'Teads_HB',
      sspBC: 'WP_HB',
      smart: 'Smart_HB'
    }
  },
  headerbidding: {
    cmpLoadTimeoutMs: 1000,
    bidderSettings: {
      rubicon: {
        bidCpmAdjustment: /*S*/ (bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.93 : bidCpm * 0.88
        } /*E*/
      },
      'rubicon-mask': {
        bidCpmAdjustment: /*S*/ (bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.93 : bidCpm * 0.88
        } /*E*/
      }
    }
  },
  formats: {
    slideup: {
      closeTextHTML: 'zavřít reklamu',
      css: '#cpex-slideup {  background-color: transparent;  z-index: 999;}#cpex-slideup-close {  box-sizing: border-box;  display: inline-block;  cursor: pointer;  position: absolute;  top: -32px;  right: 0px;  height: 32px;  padding: 7px 9px;  font-family: Arial, sans-serif;  background-color: #454545;  font-size: 14px;  color: #fff;}#cpex-slideup-close:hover {  background-color: #000;}'
    },
    responsive: {
      enabled: true,
      adUnits: ['m_branding', 'm_branding_foto', 'm_branding_foto2', 'm_300x250', 'm_300x250_clankovy', 'm_300x250_clankovy_opak1', 'm_300x250_clankovy_opak2', 'm_300x250_foto_end', 'm_300x250_foto_mid', 'm_300x250_foto_mid2', 'm_300x250_foto_start', 'm_300x250_infinite'],
      width: 480,
      height: 480
    },
    vignette: {
      css: "#cpex-vignette {    background-color: #000E;    z-index: 2147483642;}#cpex-vignette-close {    position: absolute;    z-index: 999;    right: 20px;    top: 10px;    box-sizing: border-box;    display: inline-block;    cursor: pointer;    width: 30px;    height: 30px;    padding: 10px;    font-size: 0pt;    border: none;    background-image: url('https://trackad.cz/icon.php?icon=closer2&front=cacaca&back=000000');    background-size: contain;    border-radius: 30px;    box-shadow: 0 0 9px 3px #cacaca;}#cpex-vignette-header {    position: absolute;    right: 10px;    bottom: 20px;    font-size: 12px;    background: rgba`40, 40, 40, 0.7`;    color: #d1d1d1;    padding: 1px 3px;    text-transform: capitalize;}",
      closeTextHTML: ' '
    },
    native: {
      templates: {
        nativ: "<!--idnes native desktop--> <div class='art ads-mockup'>   <a rel='sponsored' href='${link}' class='art-link' target='_blank'>     <h3><span>${title}</span></h3>     <div class='art-img sp5'>       <img src='${img}' width='230' height='129' style='object-fit:cover'>       <span></span>     </div>   </a>   <p class='perex'><span>${desc}</span></p> </div>",
        m_nativ: "<!--idnes m_nativ--> <div class='art ads-mockup'>   <a rel='sponsored' href='${link}' class='art-link' target='_blank'>     <img src='${img}' class='art-img sp5 ' width='100' height='75'>     <h3>${title}</h3>   </a> </div>"
      }
    }
  },
  dsa: {
    render: false
  },
  general: {
    onLoad: /*S*/ () => {
      /* piano segment export */
      window.cX = window.cX || {};
      window.cX.callQueue = window.cX.callQueue || [];
      window.cX.callQueue.push(['invoke', () => {
        window.__tcfapi('addEventListener', 2, (data, success) => {
          if (success === false) {
            return
          };
          if (data.vendor.consents[570] && window.Didomi.getUserConsentStatusForVendor('c:pomomedia-HZQX3YWL')) {
            const segments = window.cX.getUserSegmentIds({
              persistedQueryId: '51ff14b454af0cf4aedc891fee56b86c1aa69a31'
            });
            if (Array.isArray(segments) && segments.length) {
              /* use html from cdn.cpex.cz to save it as a 3rd party cookie, for 14 days */
              window.cpexPackage.utils.addElement('iframe', document.body, {
                src: 'https://cdn.cpex.cz/cookies/save.html?name=exc&time=1209600&data=' + encodeURIComponent(segments.toString()),
                width: 0,
                height: 0,
                style: 'border: none; display: block'
              })
            }
          }
        })
      }])
    } /*E*/
  }
}