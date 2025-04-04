window.cpexPublisherSettings = {
  publisher: {
    code: 'nova',
    name: 'TV Nova s.r.o.',
    sellerId: '25'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sastracker',
    allowedSSPs: {
      pubmatic: 2,
      index: 3,
      magnite: 5,
      xandr: 6
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
  }
}