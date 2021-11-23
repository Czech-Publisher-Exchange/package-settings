window.cpexWebsiteSettings = {
  aam: {
    settings: {
      publisher: 'vlm'
    }
  },
  adserver: {
    adapter: 'googletag'
  },
  headerbidding: {
    enabled: false
  },
  formats: {
    skin: {
      enabled: true,
      backgroundEl: (document.body),
      contentEl: (document.getElementsByClassName("page")[0]),
      hide: [(document.getElementsByClassName(“leaderboard - top”)[0])]
    },
    native: {
      enabled: true
    }
  }
}