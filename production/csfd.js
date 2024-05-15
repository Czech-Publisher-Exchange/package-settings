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
      adform: 'Adform_HB',
      connectad: 'ConnectAd'
    }
  },
  dsa: {
    customConfig: {
      dsarequired: 1,
      pubrender: 0,
      datatopub: 1,
      transparency: [{
        domain: 'csfd.cz',
        dsaparams: [1, 2]
      }]
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
              dataLayer.push({ seg: event.data.value })
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
  },
  formats: {
    native: {
      enabled: true,
      templates: {
        generic: "<style>  .cpex-native a {    display: flex;    text-decoration: none;    color: inherit  }  .cpex-native img {    width: 200px;    object-fit: cover  }  .cpex-native .text {    padding-left: 20px  }</style><div id='native'> <a href='${link}' target='_blank'>    <div class='native-content'>      <div class='native-content-img'> <img src='${img}' alt=''> </div>      <div class='native-content-desc'>        <div class='native-content-desc-text'>          <p class='native-title'>${title}</p>          <p id='nativeText'>${desc}</p>        </div>        <div class='native-info'> <span class='info'>reklama</span> </div>      </div>    </div>  </a></div>"
      }
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
  }
}