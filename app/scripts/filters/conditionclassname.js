'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:conditionClassname
 * @function
 * @description
 * # conditionClassname
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('conditionClassname', function() {
    return function(data) {
      var classNames = '';

      if (data) {
        var conditionsNow = data.hourly.data[0];

        // It is day if you're between sunrise and sunset. Then add the is-day class. Otherwise, add is-night
        if (conditionsNow.time >= data.daily.data[0].sunriseTime && conditionsNow.time <= data.daily.data[0].sunsetTime) {
          classNames += 'is-day ';
        } else {
          classNames += 'is-night ';
        }

        // If the icon name includes cloudy OR there is a cloudCover above 0.2, make it cloudy.
        // The 0.2 is completely arbitary.
        if (conditionsNow.icon.indexOf('cloudy') !== -1 || conditionsNow.cloudCover > 0.2) {
          classNames += 'is-cloudy ';
        }
      }
      return classNames;
    };
  });
