'use strict';

/**
 * @ngdoc overview
 * @name weatherappNgApp
 * @description
 * # weatherappNgApp
 *
 * Main module of the application.
 */
angular
  .module('weatherappNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        resolve: {
          citiesData: function(CityService, cities, $q) {
            var promises = $.map(cities.cities(), function(city) {
              return CityService.getWeatherData(city);
            });

            return $q.all(promises).then(function(cities) {
              $('body').removeClass().addClass('show-cities-list');
              return cities;
            });
          }
        }
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/city/:city_id', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl',
        resolve: {
          cityData: function(CityService, cities, $route, $location, conditionClassnameFilter) {
            var city = cities.city($route.current.params.city_id);
            if (!city) {
              $location.path('/');
            }
            return CityService
              .getWeatherData(city)
              .then(function(city) {
                $('body').removeClass().addClass('show-selected-city');
                $('body').removeClass('is-cloudy').removeClass('is-night').removeClass('is-day')
                  .addClass(conditionClassnameFilter(city.weatherData));
                return city;
              });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
