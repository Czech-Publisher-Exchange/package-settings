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
      criteo: 'Criteo_HB'
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
        bidCpmAdjustment: ((bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.93 : bidCpm * 0.88
        })
      },
      'rubicon-mask': {
        bidCpmAdjustment: ((bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.93 : bidCpm * 0.88
        })
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
      css: '#cpex-slideup {\n  background-color: transparent;\n  z-index: 9999;\n}\n#cpex-slideup-close {\n  box-sizing: border-box;\n  display: inline-block;\n  cursor: pointer;\n  position: absolute;\n  top: -32px;\n  right: 0px;\n  height: 32px;\n  padding: 7px 9px;\n  font-family: Arial, sans-serif;\n  background-color: #454545;\n  font-size: 14px;\n  color: #fff;\n}\n#cpex-slideup-close:hover {\n  background-color: #000;\n}'
    },
    responsive: {
      enabled: true,
      adUnits: ['m_branding', 'm_branding_foto', 'm_branding_foto2', 'm_300x250', 'm_300x250_clankovy', 'm_300x250_clankovy_opak1', 'm_300x250_clankovy_opak2', 'm_300x250_foto_end', 'm_300x250_foto_mid', 'm_300x250_foto_mid2', 'm_300x250_foto_start', 'm_300x250_infinite'],
      width: 480,
      height: 480
    },
    vignette: {
      css: "#cpex-vignette {\n    background-color: #000E;\n    z-index: 2147483642;\n}\n#cpex-vignette-close {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n    box-sizing: border-box;\n    display: inline-block;\n    cursor: pointer;\n    width: 30px;\n    height: 30px;\n    padding: 10px;\n    font-size: 0pt;\n    border: none;\n    background-image: url('https://trackad.cz/icon.php?icon=closer2&front=cacaca&back=000000');\n    background-size: contain;\n    border-radius: 30px;\n    box-shadow: 0 0 9px 3px #cacaca;\n}\n#cpex-vignette-header {\n    position: absolute;\n    right: 10px;\n    bottom: 20px;\n    font-size: 12px;\n    background: rgba`40, 40, 40, 0.7`;\n    color: #d1d1d1;\n    padding: 1px 3px;\n    text-transform: capitalize;\n}",
      closeTextHTML: ' '
    }
  }
}