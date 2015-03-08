'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:weekDayForDate
 * @function
 * @description
 * # weekDayForDate
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('weekDayForDate', function () {
    return function (date) {
      return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][date.getDay()];
    };
  });
