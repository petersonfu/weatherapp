'use strict';

/**
 * @ngdoc service
 * @name weatherappNgApp.cities
 * @description
 * # cities
 * Factory in the weatherappNgApp.
 */
angular.module('weatherappNgApp')
  .factory('cities', function () {
    // Service logic
    // ...

    var cities = [{
        id: 'sanjose',
        name: 'San Jose',
        lat: 37.3382082,
        lng: -121.88632860000001,
        lastUpdated: -1,
        weatherData: null
      }, {
        id: 'sydney',
        name: 'Sydney',
        lat: -33.8674869,
        lng: 151.20699020000006,
        lastUpdated: -1,
        weatherData: null
      }];

    // Public API here
    return {
      cities: function () {
        return cities;
      },

      city: function(id) {
        for (var i = 0; i < cities.length; ++i) {
          if (cities[i].id === id) {
            return cities[i];
          }
        }
        return null;
      }
    };
  });
