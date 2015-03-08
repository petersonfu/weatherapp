'use strict';

describe('Service: dataRefreshInterval', function () {

  // load the service's module
  beforeEach(module('weatherappNgApp'));

  // instantiate service
  var dataRefreshInterval;
  beforeEach(inject(function (_dataRefreshInterval_) {
    dataRefreshInterval = _dataRefreshInterval_;
  }));

  it('should do something', function () {
    expect(!!dataRefreshInterval).toBe(true);
  });

});
