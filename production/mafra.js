window.cpexPublisherSettings = {
  publisher: {
    name: 'MAFRA, a.s.',
    sellerId: '003',
    code: 'mafra'
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
      ix: 'index_hb'
    },
    allowedSSPs: {
      xandr: '10001',
      magnite: '10000',
      pubmatic: '10002',
      index: '10003'
    }
  },
  aam: {
    settings: {
      publisher: 'mafra'
    }
  }
}