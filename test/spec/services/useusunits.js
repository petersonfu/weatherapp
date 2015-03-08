'use strict';

describe('Service: useUSUnits', function () {

  // load the service's module
  beforeEach(module('weatherappNgApp'));

  // instantiate service
  var useUSUnits;
  beforeEach(inject(function (_useUSUnits_) {
    useUSUnits = _useUSUnits_;
  }));

  it('should do something', function () {
    expect(!!useUSUnits).toBe(true);
  });

});
