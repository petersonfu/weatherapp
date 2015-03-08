'use strict';

/**
 * @ngdoc function
 * @name weatherappNgApp.controller:CityCtrl
 * @description
 * # CityCtrl
 * Controller of the weatherappNgApp
 */
angular.module('weatherappNgApp')
  .controller('CityCtrl', function ($scope, localDateFilter, $window, cityData, useUSUnits) {
    $scope.city = cityData;
    $scope.localDateFilter = localDateFilter;
    $scope.Math = $window.Math;
    $scope.useUSUnits = useUSUnits;

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
