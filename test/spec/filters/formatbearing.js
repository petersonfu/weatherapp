'use strict';

describe('Filter: formatBearing', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var formatBearing;
  beforeEach(inject(function ($filter) {
    formatBearing = $filter('formatBearing');
  }));

  it('should return the input prefixed with "formatBearing filter:"', function () {
    var text = 'angularjs';
    expect(formatBearing(text)).toBe('formatBearing filter: ' + text);
  });

});
