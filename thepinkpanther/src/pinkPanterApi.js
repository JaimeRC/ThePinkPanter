let pinkPanterApi;

(function () {

    const baseUrl = 'https://api.themoviedb.org/3/'

    const token = '?api_key=5aee70d47502de15fcdde658cbdcb3c7'

    pinkPanterApi = {

        call: function (url) {
            return fetch(url).then(res => res.json())
        },

        getTypePopular: function(type,page){
            let path = baseUrl + type + '/popular' + token + '&language=es' + '&page=' + page
            return this.call(path).then(res => res.results)
        },

        getDetaillsIdType: function(type,id){
            let path = baseUrl + type + '/' + id + token 
            return this.call(path).then(res => res)
        },

        getSearch: function(query) {
            let path = baseUrl + 'search/multi' + token + '&language=es' + '&query=' + query
            console.log(path)
            return this.call(path).then(res => res)       
        }
    }
})()

export default pinkPanterApi