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
          immediate: [function() {
            $('body').removeClass().addClass('show-cities-list');
          }]
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
          immediate: [function() {
            $('body').removeClass().addClass('show-selected-city');
            $('body').removeClass('is-cloudy').removeClass('is-night').removeClass('is-day').addClass(this.conditionClassname(city.weatherData));
            $('nav').removeClass('is-cloudy').removeClass('is-night').removeClass('is-day').addClass(this.conditionClassname(city.weatherData));
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
