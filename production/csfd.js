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
      teads: 'Teads',
      adform: 'Adform_HB'
    }
  },
  dsa: {
    customConfig: {
      dsarequired: 1,
      pubrender: 0,
      datatopub: 1,
      transparency: {
        domain: 'csfd.cz',
        dsaparams: [1,2]
      }
    }
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
            height: 0
          })
        }
      })
    } /*E*/
  },
  formats: {
    native: {
      enabled: true,
      templates: {
        generic: "<style>\n  .cpex-native a {\n    display: flex;\n    text-decoration: none;\n    color: inherit\n  }\n\n  .cpex-native img {\n    width: 200px;\n    object-fit: cover\n  }\n\n  .cpex-native .text {\n    padding-left: 20px\n  }\n</style>\n<div id='native'> <a href='${link}' target='_blank'>\n    <div class='native-content'>\n      <div class='native-content-img'> <img src='${img}' alt=''> </div>\n      <div class='native-content-desc'>\n        <div class='native-content-desc-text'>\n          <p class='native-title'>${title}</p>\n          <p id='nativeText'>${desc}</p>\n        </div>\n        <div class='native-info'> <span class='info'>reklama</span> </div>\n      </div>\n    </div>\n  </a></div>"
      }
    }
  }
}