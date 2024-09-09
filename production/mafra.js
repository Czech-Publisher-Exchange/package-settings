window.cpexPublisherSettings = {
  publisher: {
    name: 'MAFRA, a.s.',
    sellerId: '003',
    code: 'mafra',
    note: '_'
  },
  cmp: {
    enabled: false
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
      smart: 'Smart_HB',
      connectad: 'Connectad_HB',
      rtbhouse: 'RTBHouse_HB'
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
    },
    userIDs: ['czechAdId']
  },
  formats: {
    slideup: {
      closeTextHTML: 'zavřít reklamu',
      css: '#cpex-slideup {  background-color: transparent;  z-index: 999;}#cpex-slideup-close {  box-sizing: border-box;  display: inline-block;  cursor: pointer;  position: absolute;  top: -32px;  right: 0px;  height: 32px;  padding: 7px 9px;  font-family: Arial, sans-serif;  background-color: #454545;  font-size: 14px;  color: #fff;}#cpex-slideup-close:hover {  background-color: #000;}'
    },
    responsive: {
      enabled: true,
      adUnits: ['m_branding', 'm_branding_foto', 'm_branding_foto2', 'm_300x250', 'm_300x250_clankovy', 'm_300x250_clankovy_opak1', 'm_300x250_clankovy_opak2', 'm_300x250_foto_end', 'm_300x250_foto_mid', 'm_300x250_foto_mid2', 'm_300x250_foto_start', 'm_300x250_infinite', 'm_300x250_vybrali', 'm_300x250_souvisejici', 'm_300x250_foto_mid3', 'm_300x250_foto_mid4', 'm_300x250_clankovy_opak3', 'm_paticka'],
      width: 480,
      height: 480
    },
    vignette: {
      css: "#cpex-vignette {    background-color: #000E;    z-index: 2147483642;}#cpex-vignette-close {    position: absolute;    z-index: 999;    right: 20px;    top: 10px;    box-sizing: border-box;    display: inline-block;    cursor: pointer;    width: 30px;    height: 30px;    padding: 10px;    font-size: 0pt;    border: none;    background-image: url('https://trackad.cz/icon.php?icon=closer2&front=cacaca&back=000000');    background-size: contain;    border-radius: 30px;    box-shadow: 0 0 9px 3px #cacaca;}#cpex-vignette-header {    position: absolute;    right: 10px;    bottom: 20px;    font-size: 12px;    background: rgba`40, 40, 40, 0.7`;    color: #d1d1d1;    padding: 1px 3px;    text-transform: capitalize;}",
      closeTextHTML: ' '
    },
    native: {
      templates: {
        nativ: "<!--idnes native desktop--> <div class='art'>   <a rel='sponsored' href='${link}' class='art-link' target='_blank'>     <h3>${title}</h3>     <div class='art-img'>       <img src='${img}' width='230' height='129' style='object-fit:cover'>       <span></span>     </div>   </a>   <p class='perex'>     <span>${desc}</span>   </p> </div>",
        m_nativ: "<!--idnes m_nativ--> <div class='art'>   <a rel='sponsored' href='${link}' class='art-link' target='_blank'>     <img src='${img}' class='art-img' width='100' height='75'>     <h3>${title}</h3>   </a> </div>",
        nativ_clankovy: 'nativ',
        m_nativ_clankovy: 'm_nativ',
        m_nativ_clankovy_spodni: 'm_nativ',
        m_nativ_clankovy_horni: "<!--idnes m_nativ_clankovy_horni--> <table class='complete'>   <tbody>     <tr>       <td>         <a href='${link}' rel='sponsored' class='aside' target='_blank'>           <div class='aside-tit r-aside'>             <div class='r-head'><span></span></div>             <h3>${title}</h3>           </div>           <div class='aside-img'>             <img src='${img}' width='100' height='56'>           </div>         </a>       </td>     </tr>   </tbody> </table>"
      }
    },
    interscroller: {
      adUnits: ['m_branding', 'm_branding_foto', 'm_branding_foto2'],
      enabled: true
    },
    skin: {
      adUnitsForced: ['branding', 'branding_fotogalerie']
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