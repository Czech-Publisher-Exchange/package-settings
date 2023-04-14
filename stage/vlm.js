window.cpexPublisherSettings = {
  publisher: {
    name: 'Vltava Labe Media',
    sellerId: '005',
    code: 'vlm'
  },
  adserver: {
    adapter: 'sastracker',
    allowedSSPs: {
      pubmatic: 1,
      index: 3,
      magnite: 4,
      xandr: 5
    }
  },
  aam: {
    settings: {
      publisher: 'vlm'
    }
  },
  formats: {
    vignette: {
      closeTextHTML: "<svg width='32' height='32' viewBox='29 15 26 22'><circle cx='42' cy='26' r='12' stroke='white' stroke-width='1.5'></circle><path d='M 36,20 l 12,12 M 36,32 l 12,-12' stroke='white' stroke-width='2'></path></svg>",
      css: '#cpex-vignette-header {\n    margin: 0 18px 18px auto;\n    font-family: arial, sans-serif;\n    font-size: 12px;\n    color: #FFFFFF;\n    text-align: right;\n    padding: 4px 8px;\n    background: black;\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    z-index: 1;\n    font-weight: 700;\n}\n#cpex-vignette .button {\n    background: none;\n}\n#cpex-vignette-close {\n    position: absolute;\n    right: 0px;\n    top: 0px;\n}',
      adUnits: ['centerVignette'],
      cookieDuration: 3600,
      cookieName: 'vignette',
      enabled: true
    }
  }
}