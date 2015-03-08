'use strict';

/**
 * @ngdoc function
 * @name weatherappNgApp.controller:CityCtrl
 * @description
 * # CityCtrl
 * Controller of the weatherappNgApp
 */
angular.module('weatherappNgApp')
  // localDate filter is injected as localDateFilter.
  .controller('CityCtrl', function ($scope, localDateFilter, $window, cityData, useUSUnits) {
    $scope.city = cityData;
    $scope.localDateFilter = localDateFilter;
    // Templates do not have context of Javascript global scopel, so Math has to
    // be explicitly set onto $scope. $window is the service wrapper around
    // global window object.
    $scope.Math = $window.Math;

    // Propagate useUSUnits service into templates.
    $scope.useUSUnits = useUSUnits;

    // Helper function. Could be filter, or function in $scope.
    $scope.relativeDate = function(localDate) {
      var diff = Math.round((localDate.getTime() - new Date().getTime()) / (24 * 3600 * 1000)),
        relativeDate = 'Today';
      if (diff < 0) {
        relativeDate = 'Yesterday';
      } else if (diff > 0) {
        relativeDate = 'Tomorrow';
      }
      return relativeDate;
    };
  });
