window.cpexWebsiteSettings = {
  website: {
    name: 'mail'
  },
  headerbidding: {
    enabled: false
  },
  formats: {
    slideup: {
      enabled: true,
      adUnits: ['advert-popup'],
      backgroundEl: /*S*/ () => { return document.getElementById('advert-popup') } /*E*/
    }
  }
}