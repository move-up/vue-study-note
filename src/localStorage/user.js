var STORAGE_KEY = 'storeUser'
export default {
  fetch: function() {
    return JSON.parse(window.localStorage.getItem(
      STORAGE_KEY || '')
    )
  },
  save: function(nickname) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(
      nickname))
  }
}
