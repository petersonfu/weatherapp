'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:formatPrecipitation
 * @function
 * @description
 * # formatPrecipitation
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('formatPrecipitation', function(useUSUnits) {
    return function(precipitation) {
      var useUSUnitsValue = useUSUnits.value;
      if (precipitation === 0) {
        return '--';
      }

      // If using US units, convert from mm to inches.
      var amount = ((useUSUnitsValue) ? (precipitation * 0.0393701).toFixed(2) : precipitation);

      return amount + ((useUSUnitsValue) ? ' in' : ' mm');
    };
  });
