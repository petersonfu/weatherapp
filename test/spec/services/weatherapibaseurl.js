'use strict';

describe('Service: weatherAPIBaseURL', function () {

  // load the service's module
  beforeEach(module('weatherappNgApp'));

  // instantiate service
  var weatherAPIBaseURL;
  beforeEach(inject(function (_weatherAPIBaseURL_) {
    weatherAPIBaseURL = _weatherAPIBaseURL_;
  }));

  it('should do something', function () {
    expect(!!weatherAPIBaseURL).toBe(true);
  });

});
