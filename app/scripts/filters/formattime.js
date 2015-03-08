'use strict';

/**
 * @ngdoc filter
 * @name weatherappNgApp.filter:formatTime
 * @function
 * @description
 * # formatTime
 * Filter in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .filter('formatTime', function () {
    return function (date, showMinutes) {
      var hours    = date.getHours(),
          meridian = 'AM';

      if(hours >= 12) {
        if(hours > 12) {
          hours -= 12;
        }
        meridian = 'PM';
      }

      if (hours === 0) {
        hours = 12;
      }

      if(showMinutes) {
        var minutes = date.getMinutes();
        if(minutes < 10) {
          minutes = '0'+minutes;
        }

        return hours + ':' + minutes + ' ' + meridian;
      }
      return hours + ' ' + meridian;
    };
  });
