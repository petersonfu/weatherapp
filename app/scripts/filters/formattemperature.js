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
  .filter('formatTemperature', function () {
    return function (temp) {
      var useUSUnits = false;
      // If using US units, then convert from Celsius.
      // See: http://fahrenheittocelsius.com
      return Math.round(useUSUnits ?  (temp * 9/5 + 32) : temp) +"˚";
    };
  });
