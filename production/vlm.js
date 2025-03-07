window.cpexPublisherSettings = {
  publisher: {
    name: 'Vltava Labe Media',
    sellerId: '005',
    code: 'vlm'
  },
  adserver: {
    adapter: 'sastracker',
    allowedSSPs: {
      pubmatic: 1,
      index: 3,
      magnite: 4,
      xandr: 164
    },
    areaKey: 'pos',
    bidderTable: {
      criteo: 'Criteo_HB',
      appnexus: 'Xandr_HB',
      pubmatic: 'Pubmatic_HB',
      rubicon: 'Magnite_HB',
      adform: 'Adform',
      r2b2: 'R2B2',
      triplelift: 'Triplelift_HB',
      ix: 'Index_HB',
      sspBC: 'WP_HB',
      performax: 'Performax',
      'omg-adform': 'OMG-Adform',
      setupad: 'SetupAd_HB',
      teads: 'Teads_HB',
      rtbhouse: 'RTBHouse_HB'
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
      },
      adform: {
        bidCpmAdjustment: /*S*/ (bidCpm, bid) => {
          return bidCpm * 0.9
        } /*E*/
      },
      r2b2: {
        bidCpmAdjustment: /*S*/(bidCpm, bid) => {
          return bidCpm * 0.8
        } /*E*/
      }
    }
  },
  cmp: {
    enabled: false
  },
  formats: {
    vignette: {
      cookieDuration: 3600,
      cookieName: 'vignette',
      closeTextHTML: "<svg width='32' height='32' viewBox='29 15 26 22'><circle cx='42' cy='26' r='12' stroke='white' stroke-width='1.5'></circle><path d='M 36,20 l 12,12 M 36,32 l 12,-12' stroke='white' stroke-width='2'></path></svg>",
      css: '#cpex-vignette {   background-color: #000;   z-index: 999999; }  #cpex-vignette-header {   margin: 0 18px 18px auto;   font-family: arial, sans-serif;   font-size: 12px;   color: #FFFFFF;   text-align: right;   padding: 4px 8px;   background: black;   position: absolute;   bottom: 0;   right: 0;   z-index: 1;   font-weight: 700; }  #cpex-vignette-close {   position: absolute;   right: 0px;   top: 0px;   background: none;   border: none;   z-index: 9999999; }',
      adUnits: ['centerVignette'],
      enabled: true
    },
    responsive: {
      enabled: true,
      width: 480,
      height: 480
    }
  },
  general: {
    onLoad: /*S*/() => {
     window.cX = window.cX || {};
     window.cX.callQueue = window.cX.callQueue || [];
     window.cX.callQueue.push(['invoke', () => {
       window.__tcfapi('addEventListener', 2, (data, success) => {
         if (success === false) {
           return;
         }
         if (data.vendor.consents[570]) {
           const segments = window.cX.getUserSegmentIds({
             persistedQueryId: '51ff14b454af0cf4aedc891fee56b86c1aa69a31',
           });
           if (Array.isArray(segments) && segments.length) {
             window.cpexPackage.utils.addElement('iframe', document.body, {
               src: 'https://cdn.cpex.cz/cookies/save.html?name=exc&time=1209600&data=' + encodeURIComponent(segments.toString()),
               width: 0,
               height: 0,
               style: 'border: none; display: block',
             });
           }
           const pianoId = window.cX.getCxenseUserId();
           if (pianoId && data.vendor.consents[755]) {
             window.cpexPackage.utils.addElement('img', document.body, {
               src: 'https://cm.g.doubleclick.net/pixel?google_nid=cpex_ddp&process_consent=T&google_cm&&cxsite=1140709865545450804&cxckp=' + pianoId,
               width: 0,
               height: 0,
               style: 'display: block',
             });
           }
         }
       });
     }]);
   } /*E*/
  }
}