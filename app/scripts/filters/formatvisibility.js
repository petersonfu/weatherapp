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
  .filter('formatVisibility', function(useUSUnits) {
    return function(visibility) {
      var useUSUnitsValue = useUSUnits.value;

      // If using US units, convert to miles.
      var distance = (useUSUnitsValue ? visibility * 0.621371 : visibility).toFixed(1);

      return distance + ((useUSUnitsValue) ? ' mi' : ' km');
    };
  });
