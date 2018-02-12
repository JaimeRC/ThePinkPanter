let pinkPanterApi;

(function(){

    const baseUrl = 'https://api.themoviedb.org/3/'
    
    const token = '?api_key=5aee70d47502de15fcdde658cbdcb3c7'

    pinkPanterApi = {

        call: function(url){
            return fetch(url).then(res => res.json())
        },

        getTypePopular: function(type,page){
            let path = baseUrl + type + '/popular' + token + '&page=' + page
            return this.call(path).then(res => res.results)
        },

        getDetaillsIdType: function(type,id){
            let path = baseUrl + type + '/' + id + token
            return this.call(path).then(res => res)
        }
    }
})()