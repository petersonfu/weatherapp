'use strict';

describe('Service: weatherAPIKey', function () {

  // load the service's module
  beforeEach(module('weatherappNgApp'));

  // instantiate service
  var weatherAPIKey;
  beforeEach(inject(function (_weatherAPIKey_) {
    weatherAPIKey = _weatherAPIKey_;
  }));

  it('should do something', function () {
    expect(!!weatherAPIKey).toBe(true);
  });

});
