'use strict';

/**
 * @ngdoc function
 * @name weatherappNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherappNgApp
 */
angular.module('weatherappNgApp')
  .controller('MainCtrl', function ($scope, useUSUnits, citiesData) {
    $scope.cities = citiesData;
    $scope.useUSUnits = useUSUnits;

    $scope.sinceLastUpdated = function(lastUpdated) {
      return new Date().getTime() - lastUpdated;
    };
  });
