window.cpexWebsiteSettings = {
  website: {
    name: 'centrum.cz'
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
    adUnits: [{
      code: 'leader',
      mediaTypes: {
        banner: {
          sizes: [
            [970, 250],
            [970, 210],
            [970, 100],
            [728, 90]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '385178',
          zoneId: '2142926',
          position: 'atf',
          sizes: ['57', '96', '95', '2']
        }
      }, {
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '385180',
          zoneId: '2142928',
          position: 'atf',
          sizes: ['57', '96', '95', '2']
        }
      }]
    }, {
      code: 'halfpage',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 600],
            [160, 600],
            [120, 600],
            [300, 300],
            [300, 250]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '385178',
          zoneId: '2142942',
          position: 'atf',
          sizes: ['10', '9', '8', '48', '15']
        }
      }, {
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '385180',
          zoneId: '2142944',
          position: 'atf',
          sizes: ['10', '9', '8', '48', '15']
        }
      }]
    }, {
      code: 'mediumrectangle',
      mediaTypes: {
        banner: {
          sizes: [
            [300, 300],
            [300, 250],
            [250, 250],
            [300, 50]
          ]
        }
      },
      bids: [{
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '385178',
          zoneId: '2142934',
          position: 'atf',
          sizes: ['48', '15', '14', '44']
        }
      }, {
        bidder: 'rubicon',
        params: {
          accountId: '10900',
          siteId: '385180',
          zoneId: '2142936',
          position: 'atf',
          sizes: ['48', '15', '14', '44']
        }
      }]
    }]
  }
}