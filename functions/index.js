const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)
const algoliasearch = require('algoliasearch')
const algolia = algoliasearch(functions.config().algolia.appid, functions.config().algolia.adminkey)
exports.updateIndex = functions.database.ref('/venues/{venueId}').onWrite(event => {
  const index = algolia.initIndex('venues')
  const venueId = event.params.venueId
  const data = event.data.val()
  if (!data) {
    return index.deleteObject(venueId, (err) => {
      if (err) throw err
      console.log('Venue Removed from Algolia Index', venueId)
    })
  }
  data['objectID'] = venueId
  return index.saveObject(data, (err, content) => {
    if (err) throw err
    console.log('Venue Updated in Algolia Index', data.objectID)
  })
})
