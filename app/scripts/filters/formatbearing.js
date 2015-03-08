'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:formatBearing
 * @function
 * @description
 * # formatBearing
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('formatBearing', function() {
    return function(brng) {
      // From: http://stackoverflow.com/questions/3209899/determine-compass-direction-from-one-lat-lon-to-the-other
      var bearings = ["NE", "E", "SE", "S", "SW", "W", "NW", "N"],
        index = brng - 22.5;

      if (index < 0)
        index += 360;
      index = parseInt(index / 45);

      return (bearings[index]);
    };
  });
