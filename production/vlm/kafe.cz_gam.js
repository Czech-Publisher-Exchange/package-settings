window.cpexWebsiteSettings = {
  publisher: {
    name: 'Vltava Labe Media',
    sellerId: '005',
    code: 'vlm'
  },
  adserver: {
    adapter: 'googletag',
    loadPrerequisites: false
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
      enabled: true,
      templates: {
        generic: "<article class='box-article'>\n  <header class='box-article-header'>\n    <div class='box-article-image'>\n      <a href='${link}'><div class='box-article-img'><img src='${img}'></div></a>\n    </div>\n    <div class='box-article-header-bottom'>\n      <div class='box-article-title'>\n        <a href='${link}'><h2>${title}</h2></a>\n      </div>\n    </div>\n  </header>\n  <blockquote class='box-article-excerpt'>${desc}</blockquote>\n</article>"
      }
    }
  }
}