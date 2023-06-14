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
      teads: 'Teads_HB'
    }
  },
  aam: {
    settings: {
      publisher: 'mafra'
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
      css: '#cpex-slideup {  background-color: transparent;  z-index: 9999;}#cpex-slideup-close {  box-sizing: border-box;  display: inline-block;  cursor: pointer;  position: absolute;  top: -32px;  right: 0px;  height: 32px;  padding: 7px 9px;  font-family: Arial, sans-serif;  background-color: #454545;  font-size: 14px;  color: #fff;}#cpex-slideup-close:hover {  background-color: #000;}'
    },
    responsive: {
      enabled: true,
      adUnits: ['m_branding', 'm_branding_foto', 'm_branding_foto2', 'm_300x250', 'm_300x250_clankovy', 'm_300x250_clankovy_opak1', 'm_300x250_clankovy_opak2', 'm_300x250_foto_end', 'm_300x250_foto_mid', 'm_300x250_foto_mid2', 'm_300x250_foto_start', 'm_300x250_infinite'],
      width: 480,
      height: 480,
      containerEl: /*S*/ document.getElementById('text-out-box') /*E*/
    },
    vignette: {
      css: "#cpex-vignette {    background-color: #000E;    z-index: 2147483642;}#cpex-vignette-close {    position: absolute;    z-index: 999;    right: 20px;    top: 10px;    box-sizing: border-box;    display: inline-block;    cursor: pointer;    width: 30px;    height: 30px;    padding: 10px;    font-size: 0pt;    border: none;    background-image: url('https://trackad.cz/icon.php?icon=closer2&front=cacaca&back=000000');    background-size: contain;    border-radius: 30px;    box-shadow: 0 0 9px 3px #cacaca;}#cpex-vignette-header {    position: absolute;    right: 10px;    bottom: 20px;    font-size: 12px;    background: rgba`40, 40, 40, 0.7`;    color: #d1d1d1;    padding: 1px 3px;    text-transform: capitalize;}",
      closeTextHTML: ' '
    }
  }
}