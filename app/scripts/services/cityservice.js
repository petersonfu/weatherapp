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
    return {
      getWeatherData: function(city) {
        if (!city || (new Date().getTime() - dataRefreshInterval) < city.lastUpdated) {
          // Always return a promise. $q.when() resolves immediately if provided a value.
          return $q.when(city);
        }
        return $http({
          // Angular way to send jsonp.
          method: 'jsonp',
          url: weatherAPIBaseURL + weatherAPIKey + '/' + city.lat + ',' + city.lng,
          params: {
            units: 'si',
            // Must be JSON_CALLBACK. Angularjs will replace this placeholder
            // when sending the actual jsonp request.
            callback: 'JSON_CALLBACK'
          }
        }).then(function(jsonResponse) {
          city.weatherData = jsonResponse.data;
          city.lastUpdated = new Date().getTime();
          // Must return city as the resolved value.
          return city;
        });
      }
    };
  });
