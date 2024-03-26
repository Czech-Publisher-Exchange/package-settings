window.cpexPublisherSettings = {
  publisher: {
    code: 'iinfo',
    sellerId: '012'
  },
  adserver: {
    adapter: 'sastracker',
    allowedSSPs: {
      pubmatic: 1,
      index: 3,
      magnite: 4,
      xandr: 5
    },
    areaKey: 'iinfoArea',
    bidderTable: {
      appnexus: 'xandr_hb',
      pubmatic: 'pubmatic_hb',
      rubicon: 'magnite_hb',
      adform: 'adform',
      'im-adform': 'im-adform',
      r2b2: 'r2b2',
      ix: 'index_hb',
      triplelift: 'triplelift_hb',
      'fragile-adform': 'fragile-adform'
    }
  },
  general: {
    errorApiKey: 'hbp_lNk4ta9q55knF3cxCNbFUHJbOeI3gL0GVl1h',
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
  },
  formats: {
    skin: {
      generalCSS: "#cpex-skin::after {\n    position: absolute;\n    top: 0;\n    left: 0;\n    font-weight: 700;\n    text-shadow: 0.5px 0.866px 1px #0001;\n    pointer-events: none;\n    content: 'reklama';\n    display: block;\n    color: #fff;\n    line-height: 1.5rem;\n    font-size: 0.6875rem;\n    font-family: inherit;\n    width: 100%;\n    text-align: center;\n}"
    }
  }
}