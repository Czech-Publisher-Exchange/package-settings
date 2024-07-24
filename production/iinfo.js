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
      'fragile-adform': 'fragile-adform',
      connectad: 'connectad_hb'
    }
  },
  general: {
    errorApiKey: 'hbp_lNk4ta9q55knF3cxCNbFUHJbOeI3gL0GVl1h'
  },
  formats: {
    skin: {
      generalCSS: "#cpex-skin::after {     position: absolute;     top: 0;     left: 0;     font-weight: 700;     text-shadow: 0.5px 0.866px 1px #0001;     pointer-events: none;     content: 'reklama';     display: block;     color: #fff;     line-height: 1.5rem;     font-size: 0.6875rem;     font-family: inherit;     width: 100%;     text-align: center; }"
    },
    interscroller: {
      enabled: true,
      adUnits: ['iinfo-area-interscroller']
    }
  }
}