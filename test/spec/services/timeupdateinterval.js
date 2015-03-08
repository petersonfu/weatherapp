'use strict';

describe('Service: timeUpdateInterval', function () {

  // load the service's module
  beforeEach(module('weatherappNgApp'));

  // instantiate service
  var timeUpdateInterval;
  beforeEach(inject(function (_timeUpdateInterval_) {
    timeUpdateInterval = _timeUpdateInterval_;
  }));

  it('should do something', function () {
    expect(!!timeUpdateInterval).toBe(true);
  });

});
