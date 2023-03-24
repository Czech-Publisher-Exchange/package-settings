window.cpexPublisherSettings = {
  publisher: {
    name: 'Czech Publisher Exchange',
    sellerId: '0',
    code: 'cpex'
  },
  adserver: {
    adapter: 'sastracker',
    allowedSSPs: {
      pubmatic: 1,
      index: 3,
      magnite: 4,
      xandr: 26,
      direct: 247 // temporary, for responsive testing
    }
  },
  headerbidding: {
    enabled: true,
    userIDs: ['id5Id', 'sharedId', 'criteo', 'cpexId'],
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
      appnexus: {
        bidCpmAdjustment: ((bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.88 : bidCpm * 0.87
        })
      },
      pubmatic: {
        bidCpmAdjustment: ((bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.95 : bidCpm * 0.82
        })
      },
      rtbhouse: {
        bidCpmAdjustment: (bidCpm => {
          return bidCpm * 0.5
        })
      }
    }
  },
  aam: {
    settings: {
      publisher: 'cpex'
    }
  },
  formats: {
    skin: {
      enabled: true
    },
    interscroller: {
      enabled: true
    },
    native: {
      enabled: true
    },
    responsive: {
      enabled: true
    },
    slideup: {
      enabled: true
    },
    vignette: {
      enabled: true
    }
  }
}