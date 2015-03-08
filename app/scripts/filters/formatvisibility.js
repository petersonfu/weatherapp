'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:formatVisibility
 * @function
 * @description
 * # formatVisibility
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('formatVisibility', function() {
    return function(visibility) {

      // If using US units, convert to miles.
      var useUSUnits = this.useUSUnits,
        distance = (useUSUnits ? visibility * 0.621371 : visibility).toFixed(1);

      return distance + ((useUSUnits) ? ' mi' : ' km');
    };
  });
