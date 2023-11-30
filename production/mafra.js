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
      invibes: 'Invibes_HB'
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
      },
      invibes: {
        params: {
          customEndpoint: 'https://bid5.videostep.com/Bid/VideoAdContent'
        }
      }
    }
  },
  formats: {
    slideup: {
      closeTextHTML: 'zavřít reklamu',
      css: '#cpex-slideup {\n  background-color: transparent;\n  z-index: 999;\n}\n\n#cpex-slideup-close {\n  box-sizing: border-box;\n  display: inline-block;\n  cursor: pointer;\n  position: absolute;\n  top: -32px;\n  right: 0px;\n  height: 32px;\n  padding: 7px 9px;\n  font-family: Arial, sans-serif;\n  background-color: #454545;\n  font-size: 14px;\n  color: #fff;\n}\n\n#cpex-slideup-close:hover {\n  background-color: #000;\n}'
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
        nativ: "<div class='art'> <a href='${link}' target='_blank' class='art-link'>    <h3>${title}</h3>    <div class='art-img w230'><img src='${img}' style='object-fit:cover'><span></span></div>    <p class='perex'>${desc}</p>  </a></div>",
        m_nativ: "<div class='art'>  <a rel='sponsored' href='${link}' class='art-link' target='_blank'>    <img title='' alt='' src='${img}' class='art-img sp5 ' style='object-fit:cover' width='100' height='75'>    <h3 style='text-align:left'>${title}</h3>  </a></div>"
      }
    }
  }
}