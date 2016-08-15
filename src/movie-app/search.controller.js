/**
 * Created by andreashailu on 8/14/16.
 */

(function (angular) {
  'use strict';

  function SearchController($location) {
    var vm = this;
    vm.search = function() {
      if (vm.query) {
        $location.path('/results').search('q', vm.query);
      }
    };
  }

  angular.module('movieApp', [])
    .controller('SearchController', ['$location', SearchController]);
}(angular));