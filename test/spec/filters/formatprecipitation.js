'use strict';

describe('Filter: formatPrecipitation', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var formatPrecipitation;
  beforeEach(inject(function ($filter) {
    formatPrecipitation = $filter('formatPrecipitation');
  }));

  it('should return the input prefixed with "formatPrecipitation filter:"', function () {
    var text = 'angularjs';
    expect(formatPrecipitation(text)).toBe('formatPrecipitation filter: ' + text);
  });

});
