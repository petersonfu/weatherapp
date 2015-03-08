'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:formatPressureFromHPA
 * @function
 * @description
 * # formatPressureFromHPA
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('formatPressureFromHPA', function() {
    return function(pressure) {

      // If using US units, convert to inches.
      if (this.useUSUnits) {
        return ((pressure * 0.000295299830714 * 100).toFixed(2)) + " in";
      }

      return (pressure).toFixed(2) + ' hPa';
    };
  });
