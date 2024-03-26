window.cpexPublisherSettings = {
  publisher: {
    code: 'impuls',
    sellerId: '018',
    name: 'Impuls'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'googletag',
    loadPrerequisites: true
  },
  general: {
    onLoad: /*S*/ () => {
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