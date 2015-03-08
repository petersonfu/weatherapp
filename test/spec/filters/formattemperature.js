'use strict';

describe('Filter: formatTemperature', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var formatTemperature;
  beforeEach(inject(function ($filter) {
    formatTemperature = $filter('formatTemperature');
  }));

  it('should return the input prefixed with "formatTemperature filter:"', function () {
    var text = 'angularjs';
    expect(formatTemperature(text)).toBe('formatTemperature filter: ' + text);
  });

});
