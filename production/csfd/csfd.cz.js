window.cpexWebsiteSettings = {
  website: {
    name: 'csfd.cz'
  },
  headerbidding: {
    adUnits: [
      {
        code: 'rectangle-1',
        mediaTypes: {
          banner: { sizes: [[300, 250], [300, 300], [250, 250]] }
        },
        bids: [
          { bidder: 'rubicon', params: { accountId: '10900', siteId: 140646, zoneId: 1713098, position: 'atf', sizes: [15, 48, 14], inventory: {} } },
          { bidder: 'pubmatic', params: { publisherId: '158732', adSlot: '2918143' } },
          { bidder: 'appnexus', params: { placementId: 19286498 } },
          { bidder: 'rtbhouse', params: { region: 'prebid-eu', publisherId: 'w6O8SDnYNMT7Cb6AHGZf' } }
        ]
      }
    ]
  },
  formats: {
    skin: {
      backgroundEl: (document.body),
      contentEl: (document.getElementById('page-wrapper')),
      hide: [(document.getElementById('leaderboard-wrapper'))]
    },
    slideup: {
      adUnit: 'slide_up'
    },
    vignette: {
      adUnit: 'cpex_vignette'
    }
  }
}
