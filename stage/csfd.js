window.cpexPublisherSettings = {
  publisher: {
    name: 'ČSFD',
    sellerId: '013',
    code: 'csfd'
  },
  adserver: {
    adapter: 'sastracker',
    bidderTable: {
      'omg-adform': 'omg-adform',
      criteo: 'criteo',
      'fragile-adform': 'Fragile-Adform',
      rubicon: 'Magnite_HB',
      appnexus: 'Xandr_HB',
      pubmatic: 'Pubmatic_HB',
      ix: 'Index_HB',
      triplelift: 'Triplelift_HB',
      r2b2: 'R2B2',
      smart: 'Smart',
      teads: 'Teads'
    }
  },
  headerbidding: {
    analytics: ['id5Analytics', 'cpexAnalytics']
  },
  general: {
    errorApiKey: 'hbp_tCjxz6JmkE7RI1QnA7qLBjDFb4ItP23y9OCs',
    onLoad: /*S*/ () => {
      window.__tcfapi('addEventListener', 2, (data, success) => {
        if (success === false) return;
        if (data.vendor.consents[570] && Didomi.getUserConsentStatusForVendor('c:pomomedia-HZQX3YWL')) {
          window.addEventListener('message', (event) => {
            if (event.origin !== 'https://cdn.cpex.cz') return;
            if (event.data.type === 'cpexRead') {
              window.dataLayer = window.dataLayer || [];
              dataLayer.push({
                seg: event.data.value
              })
            }
          }, false);
          cpexPackage.utils.addElement('iframe', document.body, {
            src: 'https://cdn.cpex.cz/cookies/read.html?name=exc',
            width: 0,
            height: 0,
            style: 'border: none; display: block'
          })
        }
      })
    } /*E*/
  }
}