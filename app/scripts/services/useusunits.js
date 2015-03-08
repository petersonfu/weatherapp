'use strict';

/**
 * @ngdoc service
 * @name weatherappNgApp.useUSUnits
 * @description
 * # useUSUnits
 * Factory in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .factory('useUSUnits', function () {
    // Service logic
    // ...

    var useUSUnits = {
      value: true
    };

    useUSUnits.flip = function() {
      useUSUnits.value = !useUSUnits.value;
    }

    // Public API here
    return useUSUnits;
  });
