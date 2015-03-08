'use strict';

describe('Filter: formatWind', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var formatWind;
  beforeEach(inject(function ($filter) {
    formatWind = $filter('formatWind');
  }));

  it('should return the input prefixed with "formatWind filter:"', function () {
    var text = 'angularjs';
    expect(formatWind(text)).toBe('formatWind filter: ' + text);
  });

});
