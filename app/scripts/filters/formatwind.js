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
  .filter('formatWind', function(useUSUnits, formatBearingFilter) {
    return function(conditions) {
      var useUSUnitsValue = useUSUnits.value;

      // If US units, then convert from km to miles.
      var speed = (useUSUnitsValue ? conditions.windSpeed * 0.621371 : conditions.windSpeed).toFixed(1);

      // Also, add the bearing.
      return speed + (useUSUnitsValue ? ' mph' : ' kph') + ' ' + formatBearingFilter(new Date(conditions.windBearing), true);
    };
  });
