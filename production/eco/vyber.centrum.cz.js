window.cpexWebsiteSettings = {
  website: {
    name: 'vyber.centrum.cz'
  },
  cmp: {
    enabled: false
  },
  headerbidding: {
    currency: 'USD',
    enabled: false
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: /*S*/ () => { return document.getElementsByClassName('relative')[0] } /*E*/,
      offset: 72,
      hide: [/*S*/ () => { return document.getElementsByClassName('flex-col')[0] } /*E*/]
    },
    slideup: {
      adUnits: ['reklama-popupmobile'],
      backgroundEl: /*S*/ () => { return document.getElementById('reklama-popupmobile-wrapper') } /*E*/
    }
  }
}