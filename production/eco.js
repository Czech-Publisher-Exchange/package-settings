window.cpexPublisherSettings = {
  publisher: {
    code: 'eco',
    name: 'Economia',
    sellerId: '002'
  },
  cmp: {
    enabled: false
  },
  aam: {
    settings: {
      publisher: 'eco',
      behavior: {
        trackLinks: true
      },
      namespace: '1'
    }
  },
  adserver: {
    adapter: 'sasic',
    allowedSSPs: {
      pubmatic: 2,
      index: 1228,
      magnite: 1503,
      xandr: 2919
    },
    bidderTable: {
      stroeerCore: 'stroeer',
      appnexus: 'xandr_hb',
      pubmatic: 'pubmatic_hb',
      pubmatic_eco_hb: 'pubmatic_eco_hb',
      rubicon: 'magnite_hb',
      adform: 'adform_hb',
      adform_im_hb: 'adform_im_hb',
      r2b2: 'r2b2',
      triplelift: 'triplelift_hb',
      ix: 'index_hb',
      smart: 'smart',
      teads: 'teads',
      rtbhouse: 'rtbhouse',
      'adform_im_hb-mask': 'adform_im_hb-mask'
    }
  },
  headerbidding: {
    auctionTimeoutMs: 2000,
    analytics: ['id5Analytics', 'cpexAnalytics']
  }
}