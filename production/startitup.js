window.cpexPublisherSettings = {
  publisher: {
    code: 'startitup',
    name: 'Startitup s.r.o.',
    sellerId: '033'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'googletag'
  },
  headerbidding: {
    bidderSettings: {
      rubicon: {
        bidCpmAdjustment: /*S*/ (bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.93 : bidCpm * 0.88
        }/*E*/
      },
      'rubicon-mask': {
        bidCpmAdjustment: /*S*/ (bidCpm, bid) => {
          return bid.dealId ? bidCpm * 0.93 : bidCpm * 0.88
        } /*E*/
      }
    }
  }
}