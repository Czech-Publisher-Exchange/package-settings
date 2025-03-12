window.cpexPublisherSettings = {
  publisher: {
    code: 'nova',
    name: 'TV Nova s.r.o.',
    sellerId: '025'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker',
    addConsent: false,
    allowedSSPs: {
      pubmatic: 1,
      index: 2,
      magnite: 4,
      xandr: 5
    },
    bidderTable: {
      appnexus: 'xandr_hb',
      pubmatic: 'pubmatic_hb',
      rubicon: 'magnite_hb',
      adform: 'adform_hb',
      ix: 'index_hb',
      criteo: 'criteo_hb',
      r2b2: 'r2b2_hb'
    },
    areaKey: 'divId'
  },
  general: {
    onLoad: /*S*/ () => {
      const lightTheme = document.documentElement.classList.contains('-light-theme');
      document.querySelector(':root').style.setProperty('--theme-bg', lightTheme ? 'white' : window.getComputedStyle(document.body).backgroundColor)
    } /*E*/
  },
  formats: {
    interscroller: {
      adUnits: ['div-ad-rectangle-mobile1', 'div-ad-rectangle-mobile2', 'div-ad-rectangle-mobile3', 'div-ad-gallery-mobile1', 'div-ad-gallery-mobile2', 'div-ad-gallery-mobile3', 'div-ad-gallery-mobile4', 'div-ad-gallery-mobile5']
    },
    responsive: {
      adUnits: ['div-ad-rectangle-mobile1', 'div-ad-rectangle-mobile2', 'div-ad-rectangle-mobile3', 'div-ad-gallery-mobile1', 'div-ad-gallery-mobile2', 'div-ad-gallery-mobile3', 'div-ad-gallery-mobile4', 'div-ad-gallery-mobile5'],
      enabled: true
    }
  }
}