'use strict';

describe('Service: currentLocationKey', function () {

  // load the service's module
  beforeEach(module('weatherappNgApp'));

  // instantiate service
  var currentLocationKey;
  beforeEach(inject(function (_currentLocationKey_) {
    currentLocationKey = _currentLocationKey_;
  }));

  it('should do something', function () {
    expect(!!currentLocationKey).toBe(true);
  });

});
