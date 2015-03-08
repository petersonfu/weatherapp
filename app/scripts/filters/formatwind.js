'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:formatWind
 * @function
 * @description
 * # formatWind
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('formatWind', function() {
    return function(conditions) {

      // If US units, then convert from km to miles.
      var useUSUnits = this.useUSUnits,
        speed = (useUSUnits ? conditions.windSpeed * 0.621371 : conditions.windSpeed).toFixed(1);

      // Also, add the bearing.
      return speed + (useUSUnits ? ' mph' : ' kph') + ' ' + this.formatBearing(new Date(conditions.windBearing), true);
    };
  });
