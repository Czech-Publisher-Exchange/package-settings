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
      // piano segment export
      window.cX = window.cX || {}
      window.cX.callQueue = window.cX.callQueue || []
      window.cX.callQueue.push(['invoke', () => {
        window.__tcfapi('addEventListener', 2, (data, success) => {
          if (success === false) { return }
          if (data.vendor.consents[570] && window.Didomi.getUserConsentStatusForVendor('c:pomomedia-HZQX3YWL')) {
            const segments = window.cX.getUserSegmentIds({ persistedQueryId: '51ff14b454af0cf4aedc891fee56b86c1aa69a31' })
            if (isFilledArray(segments)) { // use html from cdn.cpex.cz to save it as a 3rd party cookie, for 14 days
              addElement('iframe', document.body, { src: 'https://cdn.cpex.cz/cookies/save.html?name=exc&time=1209600&data=' + encodeURIComponent(segments.toString()), width: 0, height: 0, style: 'border: none; display: block' })
            }
          }
        })
      }])
    } /*E*/
  }
}