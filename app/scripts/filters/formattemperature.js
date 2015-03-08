'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:formatTemperature
 * @function
 * @description
 * # formatTemperature
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('formatTemperature', function (useUSUnits) {
    return function (temp) {
      var useUSUnitsValue = useUSUnits.value;

      // If using US units, then convert from Celsius.
      // See: http://fahrenheittocelsius.com
      return Math.round(useUSUnitsValue ?  (temp * 9/5 + 32) : temp) +'˚';
    };
  });
