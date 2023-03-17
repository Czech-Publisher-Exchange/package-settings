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
      xandr: 164
    },
    areaKey: 'pos',
    bidderTable: {
      criteo: 'Criteo_HB',
      appnexus: 'Xandr_HB',
      pubmatic: 'Pubmatic_HB',
      rubicon: 'Magnite_HB',
      adform: 'Adform',
      r2b2: 'R2B2',
      triplelift: 'Triplelift_HB',
      ix: 'Index_HB'
    }
  },
  aam: {
    settings: {
      publisher: 'vlm'
    }
  },
  headerbidding: {
    analytics: ['id5Analytics', 'cpexAnalytics'],
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
      adform: {
        bidCpmAdjustment: ((bidCpm, bid) => {
          return bidCpm * 0.9
        })
      }
    }
  }
}