window.cpexWebsiteSettings = {
  website: {
    name: 'aktualne.cz'
  },
  aam: {
    settings: {
      publisher: 'eco'
    }
  },
  headerbidding: {
    adUnits: [{
      code: 'leader',
      mediaTypes: {
        banner: {
          sizes: [
            [728, 90],
            [970, 100],
            [970, 210],
            [2000, 1400]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          siteId: 353314,
          zoneId: 2186666,
          accountId: '10900',
          position: 'atf',
          sizes: [2, 95, 96, 230]
        }
      }]
    }],
    currency: 'USD'
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('page')[0]),
      offset: 64
    },
    interscroller: {
      enabled: true
    }
  }
}