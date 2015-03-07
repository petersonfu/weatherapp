'use strict';

/**
 * @ngdoc function
 * @name weatherappNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the weatherappNgApp
 */
angular.module('weatherappNgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
