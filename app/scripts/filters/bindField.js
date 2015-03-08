'use strict';

// This method is for forcing a calculated value in template file to be recalculated when some variable changes.
// Example: {{ valueCalculated | bindField:trigger }}
/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:bind
 * @function
 * @description
 * # bind
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('bindField', function () {
    return function (input) {
      return input;
    };
  });
