window.cpexPublisherSettings = {
  publisher: {
    code: 'eco',
    name: 'Economia',
    sellerId: '002'
  },
  cmp: {
    enabled: false
  },
  adserver: {
    adapter: 'sasic',
    allowedSSPs: {
      pubmatic: 2,
      index: 1228,
      magnite: 1503,
      xandr: 2919
    },
    bidderTable: {
      stroeerCore: 'stroeer',
      appnexus: 'xandr_hb',
      pubmatic: 'pubmatic_hb',
      pubmatic_eco_hb: 'pubmatic_eco_hb',
      rubicon: 'magnite_hb',
      adform: 'adform_hb',
      adform_im_hb: 'adform_im_hb',
      r2b2: 'r2b2',
      triplelift: 'triplelift_hb',
      ix: 'index_hb',
      smart: 'smart',
      teads: 'teads',
      rtbhouse: 'rtbhouse',
      'adform_im_hb-mask': 'adform_im_hb',
      criteo: 'criteo',
      'omg-adform': 'adform_omg_hb',
      'knowlimits-adform': 'adform_knwl_hb'
    }
  },
  headerbidding: {
    auctionTimeoutMs: 2000,
    userIDs: ['id5Id', 'shareId', 'criteo', 'czechAdId']
  },
  general: {
    errorApiKey: 'hbp_DAmvPZplPFWmFYRT4W16UT3Qs47LcW1iHniv',
    onLoad: /*S*/ () => {
      /* skin offset */
      window.cpexPackage.settings.formats.skin.offset = window._ecohec ? (window._ecohec.desktopNavigationHeight || 0) : 0;
      /* piano segment export */
      window.cX = window.cX || {};
      window.cX.callQueue = window.cX.callQueue || [];
      window.cX.callQueue.push(['invoke', () => {
        window.__tcfapi('addEventListener', 2, (data, success) => {
          if (success === false) { return };
          if (data.vendor.consents[570] && window.Didomi.getUserConsentStatusForVendor('c:pomomedia-HZQX3YWL')) {
            const segments = window.cX.getUserSegmentIds({ persistedQueryId: '51ff14b454af0cf4aedc891fee56b86c1aa69a31' });
            if (Array.isArray(segments) && segments.length) { /* use html from cdn.cpex.cz to save it as a 3rd party cookie, for 14 days */
              window.cpexPackage.utils.addElement('iframe', document.body, { src: 'https://cdn.cpex.cz/cookies/save.html?name=exc&time=1209600&data=' + encodeURIComponent(segments.toString()), width: 0, height: 0, style: 'border: none; display: block' });
            }
          }
        })
      }])
    } /*E*/
  }
}