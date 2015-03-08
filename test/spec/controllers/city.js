'use strict';

describe('Controller: CityCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherappNgApp'));

  var CityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CityCtrl = $controller('CityCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
