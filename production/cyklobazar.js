window.cpexPublisherSettings = {
  publisher: {
    name: 'CYKLOSERVIS.CZ s.r.o.',
    sellerId: '032',
    code: 'cyklobazar'
  },
  adserver: {
    adapter: 'googletag',
    areaKey: 'pos',
    bidderTable: {
      criteo: 'Criteo_HB',
      appnexus: 'Xandr_HB',
      pubmatic: 'Pubmatic_HB',
      rubicon: 'Magnite_HB',
      adform: 'Adform',
      r2b2: 'R2B2',
      triplelift: 'Triplelift_HB',
      ix: 'Index_HB',
      sspBC: 'WP_HB',
      performax: 'Performax',
      'omg-adform': 'OMG-Adform',
      setupad: 'SetupAd_HB',
      teads: 'Teads_HB',
      rtbhouse: 'RTBHouse_HB',
      connectad: 'ConnectAd_HB'
    }
  },
  headerbidding: {
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
      }
    }
  },
  cmp: {
    enabled: false
  },
  formats: {
    vignette: {
      adUnits: []
    },
    responsive: {
      width: 480,
      height: 480
    }
  }
}