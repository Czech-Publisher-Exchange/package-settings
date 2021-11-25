window.cpexWebsiteSettings = {
  publisher: {
    name: 'Vltava Labe Media',
    sellerId: '005',
    code: 'vlm'
  },
  adserver: {
    adapter: 'googletag',
    loadPrerequisites: true
  },
  aam: {
    settings: {
      publisher: 'vlm'
    }
  },
  headerbidding: {
    enabled: false
  },
  formats: {
    skin: {
      enabled: true,
      contentEl: (document.getElementsByClassName('page')[0]),
      hide: [(document.getElementsByClassName('leaderboard-top')[0])]
    },
    native: {
      enabled: true
    }
  }
}