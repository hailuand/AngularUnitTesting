/**
 * Created by andreashailu on 8/3/16.
 */

angular.module('omdb', [])
    .factory('omdbApi', function($http, $q){
        var baseUrl = 'http://www.omdbapi.com/?v=1&';
        var service = {
            search: function(query){
                var deferred = $q.defer();
                return $http.get(baseUrl + 's=' + encodeURIComponent(query))
                    .success(function(data){
                        deferred.resolve(data);
                    });
                return deferred.promise();
            },
            find: function(movieId){
                var deferred = $q.defer();
                return $http.get(baseUrl + 'i=' + encodeURIComponent(movieId))
                    .success(function(data){
                        deferred.resolve(data);
                    });
                return deferred.promise();
            }
        };

        return service;
    });