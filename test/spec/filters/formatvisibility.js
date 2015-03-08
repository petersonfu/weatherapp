'use strict';

describe('Filter: formatVisibility', function () {

  // load the filter's module
  beforeEach(module('weatherappNgApp'));

  // initialize a new instance of the filter before each test
  var formatVisibility;
  beforeEach(inject(function ($filter) {
    formatVisibility = $filter('formatVisibility');
  }));

  it('should return the input prefixed with "formatVisibility filter:"', function () {
    var text = 'angularjs';
    expect(formatVisibility(text)).toBe('formatVisibility filter: ' + text);
  });

});
