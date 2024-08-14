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
      cpex: 247
    }
  },
  headerbidding: {
    enabled: true,
    userIDs: ['id5Id', 'sharedId', 'criteo', 'cpexId'],
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
      appnexus: {
        bidCpmAdjustment: /*S*/ (bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.88 : bidCpm * 0.87
        } /*E*/
      },
      pubmatic: {
        bidCpmAdjustment: /*S*/ (bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.95 : bidCpm * 0.82
        } /*E*/
      },
      rtbhouse: {
        bidCpmAdjustment: /*S*/ bidCpm => {
          return bidCpm * 0.5
        } /*E*/
      }
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
    slideup: {
      enabled: true
    },
    vignette: {
      enabled: true
    },
    responsive: {
      enabled: true
    }
  },
  general: {
    onLoad: /*S*/ () => {
      /* blokový komentář */
      console.log('preserving new lines - produkce')
    } /*E*/
  }
}