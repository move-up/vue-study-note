var STORAGE_KEY = 'storeDatajs'
export default {
  fetch: function() {
    return JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) || '[]'
    )
  },
  save: function(newList) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(
      newList))
  }
}
