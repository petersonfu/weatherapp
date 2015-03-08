'use strict';

describe('Filter: formatPercentage', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var formatPercentage;
  beforeEach(inject(function ($filter) {
    formatPercentage = $filter('formatPercentage');
  }));

  it('should return the input prefixed with "formatPercentage filter:"', function () {
    var text = 'angularjs';
    expect(formatPercentage(text)).toBe('formatPercentage filter: ' + text);
  });

});
