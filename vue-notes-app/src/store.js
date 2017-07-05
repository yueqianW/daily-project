const STORAGE_KEY = 'todos-vuejs'
export default {
    fetch: function() {
        return JSON.parse(window.localStroage.getItem(STORAGE_KEY) || '[]')
    },
    save: function(items) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
}
