/**
 * Created by andreashailu on 8/3/16.
 */

angular.module('omdb', [])
    .factory('omdbApi', function($http){
        var baseUrl = 'http://www.omdbapi.com/?v=1&';
        var service = {
            search: function(query){
                return $http.get(baseUrl + 's=' + encodeURIComponent(query));
            },
            find: function(movieId){
                return $http.get(baseUrl + 'i=' + encodeURIComponent(movieId))
            }
        };

        return service;
    });