'use strict';

/**
 * @ngdoc service
 * @name weatherappNgApp.CityService
 * @description
 * # CityService
 * Factory in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .factory('CityService', function($http, $q, weatherAPIBaseURL, weatherAPIKey, dataRefreshInterval) {
    // Service logic
    // ...

    // Public API here
    return {
      getWeatherData: function(city) {
        if (!city || (new Date().getTime() - dataRefreshInterval) < city.lastUpdated) {
          return $q.when(city);
        }
        return $http({
          method: 'jsonp',
          url: weatherAPIBaseURL +
            weatherAPIKey + '/' + city.lat + "," + city.lng,
          params: {
            units: 'si',
            callback: 'JSON_CALLBACK'
          }
        }).then(function(jsonResponse) {
          city.weatherData = jsonResponse.data;
          city.lastUpdated = new Date().getTime();
          return city;
        });
      }
    };
  });
