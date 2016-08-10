/**
 * Created by andreashailu on 8/9/16.
 */

angular.module('movieCore', ['ngResource'])
    .factory('PopularMovies', function($resource) {
        return $resource('popular/:movieId', { movieId: '@id' }, {
            update: {
                method: 'PUT'
            }
        });
    });