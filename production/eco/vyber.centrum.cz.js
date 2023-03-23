window.cpexWebsiteSettings = {
  website: {
    name: 'vyber.centrum.cz'
  },
  cmp: {
    enabled: false
  },
  aam: {
    settings: {
      publisher: 'eco'
    }
  },
  headerbidding: {
    currency: 'USD',
    analytics: ['id5Analytics', 'cpexAnalytics'],
    enabled: false
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('relative')[0]),
      offset: 72,
      hide: [(document.getElementsByClassName('flex-col')[0])]
    },
    slideup: {
      adUnit: 'reklama-popupmobile',
      backgroundEl: (document.getElementById('reklama-popupmobile-wrapper'))
    }
  }
}