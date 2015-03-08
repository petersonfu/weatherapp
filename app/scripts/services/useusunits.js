'use strict';

// This service provides a wrapper around the boolean useUSUnits value. It is
// intended to be a global object, and dependents can apply bindField:useUSUnits
// to trigger recalculate once it's changed. Note that controllers should have
// this service injected in and propagate it to $scope.
/**
 * @ngdoc service
 * @name weatherappNgApp.useUSUnits
 * @description
 * # useUSUnits
 * Factory in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .factory('useUSUnits', function () {
    var useUSUnits = {
      value: true
    };

    useUSUnits.flip = function() {
      useUSUnits.value = !useUSUnits.value;
    };

    return useUSUnits;
  });
