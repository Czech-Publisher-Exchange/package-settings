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
    },
    allowedSSPs: {
      xandr: 10001,
      magnite: 10000,
      pubmatic: 10002,
      index: 10003
    }
  },
  aam: {
    settings: {
      publisher: 'mafra'
    }
  },
  headerbidding: {
    cmpLoadTimeoutMs: 1000
  },
  formats: {
    slideup: {
      closeTextHTML: 'zavřít reklamu'
    }
  }
}