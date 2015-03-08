'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:formatPercentage
 * @function
 * @description
 * # formatPercentage
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('formatPercentage', function() {
    return function(value) {
      return Math.round(value * 100) + '%';
    };
  });
