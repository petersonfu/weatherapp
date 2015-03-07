'use strict';

/**
 * @ngdoc function
 * @name weatherappNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherappNgApp
 */
angular.module('weatherappNgApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
