'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:localDate
 * @function
 * @description
 * # localDate
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('localDate', function () {
    return function (time, timezoneOffset, timeOffsetSinceLastRefresh) {
      timeOffsetSinceLastRefresh = timeOffsetSinceLastRefresh ? timeOffsetSinceLastRefresh : 0;
      var date  = new Date(time * 1000 + timeOffsetSinceLastRefresh);
      var utc   = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes());

      utc.setHours(utc.getHours() + timezoneOffset);
      return utc;
    };
  });
