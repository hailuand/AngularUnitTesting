/**
 * Created by andreashailu on 8/9/16.
 */

describe('MovieCore', function() {
    var PopularMovies;
    var $httpBackend;

    beforeEach(module('movieCore'));

    beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
        PopularMovies = _PopularMovies_;
        $httpBackend = _$httpBackend_;
    }));

    /**
     * Makes sure that all expectations within tests where executed.
     */
    afterEach(function($httpbackend) {
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should create popular movie', function() {
        var expectedData = {'movieId':'tt0076759',
            'description':'Great movie!'};

        $httpBackend.expectPOST(/./, expectedData).respond(201);
        var popularMovie = new PopularMovies({
            movieId: 'tt0076759',
            description: 'Great movie!'
        });

        popularMovie.$save();
        // Expectation is that the resource call won't throw an exception
        expect($httpBackend.flush).not.toThrow();
    });

});