window.cpexPublisherSettings = {
  publisher: {
    code: 'nova',
    name: 'TV Nova s.r.o.',
    sellerId: '25'
  },
  cmp: {
    enabled: false
  },
  aam: {
    settings: {
      publisher: 'nova'
    }
  },
  adserver: {
    adapter: 'googletag',
    loadPrerequisites: true
  },
  general: {
    onLoad: (() => {
      document.querySelector(':root').style.setProperty('--theme-bg', window.getComputedStyle(document.body).backgroundColor)
    })
  }
}