/**
 * Created by andreashailu on 8/14/16.
 */
describe('SearchController', function() {
  'use strict';

  var $this; // Using ControllerAs syntaax with 'this' as opposed to $scope
  var $location;
  var $controller;

  beforeEach(angular.mock.module('movieApp'));

  // Bootstrap Controller
  beforeEach(inject(function(_$controller_, _$location_) {
    $controller = _$controller_;
    $location = _$location_;
  }));

  // Define Controller to be SearchController module
  it('should redirect to the query results page for non-empty query', function() {
    // Since using 'this', must bind controller arguments
    $this = $controller('SearchController', { $location: $location },
      { query: 'star wars'});
    $this.search(); // Make call to SearchController's search() fn
    expect($location.url()).toBe('/results?q=star%20wars');
  });

  it('should not redirect to query results for empty query' , function() {
    $this = $controller('SearchController', { $location: $location },
      { query: '' });
    $this.search();
    expect($location.url()).toBe('');
  });

});
