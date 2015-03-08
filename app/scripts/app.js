/* global $ */

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

            // $q.all() combines multiple promises into one and resolve their
            // results as an array.
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
      .when('/city/:cityId', {
        templateUrl: 'views/city.html',
        controller: 'CityCtrl',
        resolve: {
          cityData: function(CityService, cities, $route, $location, conditionClassnameFilter) {
            // $route.current.params.cityId is the way to access routing params
            // before the path is actually switched. $routeParams is not
            // available at this time.
            var city = cities.city($route.current.params.cityId);
            if (!city) {
              // Switch to '/'' if city not found.
              $location.path('/');
            }
            return CityService
              .getWeatherData(city)
              .then(function(city) {
                $('body').removeClass().addClass('show-selected-city');
                $('body').removeClass('is-cloudy').removeClass('is-night').removeClass('is-day')
                  .addClass(conditionClassnameFilter(city.weatherData));
                // Must return city as the resolved value.
                return city;
              });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
