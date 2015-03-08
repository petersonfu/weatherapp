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
  .filter('formatPrecipitation', function() {
    return function(precipitation) {
      if (precipitation == 0) {
        return '--';
      }

      // If using US units, convert from mm to inches.
      var useUSUnits = this.useUSUnits,
        amount = ((useUSUnits) ? (precipitation * 0.0393701).toFixed(2) : precipitation);

      return amount + ((useUSUnits) ? ' in' : ' mm');
    };
  });
