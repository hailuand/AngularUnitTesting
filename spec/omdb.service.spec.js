/**
 * Created by andreashailu on 8/3/16.
 */

describe('omdb service', function(){
    var movieData = { 'Search' : [{"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMWJhYWQ3ZTEtYTVkOS00ZmNlLWIxZjYtODZjNTlhMjMzNGM2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"347","imdbID":"tt0251413","Type":"game","Response":"True"}]};
    var $httpBackend;
    var omdbApi = {};

    beforeEach(angular.mock.module('omdb'));

    beforeEach(inject(function(_omdbApi_, _$httpBackend_){
        omdbApi = _omdbApi_;
        $httpBackend = _$httpBackend_;
    }));

    it('should return search movie data', function(){
        $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&s=star%20wars')
            .respond(200, movieData);

        var response = null;
        omdbApi.search('star wars').then(function(httpResponse){
            response = httpResponse.data;
        });

        $httpBackend.flush();

        expect(response).toEqual(movieData);
    });

    it('should return serach movie data by ID', function(){
        $httpBackend.when('GET', 'http://www.omdbapi.com/?v=1&i=tt0251413')
            .respond(200, movieData);
        var response = null;

        omdbApi.find('tt0251413').then(function(httpResponse){
            response = httpResponse.data;
            console.log(angular.mock.dump(response));
        });

        $httpBackend.flush();

        expect(response).toEqual(movieData);
    })
});